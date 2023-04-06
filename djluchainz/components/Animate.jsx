import React from 'react';
import PricingPlan from './PricingPlan';

const Animate = () => {
  return (
    <>
     <div className="px-4 pt-5 mx-auto bg-white max-w-7xl sm:px-6 lg:px-6">
      <h2 className='text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight'>
        Pricing plans for clients and collaborators
      </h2>
      <p className='max-w-3xl pt-8 text-lg text-slate-500'>
         Prices shown are starting rates and are subject to change depending upon travel, location, event capacity, or number of patrons.
      </p>
     </div> 
     <PricingPlan />
    </>
  );
}

export default Animate;
