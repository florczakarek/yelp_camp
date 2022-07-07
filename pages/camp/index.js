import { Fragment } from 'react';
import Card from '../../components/camps/Card';
import Logo from '../../components/Logo';
import Menu from '../../components/camps/Menu';
import Testimonials from '../../components/camps/Testimonials';
import Map from '../../components/camps/Map';
import Link from 'next/link';

const CompgroungPage = () => {
  return (
    <Fragment>
      <div className='bg-white p-4'>
        <div className=' flex items-center justify-between px-6 md:my-4'>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
          <Menu />
        </div>
        <Card />
        <div className='p-8 pb-0'>
          <Testimonials />
          <Map />
        </div>
        <footer className='px-6 md:my-4'>
          <Logo />
        </footer>
      </div>
    </Fragment>
  );
};

export default CompgroungPage;
