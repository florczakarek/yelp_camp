import Link from 'next/link';
import Logo from '../../components/Logo';
import SignInForm from '../../components/SignInForm';
import Comment from '../../components/Comment';

const Login = () => {
  return (
    <div>
      <div className='flex items-center justify-between mx-4 md:mx-8 md:mt-4'>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <Link href='/camp'>
          <p className='text-sm text-[#726F6C] mr-2 md:text-[16px] cursor-pointer hover:text-black transition ease-out duration-300 '>
            ← Back to campgrounds
          </p>
        </Link>
      </div>
      <SignInForm />
      <Comment />
    </div>
  );
};

export default Login;
