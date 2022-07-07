import Image from 'next/image';

const Card = () => {
  return (
    <section className='px-8'>
      <div className='border-gray-300 rounded-md border-[1px] p-8 shadow-md'>
        <div className='relative h-56 w-full mb-4'>
          <Image
            src='/images/camps/Mount Ulap.jpg'
            className='rounded-md'
            alt='Mount Ulap'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-bold'>Mount Ulap</h2>
            <span className='font-normal text-sm'>$104.99/night</span>
          </div>
          <div>
            <p className='text-sm text-[#726F6C] mb-2'>
              Mount Ulap is a 7.7 kilometer modaretely trafficked point-to-point
              trail located near Tuba, Benguet, Philippines that offers the
              chance to see wildfire and is rated as moderate. The trail is
              primarily used for hiking.
            </p>
            <i className='text-sm text-[#726F6C]'>Submitted by Andrew Mike</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
