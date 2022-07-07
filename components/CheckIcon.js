const CheckIcon = ({ text }) => {
  return (
    <div className='flex space-x-2 my-3 items-center lg:text-lg'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-[#189F84] lg:h-7 lg:w-7'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fill-rule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clip-rule='evenodd'
        />
      </svg>
      <p className='text-md text-[#726F6C]'>{text}</p>
    </div>
  );
};

export default CheckIcon;
