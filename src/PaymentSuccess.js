import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const { orderId } = useParams();
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="card-title">Order Successful!</h1>
              <p className="card-text">Your order has been placed and the payment was successful. Your order ID is: {orderId}</p>
              <a href="/" className="btn btn-primary">Back to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
