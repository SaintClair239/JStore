import React from 'react';

function Container(props) {
  const className = props.className;
  return (
    <div className={`w-11/12 max-w-5xl my-0 mx-auto ${className}`}>
      {props.children}
    </div>
  );
}

export default Container;
