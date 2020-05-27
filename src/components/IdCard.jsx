import React from 'react';

const IdCard = (props) => {
  const data = JSON.stringify(props.birth);
  return (
    <div className="box-color">
      <div>
        <img src={props.picture} alt="img" width="100%" />
      </div>
      <div>
        <p>Last name: {props.lastName}</p>
        <p>First name: {props.firstName}</p>
        <p>Gender: {props.gender} </p>
        <p>Height: {props.height}</p>
        <p>Birth: {data} </p>
      </div>
    </div>
  );
};

export default IdCard;
