import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../components/Logo';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col bg-[#f9f5f1]'>
      <Head>
        <title>Yelp Camp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Logo />
      <Hero />
    </div>
  );
};

export default Home;
