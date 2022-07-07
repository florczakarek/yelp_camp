const Button = ({ title }) => {
  return (
    <button className='button w-44 lg:w-56 md:lg:text-lg lg:px-6 lg:rounded-lg'>
      {title}
    </button>
  );
};

export default Button;
