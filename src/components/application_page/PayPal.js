import React from 'react';
import ReactDOM from 'react-dom';
const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const PayPal = ({ amount, handleDepositMoney, displayInfoModal }) => {
  const depositMoney = async (value) => await handleDepositMoney(value);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };
  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    if (order.status === 'COMPLETED') {
      depositMoney(order.purchase_units[0].amount.value);

      if (depositMoney.success) return order;
      else return;
    }
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PayPal;
