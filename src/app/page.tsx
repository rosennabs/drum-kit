'use client'
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

function Home() {


  return (
    <div
      className='h-screen flex items-center justify-center'
      style={{ backgroundImage: `url('images/background.jpg')` }}
    >
      <div className='flex flex-col items-center'>
        <h1 className='text-amber-600 text-5xl mb-16 uppercase'>
          Welcome to DrumKit!
        </h1>

        <Link href='/drums'>
          <button
          type='button'
          className='bg-green-700 hover:bg-green-800 text-white font-bold py-5 px-16 rounded-md text-3xl'
        >
          PLAY
        </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;
