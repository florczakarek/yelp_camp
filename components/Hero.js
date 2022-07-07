import Image from 'next/image';
import Home from '../components/Home';

const Hero = () => {
  return (
    <section className='lg:flex flex-row-reverse'>
      <div className='relative h-80 w-full lg:w-1/2 lg:h-[100vh]'>
        <Image src='/images/hero-mobile.jpg' layout='fill' objectFit='cover' />
      </div>
      <Home />
    </section>
  );
};

export default Hero;
