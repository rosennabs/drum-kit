import React from 'react'
import Link from 'next/link';
import 'tailwindcss/tailwind.css';


function Drums() {
  return (
    <div className='h-screen w-100 flex flex-col items-center justify-center'
      style={{ backgroundImage: `url('/gameBackground.jpg')` }}>
      <div className='w-90 flex flex-col items-center'>
        <h1 className='text-5xl text-white mb-16'>Hit the drums!</h1>
        <Link href='/'>
          <span className='text-2xl underline underline-offset-4 text-amber-400 ml-96'>Finish</span>
        </Link>
      </div>
      
    </div>
  )
}

export default Drums;