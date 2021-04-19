import React, { useContext, useEffect, useState } from 'react';
import Payment from '../Payment/Payment';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import { Form, Col } from 'react-bootstrap';
import SideBar from "../../shared/SideBar/SideBar"

const Booking = () => {
    const { id } = useParams()
    const { handleSubmit } = useForm();
    const [loggedInUser] = useContext(UserContext)
    const { photoURL, name, email } = loggedInUser
    const [tourData, setTourData] = useState({})

    const [pname, setPName] = useState(null)
    const [pemail, setPEmail] = useState(null)
    const [destination, setDestination] = useState(null)
    const [tourInfo, setTourInfo] = useState(null)

    const [booking, setBooking] = useState(false)

    useEffect(() => {
        const url = `https://immense-sands-37830.herokuapp.com/tour/${id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setTourData(data))
    }, [id])
    const { title } = tourData

    const handleload = (e) => {
        if (e.target.name === 'user-name') {
            setPName(e.target.value)
        }
        if (e.target.name === 'user-email') {
            setPEmail(e.target.value)
        }
        if (e.target.name === 'user-destination') {
            setDestination(e.target.value)
        }
    }

    const onSubmit = data => {
        const tourData = {
            name: pname,
            email: pemail,
            destination: destination,
        };
        console.log(tourData)
        setTourInfo(tourData)
        setBooking(!false)
    }

    return (
        <div className="row"   >
            <SideBar />
            <div className="col-md-10 p-4 mt-3" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex justify-content-between mb-5">
                    <h5 className="mx-3" >Book</h5>
                    <img className="sign-in-image" src={photoURL} alt="" />
                </div>

                <div className="col-md-8">

                    <Form className='product-input' onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-muted">You have to click on input field for checking your data</p>
                        <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label> <br />
                            <input type="text" id="user-name" name="user-name" value={name} onBlur={handleload} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Email</Form.Label> <br />
                            <input type="text" id="user-email" name="user-email" value={email} onBlur={handleload} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Destination</Form.Label> <br />
                            <input type="text" name="user-destination" id="user-destination" value={title} onBlur={handleload} />
                        </Form.Group>

                        <div className=" d-flex justify-content-end">
                            <button className="btn btn-success " type="submit">
                                BooKing
                                </button>
                        </div>
                    </Form>
                </div>

                {
                    booking &&
                    <div className="col-md-8 mt-3 product-input">
                        <h5 className="mb-3">Pay</h5>
                        <Payment data={tourInfo} />
                    </div>

                }

            </div>
        </div>
    );
};

export default Booking;