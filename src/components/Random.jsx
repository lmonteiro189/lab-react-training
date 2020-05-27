import React from 'react';

const Random = (props) => {
  let number = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
    <p>
      Random value between {props.min} and {props.max}: {number}
    </p>
  );
};

export default Random;
