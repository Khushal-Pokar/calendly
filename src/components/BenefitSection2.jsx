import React from 'react';
import ITWorkflow from '../assets/it_workflow.png';

const BenefitSection2 = () => {
  return (
    <div className='flex flex-col md:flex-row items-center text-center md:text-start bg-[#f8f8f8] px-24 py-16'>
        <div className='pb-8 md:pb-0'>
            <img className='w-[300px] md:w-[700px]' src={ITWorkflow} alt="/" />
        </div>
        <div className='md:w-1/2 space-y-7'>
            <h2 className='text-2xl md:text-4xl text-[#092640] font-bold'>Automate IT workflows to accomplish more</h2>
            <p className='text-lg md:text-2xl text-[#46505b]'>Calendly's advanced security integrations overlay seamlessly with your corporate authentication policies and provisioning workflows. IT admins save time and reduce risk with auto-provisioning and deprovisioning via SCIM and Single Sign-On (SSO).</p>
        </div>
    </div>
  )
}

export default BenefitSection2