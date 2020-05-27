import React from 'react';

const BoxColor = (props) => {
  const r = props.r;
  const g = props.g;
  const b = props.b;

  let color;

  switch (r) {
    case 255:
      color = 'red';
      break;
    case 128:
      color = 'green';
      break;
    default:
      color = 'white';
  }

  return (
    <div className="box-color" style={{ backgroundColor: color }}>
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
};

export default BoxColor;

/* <BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} /> */
