import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Row, Col, Table} from 'react-bootstrap'

const LocalPage = () => {
    const [locals, setLocals] = useState([]);

    const getLocal = async() =>{
        const url="https://dapi.kakao.com/v2/local/search/keyword.json";
        const config={
            headers: {"Authorization": "KakaoAK 0643d1622ac8151e0c3c58f6f35889e8"},
            params: {query: '홍익전원빌라트', page:1, size:5}
        }
        const result = await axios.get(url, config);
        console.log(result);
        setLocals(result.data.documents);
    }

useEffect(()=>{ //페이지가 렌더링 될 때 호출
    getLocal();
},[])

    return (
        <Row>
            <Col>
                <h1 className='text-center my-5'>지역검색</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <td>장소명</td>
                            <td>전화</td>
                            <td>주소</td>
                        </tr>
                    </thead>
                    <tbody>
                        {locals.map(local=>
                            <tr key={local.id}>
                                <td>{local.place_name}</td>
                                <td>{local.phone}</td>
                                <td>{local.address_name}</td>
                            </tr>    
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default LocalPage