import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className='p-3 lg:px-24'>
      <Image src='/images/Logo.svg' width={100} height={50} />
    </div>
  );
};

export default Logo;
