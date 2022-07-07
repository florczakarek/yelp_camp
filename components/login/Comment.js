import Image from 'next/image';

const Comment = () => {
  return (
    <div className='p-6 md:p-10 bg-[#F9F5F1] lg:px-24 lg:py-64 lg:min-w-[450px] lg:max-w-[700px] '>
      <p className='text-xl md:text-2xl font-bold leading-relaxed mb-4 quote'>
        "YelpCamp has honestly saved me hours of research time, and the camps on
        here are definitely well picked and added."
      </p>
      <div className='flex items-center'>
        <div className='relative h-8 w-8 md:w-10 md:h-10 mr-4'>
          <Image src='/images/User.svg' alt='User testimonial' layout='fill' />
        </div>
        <div>
          <h5 className='text-sm md:text-[16px] font-bold'>May Andrews</h5>
          <h6 className='text-sm md:text-[16px] text-[#726F6C]'>
            Professional Hiker
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Comment;
