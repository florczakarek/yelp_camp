import Image from 'next/image';

const Map = () => {
  return (
    <section className='card mt-8'>
      <div className=' relative w-full h-80 md:h-96'>
        <Image
          src='/images/Map.png'
          className='rounded-md'
          layout='fill'
          objectFit='cover'
          alt='map'
        />
      </div>
    </section>
  );
};

export default Map;
