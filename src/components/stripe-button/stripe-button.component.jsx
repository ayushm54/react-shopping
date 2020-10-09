import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // Stripe needs the price in cents so we are converting dollars to cent
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HaFDnL8ERxt7aXMsXRkGv2kiYmeNgw4uB9FkRcnDhW4JszHA0sVLtMtiSqIgsSt61naeDSATRD7LTXr0qy6gvGH008gq4ntvH";

  // this would be fired after click the pay now button is
  // and would use the generated token, whcin we can use to call
  // a BE service to generate charges and make the actual payment
  const onToken = (token) => {
    // console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Shopping Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
