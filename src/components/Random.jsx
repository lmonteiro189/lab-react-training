import React from 'react';

const Random = (props) => {
  // let min = props.min;
  // let max = props.max;
  let number = Math.floor(Math.random() * (props.max - props.min) + props.min);
  // console.log(number);
  return (
    <p>
      Random value between {props.min} and {props.max}: {number}
    </p>
  );
};

export default Random;
