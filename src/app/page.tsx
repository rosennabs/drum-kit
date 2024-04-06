'use client'
import 'tailwindcss/tailwind.css';

function Home() {

  const handleButtonClick = () => {
  console.log("Button Clicked");
  
}

  return (
    <div
      className='h-screen flex items-center justify-center'
      style={{ backgroundImage: `url('/background.jpg')` }}
    >
      <div className='flex flex-col items-center'>
        <h1 className='text-amber-600 text-5xl mb-16 uppercase'>
          {' '}
          Welcome to DrumFest!{' '}
        </h1>
        <button
          type='button'
          onClick={()=> handleButtonClick()}
          className='bg-green-700 hover:bg-green-800 text-white font-bold py-5 px-16 rounded-md text-3xl'
        >
          START
        </button>
      </div>
    </div>
  );
}

export default Home;
