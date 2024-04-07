import React from 'react';
import Technologies from '../assets/technologies.png';

const BenefitSection3 = () => {
  return (
    <div className='flex flex-col-reverse items-center text-center md:text-start md:flex-row w-full px-24 py-16'>
        <div className='md:w-1/2 space-y-7'>
            <h2 className='text-2xl md:text-4xl text-[#092640] font-bold'>Get more value from your existing technology</h2>
            <p className='text-lg md:text-2xl text-[#46505b]'>Calendly securely integrates with the tools your teams rely on every day. This includes seamless OAuth through Google Calendar and Office365 as well as ontegrations across leading video conferencing tools (Zoom, Google Meet, Microsoft Teams, Webex), and more.</p>
        </div>
        <div className='pb-8 md:pb-0'>
            <img className='w-[300px] md:w-[700px]' src={Technologies} alt="/" />
        </div>
    </div>
  )
}

export default BenefitSection3