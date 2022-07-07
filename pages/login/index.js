import SignInForm from '../../components/login/SignInForm';
import Comment from '../../components/login/Comment';
import Header from '../../components/login/Header';

const Login = () => {
  return (
    <div className='lg:flex lg:h-[100vh]'>
      <div>
        <Header />
        <div className='lg:py-16 lg:px-24'>
          <SignInForm />
        </div>
      </div>
      <div className='lg:flex lg:h-[100vh]'>
        <Comment />
      </div>
    </div>
  );
};

export default Login;
