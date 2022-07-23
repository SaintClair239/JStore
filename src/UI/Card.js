import React from 'react';

const Card = props => {
  const className = props.className;
  return (
    <div
      className={`w-full max-w-xs h-96 p-2 my-4 bg-white rounded-2xl ${className} sm:w-80`}
    >
      {props.children}
    </div>
  );
};

export default Card;
