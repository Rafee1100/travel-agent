import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import SideBar from "../../shared/SideBar/SideBar"
import axios from 'axios';
import { useForm } from "react-hook-form";

const Review = () => {
    const { handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [name, setName] = useState(null);
    const [from, setFrom] = useState(null);
    const [quote, setQuote] = useState(null);

    const onSubmit = data => {
        const reviewData = {
            name: name,
            imageURL: imageURL,
            from: from,
            quote: quote
        };
        const url = `http://localhost:5000/addReview`;

        console.log(reviewData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        }
        if (e.target.name === 'from') {
            setFrom(e.target.value)
        }
        if (e.target.name === 'quote') {
            setQuote(e.target.value)
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
                <div className="d-flex justify-content-around">
                    <h5>review</h5>
                    <h5>Email</h5>
                </div>
                <div>
                    <Form className='product-input' onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Your Name" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>From</Form.Label>
                            <Form.Control name="from" type="text" placeholder="Where are you from" onChange={handleChange} />
                        </Form.Group>


                        <Form.Group as={Col} >
                            <Form.Label>Quote</Form.Label>
                            <Form.Control type="text" name="quote" placeholder="Write you review" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.File id="exampleFormControlFile1" label="Add Photo" onChange={handleImageUpload} />
                        </Form.Group>

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

export default Review;