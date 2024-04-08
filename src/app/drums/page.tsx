import React from 'react'
import Link from 'next/link';
import 'tailwindcss/tailwind.css';


function Drums() {
  const drumHits = [
    {
    key: "A",
    sound: "CLAP"
    },
    {
    key: "S",
    sound: "HIHAT"
    },
    {
    key: "D",
    sound: "KICK"
    },
    {
    key: "F",
    sound: "OPENHAT"
    },
    {
    key: "G",
    sound: "BOOM"
    },
    {
    key: "H",
    sound: "RIDE"
    },
    {
    key: "J",
    sound: "SNARE"
    },
    {
    key: "K",
    sound: "TOM"
    },
    {
    key: "L",
    sound: "TINK"
    },

  ]; 

  return (
    <div className='h-screen w-100 flex flex-col items-center justify-center'
      style={{ backgroundImage: `url('/gameBackground.jpg')` }}>
      <div className='w-90 flex flex-col items-center'>
        <h1 className='text-5xl text-white mb-16'>Hit the drums!</h1>

        <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col items-center border-solid border-2 border-green-400 py-4 px-8'>
            <p className='text-4xl text-white'>A</p>
            <p className='text-amber-400 text-sm'>CLAP</p>
          </div>
        </div>

        <Link href='/'>
          <span className='text-2xl underline underline-offset-4 text-amber-400 ml-96'>Finish</span>
        </Link>
      </div>
      
    </div>
  )
}

export default Drums;