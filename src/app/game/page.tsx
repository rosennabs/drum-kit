import React from 'react'
import 'tailwindcss/tailwind.css';

function Game() {
  return (
    <div className='h-screen flex items-center justify-center'
      style={{ backgroundImage: `url('/gameBackground.jpg')` }}>
      <h1 className='text-5xl text-white'>Hit the drums!</h1>
    </div>
  )
}

export default Game