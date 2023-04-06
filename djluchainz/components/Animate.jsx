import React from 'react';
import PricingPlan from './PricingPlan';

const Animate = () => {
  return (
    <>
     <div className="px-4 pt-5 mx-auto bg-slate-50 max-w-7xl sm:px-6 lg:px-6">
      <h2 className='pb-2 text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight'>
        Pricing plans for clients and collaborators
      </h2>
      <p className='max-w-3xl pt-4 pb-4 text-lg text-slate-500'>
         Rates below and are subject to change upon travel, location, event capacity, or number of patrons.
      </p>
     </div> 
     <PricingPlan />
    </>
  );
}

export default Animate;
