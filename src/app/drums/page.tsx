import React from 'react'
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import {drumHits} from './helpers';


function Drums() {
  
  return (
    <div className='h-screen w-100 flex flex-col items-center justify-center'
      style={{ backgroundImage: `url('/gameBackground.jpg')` }}>
      <div className='w-90 flex flex-col items-center'>
        <h1 className='text-5xl text-white mb-16'>Hit the drums!</h1>

        
        <div className='flex flex-row justify-evenly'>
          {drumHits.map((hit) => (
            <div key={hit.key} className='flex flex-col items-center border-solid border-4 border-green-400 mx-4 py-4 px-8 mb-16' style={{ width: '100px' }}>
            <p className='text-4xl text-white'>{hit.key}</p>
            <p className='text-amber-400 text-sm'>{hit.sound}</p>
          </div>
        ))}
          
        </div>

        <Link href='/'>
          <span className='text-2xl underline underline-offset-4 text-white'>Finish</span>
        </Link>
      </div>
      
    </div>
  )
}

export default Drums;