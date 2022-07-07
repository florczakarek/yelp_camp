import Link from 'next/link';

const SignInForm = () => {
  return (
    <section className='p-6 md:p-10'>
      <h2 className='text-3xl md:text-4xl font-semibold mb-6'>
        Start exploring camps from all around the world.
      </h2>
      <form className='flex flex-col md:w-[36rem]'>
        <label className='flex flex-col text-[#726F6C] text-sm md:text-[16px] mb-4 '>
          Username
          <input
            type='text'
            placeholder='johndoe_91'
            className='w-full p-4 md:p-5 bg-[#f7f7f7] outline-0 mt-4'
          />
        </label>
        <label className='flex flex-col text-[#726F6C] text-sm md:text-[16px] mb-4'>
          Password
          <input
            type='password'
            placeholder='Enter your password'
            className='w-full p-4 md:p-5 bg-[#f7f7f7] outline-0 mt-4'
          />
        </label>

        <button className='button w-full mb-4 m-auto hover:opacity-80 transition ease-out duration-300 md:text-[16px] md:p-5'>
          Login
        </button>
        <div className='flex '>
          <p className='text-[#726F6C] text-sm md:text-[16px] mr-1'>
            Not a user yet?
          </p>
          <div className='text-[#21A0D2] text-sm md:text-[16px] font-bold underline'>
            <Link href='/register'> Create an account</Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignInForm;
