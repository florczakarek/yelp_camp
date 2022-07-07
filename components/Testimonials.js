import { ChatIcon } from '@heroicons/react/outline';

const testimonials = [
  {
    name: 'Adam Jones',
    date: '13h ago',
    review:
      'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
  },
  {
    name: 'Isaac Dylan',
    date: '1 day ago',
    review:
      'Travelling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
  },
  {
    name: 'Hudson Luca',
    date: '3 days ago',
    review:
      'Definitely recommend going there, not too far nao a lot of people to ruin the experience.',
  },
];

const Testimonials = () => {
  return (
    <section className='border-gray-300 rounded-md border-[1px] shadow-md'>
      {testimonials.map((item) => {
        const { name, date, review } = item;
        return (
          <div className='px-8 pt-8'>
            <div className='flex justify-between mb-2'>
              <h2 className='text-sm font-bold'>{name}</h2>
              <span className='text-xs text-[#726F6C] '>{date}</span>
            </div>
            <p className='text-sm text-[#726F6C]'>{review}</p>
            <div className='w-full h-[1px] bg-gray-300 mt-4'></div>
          </div>
        );
      })}

      <div className='relative flex items-center ml-8 my-8 hover:opacity-80 transition ease-out duration-300'>
        <div className='absolute ml-4'>
          <ChatIcon className='w-5 h-5 z-10 text-white' />
        </div>
        <button className='bg-black text-white rounded-sm text-sm w-40 py-3 pl-6 cursor-pointer '>
          Leave a Review
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
