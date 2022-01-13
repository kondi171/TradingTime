import React from 'react';
import ReactDOM from 'react-dom';
const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const PayPal = (props) => {
  const createOrder = (data, actions) => {
    console.log(data);
    console.log(actions.order);
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: props.value,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PayPal;
