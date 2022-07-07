import Image from 'next/image';

const Logo = () => {
  return (
    <div className='relative w-20 h-20 mx-4 md:w-24 md:h-12 lg:px-16'>
      <Image src='/images/Logo.svg' layout='fill' />
    </div>
  );
};

export default Logo;
