import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const PaymentCard = (props) => {
  const { name, email, destination } = props.data
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }


    const cardElement = elements.getElement(CardElement);


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    const getUserInfo = {
      name: name,
      email: email,
      destination: destination,
      payment: { ...paymentMethod }
    }


    const url = `https://immense-sands-37830.herokuapp.com/addDeals`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(getUserInfo)
    })
      .then(res => console.log('server side response', res))
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default PaymentCard;