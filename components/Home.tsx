import React from 'react'
import ChangingText from './elements/ChangingText'

const Home = () => {
  return (
    <div className='h-auto text-white scroll-smooth' style={{scrollBehavior: 'smooth'}}>
      <div className='h-screen w-screen flex items-center justify-center text-amber-50 bg-radial from-gray-800 to-gray-950 bg-center overflow-hidden'>
        <video className='w-screen' autoPlay muted loop>
          <source src='/hero-vid.mp4' type='video/mp4'></source>
        </video>
        <div className='h-screen w-screen bg-gray-950 opacity-80 absolute'></div>
        <div className='absolute flex justify-center items-center flex-col'>
          <h1 className='text-6xl font-lexpeta -tracking-widest font-medium text-center text-shadow-lg text-white'>Hello! My name is...</h1>
          <p className='text-center font-lacquer tracking-tight text-9xl font-bold mt-7 text-white text-shadow-lg text-shadow-black'>satrIa cHandRa</p>
          <ChangingText />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute bottom-7 stroke-2 stroke-gray-200">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
        <p className='absolute bottom-15 font-bold font-lexpeta tracking-tight text-gray-200'>SCROLL</p>
      </div>
      <div className='h-screen w-screen bg-radial from-gray-900 to-gray-950 flex flex-col justify-center items-center relative'>
        <h2 className='font-lexpeta tracking-tighter text-4xl font-bold absolute top-15'>Past Experience</h2>
      </div>
    </div>
  )
}

export default Home
