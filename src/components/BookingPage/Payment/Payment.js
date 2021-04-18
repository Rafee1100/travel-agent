import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from '../PaymentCard/PaymentCard';

const stripePromise = loadStripe('pk_test_51IhbEkE5YvaDl7QHWlvyfKDwwV3TWxWqp5E3Xsuy37B4AnmMSSe9tBQbi8dE32Icriwag33KCzOaIkLtfumGx8Hl00Akt2PnmD');


const Payment = (props) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard data={props.data}/>
        </Elements>
    );
};

export default Payment;