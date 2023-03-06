import Image from 'next/image'
import nlma from '../public/images/nlma-web.png'
import tck from '../public/images/tck.png'
import iguana from '../public/images/iguana.png'
import hccs from '../public/images/hccs.png'
import sfc from '../public/images/sfc.png'
import suite from '../public/images/msz.png'


const Testimonials = () => {
    return (
      <div>
      
      {/* Testimonials Section */}
      <div className="w-full px-5 py-12 border-t border-b border-gray-200 black bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 md:py-20">
          <div className="w-full max-w-6xl mx-auto font-[Abel]">
            
              <div className="items-start -mx-3 md:flex">
                  <div className="px-3 md:w-1/3">
                  
                    {/* Card */}
                      <div className="w-full p-5 mx-auto mb-6 font-light text-black bg-white border border-gray-200 rounded-lg">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={nlma} className="h-10" alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-sm font-bold tracking-wider uppercase black ">Next Level Martial Arts</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="leading-tight text-md lg:text-lg"><span className="mr-1 text-lg italic font-bold leading-none black"></span> The kids love you, they are always asking for more DJ Sensei!  <span className="ml-1 text-lg italic font-bold leading-none black"></span></p>
                          </div>
                      </div>
                    {/* Card */}
                      <div className="w-full p-5 mx-auto mb-6 font-light text-black bg-white border border-gray-200 rounded-lg">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={tck} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-sm font-bold tracking-wider uppercase black ">TCK Mixed Martial Arts</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="leading-8 text-md lg:text-lg">DJ Finn is the best. I forget that we are here working out because it feels like a party; I get so hyped up. Whoever had an idea for a DJ at the gym is a genius </p>
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
                                  <h6 className="text-sm font-bold tracking-wider uppercase black ">Iguana Lounge NYC</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="leading-8 text-md lg:text-lg "> I was supposed to leave hours ago but every song had me dancing my way towards the exit and turning around. Please tell me you have business card and you will be free this summer because I need you for all of my parties 😩</p>
                          </div>
                      </div>
                      {/* Card */}
                      <div className="w-full p-5 mx-auto mb-6 font-light bg-white border border-gray-200 rounded-lg black">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={hccs} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="font-bold tracking-wider text-black uppercase text-md ">HCCS Charter School</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="leading-8 text-black text-md lg:text-lg "> You and your brother play the perfect music, I can tell you have been doing this for awhile. It seems like you hear things that other people dont and that is really cool !</p>
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
                                  <h6 className="text-sm font-bold tracking-wider text-black uppercase ">Suite 215</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="leading-tight text-md lg:text-lg ">Pleasure to have you, you are welcomed to come back anytime</p>
                          </div>
                      </div>
                    {/* Card */}
                      <div className="w-full p-5 mx-auto mb-6 font-light text-black bg-white border border-gray-200 rounded-lg">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={sfc} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-sm font-bold tracking-wider text-black uppercase ">St Francis College</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="leading-tight text-md lg:text-lg ">You kill it everytime and you know we appreciate you.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
      </div>
    );
  }

export default Testimonials;
