import React from 'react';

const Button = ({ title }) => {
  return (
    <button className='button lg:text-lg lg:px-6 lg:rounded-lg'>{title}</button>
  );
};

export default Button;
