import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageProductItem = (props) => {
    console.log(props)
    const{_id,title,cost,duration}=props.data;

    const deleteService = (id) => {
        const url = `https://immense-sands-37830.herokuapp.com/deleteService/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    return (
        <div className="d-flex justify-content-between text-center">
        <Col> <p>{title}</p></Col>
        <Col><p>{cost}</p></Col>
        <Col><p>{duration}</p></Col>
        <Col> <button onClick={() => deleteService(_id)}><FontAwesomeIcon className="mx-1 text-danger" icon={faTrashAlt} /></button></Col>
    </div>
    );
};

export default ManageProductItem;