import { Fragment } from 'react';
import Card from '../../components/Card';
import Logo from '../../components/Logo';
import Menu from '../../components/Menu';
import Testimonials from '../../components/Testimonials';

const CompgroungPage = () => {
  return (
    <Fragment>
      <div className='bg-white'>
        <div className=' flex items-center justify-between px-5'>
          <Logo />
          <Menu />
        </div>
        <Card />
        <div className='p-8'>
          <Testimonials />
        </div>
      </div>
    </Fragment>
  );
};

export default CompgroungPage;
