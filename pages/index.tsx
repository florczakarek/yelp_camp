import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from '../components/Logo';
import Hero from '../components/home/Hero';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col bg-[#f9f5f1]'>
      <Head>
        <title>Yelp Camp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='md:my-4 lg:hidden'>
        <Logo />
      </div>
      <Hero />
    </div>
  );
};

export default Home;
