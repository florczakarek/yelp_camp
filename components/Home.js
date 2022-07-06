import Image from 'next/image';
import Button from '../components/Button';
import CheckIcon from '../components/CheckIcon';

const Home = () => {
  return (
    <div className='space-y-4 mx-4 lg:min-w-[500px] xl:min-w-[700px] lg:p-20'>
      <h2 className='text-3xl font-semibold mt-6 min-w-[200px] sm:text-[2.75rem] lg:text-6xl'>
        Explore the best camps on Earth.
      </h2>
      <p className='text-md text-[#726F6C] lg:text-xl'>
        YelpCamp is a curated list of the best camping spots on Earth.
        Unfiltered and unbiased reviews.
      </p>
      <div>
        <CheckIcon text='Add your own camp suggestions.' />

        <CheckIcon text='Leave reviews and experiences.' />

        <CheckIcon text='See location for all camps.' />
      </div>
      <Button title='View Campgrounds' />
      <p className='text-md text-[#726F6C] lg:text-lg'>Partnered with:</p>
      <div className='flex'>
        <div className=''>
          <Image src='/images/assets/Airbnb.svg' width={100} height={50} />
        </div>
        <div>
          <Image src='/images/assets/Booking.svg' width={120} height={50} />
        </div>
        <div>
          <Image src='/images/assets/Plum Guide.svg' width={120} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Home;