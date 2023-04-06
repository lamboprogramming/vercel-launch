import React from 'react';
import PricingPlan from './PricingPlan';

const Animate = () => {
  return (
    <>
     <div className="px-4 pt-2 mx-auto bg-slate-50 max-w-7xl sm:px-6 lg:px-6">
      <h2 className='pb-2 text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight'>
        Pricing plans for clients and collaborations
      </h2>
      <p className='max-w-3xl pt-4 pb-4 text-lg text-slate-500'>
         Rates are subject to change depending upon travel, location, event capacity, or number of patrons.
      </p>
     </div> 
     <PricingPlan />
    </>
  );
}

export default Animate;
