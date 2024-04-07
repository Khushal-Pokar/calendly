import React from 'react';
import { FaLyft, FaAccusoft, FaCcStripe } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className='flex flex-col items-center w-full'>
        <div className='space-y-6 py-20 w-1/2'>
            <p className='text-[#092640] text-3xl md:text-5xl text-center font-bold'>Work faster, smarter, and more securely</p>
            <p className='text-[#455a72] text-lg md:text-2xl text-center'>Sales, Customer Success, Support, Recruiting, and Marketing teams rely on scheduling platforms to save time and quickly connect with customers.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center w-full bg-[#f7faff] p-12'>
            <div className='md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 px-8 py-4 space-y-4'>
                <h1 className='text-[#092640] text-center md:text-start text-3xl md:text-5xl font-extrabold'>75%</h1>
                <p className='text-[#455a72] text-center md:text-start text-lg md:text-2xl'>reduction in time to schedule customer success calls</p>
                <div className='flex justify-center md:justify-start pt-8 md:pt-16'>
                    <FaAccusoft size={40} color='#b1b1b1' />
                </div>
            </div>
            <div className='md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 px-8 py-4 space-y-4'>
                <h1 className='text-[#092640] text-center md:text-start text-3xl md:text-5xl font-extrabold'>200%</h1>
                <p className='text-[#455a72] text-center md:text-start text-lg md:text-2xl'>increase in connections between sales and customer leads</p>
                <div className='flex justify-center md:justify-start pt-8 md:pt-16'>
                    <FaCcStripe size={40} color='#b1b1b1' />
                </div>
            </div>
            <div className='md:w-1/4 px-8 py-4 space-y-4'>
                <h1 className='text-[#092640] text-center md:text-start text-3xl md:text-5xl font-extrabold'>200%</h1>
                <p className='text-[#455a72] text-center md:text-start text-lg md:text-2xl'>more customers onboarded per month</p>
                <div className='flex justify-center md:justify-start pt-8 md:pt-24'>
                    <FaLyft size={40} color='#b1b1b1' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits