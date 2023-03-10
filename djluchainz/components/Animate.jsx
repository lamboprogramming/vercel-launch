import React from 'react';
import PricingPlan from './PricingPlan';

const Animate = () => {
  return (
    <>
     <div className="px-4 pt-24 mx-auto bg-white max-w-7xl sm:px-6 lg:px-6">
      <h2 className='text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight'>
        Pricing plans for clients and collaborators
      </h2>
      <p className='max-w-3xl mt-4 text-lg text-slate-500'>
        Choose a plan that best suits your occasion. Prices shown are starting rates and are subject to change depending on client and collaborator inquiries.
      </p>
     </div> 
     <PricingPlan />
    </>
  );
}

export default Animate;
