import React from 'react';
import HeroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full px-24 py-16 bg-[#092640] text-white'>
        <div className='flex flex-col items-center md:items-start space-y-4 md:space-y-8 md:w-[56%]'>
            <p className='text-3xl text-center md:text-7xl md:text-start font-bold'>Secured connections, empowered teams</p>
            <p className='text-lg text-center md:text-start font-thin text-white'>Bring your teams together in a centrally-managed ecosystem with complete oversight and visibility.</p>
            <button className='w-fit px-6 py-4 text-white bg-blue-700 rounded-full hover:bg-blue-500 hover:scale-110 hover:duration-300'>Contact Sales</button>
        </div>
        <div className='flex justify-center items-center md:p-6'>
            <img className='w-[300px] md:w-[700px]' src={HeroImage} alt="" />
        </div>
    </div>
  )
}

export default Hero