import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from '../PaymentCard/PaymentCard';

const stripePromise = loadStripe('pk_test_51Ie9roAgJkSE0uWmlY7olxoGtV0zlPHbY4B3M63txtwAaDOK5gN4CoVuUjPRHdTUYHzceKBE49fFlfIrBjyLKZpA00lZpJWs8g');


const Payment = (props) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard data={props.data}/>
        </Elements>
    );
};

export default Payment;