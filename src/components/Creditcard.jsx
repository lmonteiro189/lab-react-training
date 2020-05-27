import React from 'react';

const Creditcard = (props) => {
  // const backcolor: {props.color}
  return (
    <div className="credicard">
      <div style={{ backgroundColor: 'backcolor' }}>
        <p>type: {props.type}</p>
        <p>number: {props.number}</p>
        <p>expirationMonth: {props.expirationMonth} </p>
        <p>expirationYear: {props.expirationYear}</p>
        <p>bank: {props.bank} </p>
        <p>owner: {props.owner}</p>
        <p>bgColor: {props.bgColor}</p>
        <p>color:{props.color} </p>
      </div>
    </div>
  );
};

export default Creditcard;
