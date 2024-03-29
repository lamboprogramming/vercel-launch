import React from 'react';
import Link from 'next/link'

import { pricingplans  } from 'data';

function PricingPlans() {
  return (

   
    <div>
    <div className="grid gap-12 px-4 py-8 mx-auto bg-white md:py-20 lg:grid-cols-3 lg:gap-8 max-w-7xl sm:px-6 lg:px-8">
      {pricingplans.map((plan) => (
        <div 
          key={plan.title}
          className="flex flex-col p-8 bg-white border shadow-lg border-slate-200 rounded-2xl">
            <h3 className="mb-3 text-xl font-semibold leading-5 text-slate-900">{plan.title}</h3>
        
           
          
            <div className='p-6 mt-4 -mx-6 rounded-lg bg-slate-100'>
              <p className='flex items-center justify-center text-sm font-semibold text-slate-500'>
                <span>{plan.currency}</span>
                <span className='ml-3 text-5xl text-slate-900'> ${plan.price}</span>
                <span className='ml-1.5 text-sm tracking-wider'> {plan.frequency}</span>
              </p>
            </div>
            
            
        {/* Features */}
        <ul className='flex-1 mt-4 space-y-3 text-lg '>
          {plan.features.map((feature) => (
            <li key={feature} className='flex text-slate-900 '>
            <svg 
              className='w-5 h-5 text-cyan-500 shrink-0'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              >
              <path 
              fill="currentColor" 
              d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/></svg>
            
            <span className="ml-3  tracking-wider font-sans uppercase font-[600] text-[12px] "> {feature}</span>
           </li>
          ))}
        </ul>
        
        {/* Call to action */}
        <Link  href="/contact" className='flex justify-center ' >
            <button className="block px-16 py-4 mt-8 text-sm font-semibold leading-4 text-center text-white rounded-lg shadow-md bg-cyan-500 hover:bg-cyan-600">{plan.cta}</button>
        </Link>
          
        </div>
      ))}
      
    </div>
    </div>
   
    
    
  );
};

export default PricingPlans;
