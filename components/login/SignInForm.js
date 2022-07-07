import { useState } from 'react';

const SignInForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const switchUserHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <section className='p-6 md:p-10'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-6'>
        Start exploring camps from all around the world.
      </h2>
      <form className='flex flex-col md:w-[36rem]'>
        <label className='login_label'>
          Username
          <input type='text' placeholder='johndoe_91' className='login_input' />
        </label>
        <label className='login_label'>
          Password
          <input
            type='password'
            placeholder='Enter your password'
            className='login_input'
          />
        </label>

        <button className='button w-full mb-4 m-auto hover:opacity-80 transition ease-out duration-300 md:text-[16px] md:p-5'>
          {isLoggedIn ? 'Login' : 'Create an Account'}
        </button>
        <div className='flex'>
          <p className='text-[#726F6C] text-sm md:text-[16px] mr-1'>
            {isLoggedIn ? 'Not a user yet?' : 'Already a user?'}
          </p>
          <div
            onClick={switchUserHandler}
            className='text-[#21A0D2] text-sm md:text-[16px] font-bold underline cursor-pointer'
          >
            {!isLoggedIn ? 'Sign in' : 'Create an account'}
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignInForm;
