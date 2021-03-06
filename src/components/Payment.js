import React from "react";
import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime(),
  email: "udeh.ifechi@gmail.com",
  amount: 217000,
  publicKey: "pk_test_9df5ae8ad70f871d7a51666d29a8c712e33cb4e7",
};

const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  // {
  /* <Redirect to='/thank-you'/>  */
  // }
  // return <Redirect to="/thank-you" />;
  // console.log(reference);
  setTimeout(() => {
    window.location = "/thank-you";
  }, 1000);
};

const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

function PaystackHookExample() {
  const initializePayment = usePaystackPayment(config);
  return (
    <>
      <button
        class="cart-call-to-action-btn-white"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Pay Now
      </button>
    </>
  );
}

export default PaystackHookExample;
