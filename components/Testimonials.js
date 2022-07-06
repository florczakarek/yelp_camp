import Button from './Button';
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
    <section className='border-gray-300 rounded-md border-2'>
      {testimonials.map((item) => {
        const { name, date, review } = item;
        return (
          <div className='p-8 space-y-3'>
            <div className='flex justify-between'>
              <h2 className='text-sm font-bold'>{name}</h2>
              <span className='text-xs text-[#726F6C] '>{date}</span>
            </div>
            <p className='text-sm text-[#726F6C] '>{review}</p>
            <div className='w-full h-[1px] bg-gray-300'></div>
          </div>
        );
      })}

      <div className='relative flex items-center p-8'>
        <div className='absolute ml-4'>
          <ChatIcon className='w-5 h-5 z-10 text-white' />
        </div>
        <button className='bg-black text-white rounded-sm text-sm w-40 py-3 pl-6'>
          Leave a Review
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
