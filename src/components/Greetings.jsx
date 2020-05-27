import React from 'react';

const StrongBlock = (props) => {
  const abc = props.message;
  return (
    <div>
      <strong>{abc}</strong>
    </div>
  );
};
export default StrongBlock;
