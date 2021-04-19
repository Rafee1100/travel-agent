import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import './AddService.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import SideBar from '../../shared/SideBar/SideBar'

const AddService = () => {

    const { handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [tourTitle, setTourTitle] = useState(null);
    const [tourCost, setTourCost] = useState(null);
    const [tourDuration, setTourDuration] = useState(null);
    const [tourDescription, setTourDescription] = useState(null);

    const onSubmit = data => {
        const tourData = {
            title: tourTitle,
            imageURL: imageURL,
            cost: tourCost,
            duration: tourDuration,
            description: tourDescription
        };
        const url = `https://immense-sands-37830.herokuapp.com/addTour`;

        console.log(tourData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tourData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setTourTitle(e.target.value)
        }
        if (e.target.name === 'cost') {
            setTourCost(e.target.value)
        }
        if (e.target.name === 'duration') {
            setTourDuration(e.target.value)
        }
        if (e.target.name === 'description') {
            setTourDescription(e.target.value)
        }

    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '0182f1c3c47306082d45b8cb5e427478');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="row" >
            <SideBar />
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex justify-content-between">
                    <h5>Add Service</h5>
                    <h5>Email</h5>
                </div>
                <div>
                    <Form className='product-input' onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter title" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Cost</Form.Label>
                                <Form.Control name="cost" type="text" placeholder="Enter Cost" onChange={handleChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Duration</Form.Label>
                                <Form.Control type="number" name="duration" placeholder="duration" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} className="mt-1 mx-3">
                                <Form.File id="exampleFormControlFile1" label="Add Photo" onChange={handleImageUpload} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" placeholder="Write Something" onChange={handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <div className=" d-flex justify-content-end">
                            <button className="btn btn-success " type="submit">
                                Save
                             </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddService;