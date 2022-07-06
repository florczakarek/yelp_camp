import Image from 'next/image';
import React from 'react';

const Menu = () => {
  return (
    <div className='bg-[#f9f5f1] rounded-md h-8 w-8 flex items-center justify-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M4 6h16M4 12h8m-8 6h16'
        />
      </svg>
    </div>
  );
};

export default Menu;
