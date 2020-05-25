import React from 'react';

const IdCard = (props) => {
  return (
    <div className="Idcard">
      <p>Last name: {props.lastName}</p>
      <p>First name: {props.firstName}</p>
      <p>Gender: {props.gender} </p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.dateOfBirth} </p>
      <p>Picture: {props.url}</p>
    </div>
  );
};

export default IdCard;
