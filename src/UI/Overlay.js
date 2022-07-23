import React from 'react';

const Overlay = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className='inset-0 fixed z-10 bg-slate-400 opacity-70 md:hidden'
    ></div>
  );
};

export default Overlay;
