import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import SideBar from '../../../shared/SideBar/SideBar';
import ManageProductItem from '../ManageProductItem/ManageProductItem';

const ManageProduct = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (

        <div className="row">
            <SideBar />
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, top: 50, backgroundColor: "#F4FDFB" }}>
                <Col  className=" mx-3">
                    <h3 className="mb-5 text-center ">Manage Services</h3>
                    <div className="d-flex justify-content-between mb-2 text-center">
                        <Col><h6>Tourist Area</h6></Col>
                        <Col><h6>Cost</h6></Col>
                        <Col><h6>Duraiton</h6></Col>
                        <Col><h6>Action</h6></Col>
                    </div>
                   {
                        service.map(data => <ManageProductItem key={data._id} data={data}/>)
                   }
                </Col>
            </div>
        </div >

    );
};

export default ManageProduct;