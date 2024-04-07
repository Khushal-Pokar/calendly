import React from 'react';
import Control from '../assets/control.png'

const BenefitSection1 = () => {
  return (
    <div className='flex flex-col-reverse items-center text-center md:text-start md:flex-row w-full px-24 py-16'>
        <div className='md:w-1/2 space-y-7'>
            <h2 className='text-2xl md:text-4xl text-[#092640] font-bold'>Retain control as your team scales</h2>
            <p className='text-lg md:text-2xl text-[#46505b]'>Working within one organizational account ensures you securely account for all active users as you scale. With Calendly, IT teams can maintain more oversight over account access and individual permissions, as well as audit activity at any time.</p>
        </div>
        <div className='pb-8 md:pb-0'>
            <img className='w-[300px] md:w-[700px]' src={Control} alt="/" />
        </div>
    </div>
  )
}

export default BenefitSection1