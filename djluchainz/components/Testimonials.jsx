import Image from 'next/image'
import nlma from '../public/images/nlma-web.png'
import tck from '../public/images/tck.png'
import iguana from '../public/images/iguana.png'
import hccs from '../public/images/hccs.png'
import sfc from '../public/images/sfc.png'
import suite from '../public/images/msz.png'


const Testimonials = () => {
    return (
      
      <>
      {/* Testimonials Section */}
      <div className="w-full px-5 py-12 border-t border-b border-gray-200 md:py-20">
          <div className="w-full max-w-6xl mx-auto ">
            
              <div className="items-start -mx-3 capitalize md:flex">
                  <div className="px-3 md:w-1/3">
                  
                    {/* Card */}
                      <div className="w-full p-5 mx-auto mb-6 font-light text-black bg-white border border-gray-200 rounded-lg">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={nlma} className="h-10" alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-lg font-bold tracking-wider uppercase black ">Next Level Martial Arts</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-[16px] leading-7"> &quot; The kids go wild when they know a party is coming up and the dj is going to be here &quot; </p>
                          </div>
                      </div>
                    {/* Card */}
                      <div className="w-full p-5 mx-auto mb-6 font-light text-black bg-white border border-gray-200 rounded-lg">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={tck} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-lg font-bold tracking-wider uppercase black ">TCK Mixed Martial Arts</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-[16px]  leading-7">&quot; Working out and live music go so well together - I get so hyped up. This idea was genius &quot; </p>
                          </div>
                      </div>
                  </div>
                    {/* Card */}
                  <div className="px-3 md:w-1/3">
                      <div className="w-full p-5 mx-auto mb-6 font-light text-black bg-white border border-gray-200 rounded-lg">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={iguana} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-lg font-bold tracking-wider uppercase black ">Iguana Lounge NYC</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-[16px]  leading-7">&quot; I was supposed to leave hours ago but every song has me in a chokehold. Please tell me you&apos;ll be free this summer because I need you for all of my events &quot;</p>
                          </div>
                      </div>
                      {/* Card */}
                      <div className="w-full p-5 mx-auto mb-6 font-light bg-white border border-gray-200 rounded-lg black">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={hccs} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h1 className="text-lg font-bold tracking-wider text-black uppercase ">HCCS Charter School</h1>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-[16px]  leading-7 text-black xl ">  &quot; Clearly you&apos;ve been doing this for awhile, right? Because you have a really good ear for music &quot; </p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="px-3 md:w-1/3">
                    {/* Card */}
                      <div className="w-full p-5 mx-auto mb-6 font-light text-black bg-white border border-gray-200 rounded-lg">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={suite} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-lg font-bold tracking-wider text-black uppercase ">Suite 215</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-[16px]  leading-7">&quot; Okay I see you mr, DJ! Over here showing out. I Know who i&apos;m booking for my next party &quot; </p>
                          </div>
                      </div>
                    {/* Card */}
                      <div className="w-full p-5 mx-auto mb-6 font-light text-black bg-white border border-gray-200 rounded-lg">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={sfc} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-lg font-bold tracking-wider text-black uppercase ">St Francis College</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-[16px]  leading-7">&quot; We appreciate you. We definitely called the right man for the job,  the school can&apos;t get enough of you &quot; </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
    </>
    );
  }

export default Testimonials;
