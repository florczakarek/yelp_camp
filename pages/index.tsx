import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Yelp Camp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h2>Hello Yelp Camp</h2>
    </div>
  );
};

export default Home;
