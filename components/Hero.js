import Image from 'next/image';
import Home from '../components/Home';

const Hero = () => {
  return (
    <section className='lg:flex flex-row-reverse flex-1 '>
      <div className='relative h-80 w-full lg:h-[100vh] lg:flex flex-shrink flex-3 '>
        <Image src='/images/hero-mobile.jpg' layout='fill' objectFit='cover' />
      </div>
      <Home className='lg:flex flex-4' />
    </section>
  );
};

export default Hero;
