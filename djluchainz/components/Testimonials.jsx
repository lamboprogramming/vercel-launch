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
                      <div className="w-full p-5 mx-auto mb-6 font-light bg-white border border-gray-200 rounded-lg black">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={nlma} className="h-10" alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-sm font-bold tracking-wider uppercase black ">Next Level Martial Arts</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-sm leading-tight lg:text-lg"><span className="mr-1 text-lg italic font-bold leading-none black"></span> The kids can nt get enough, they are always asking for more DJ Sensei! <span className="ml-1 text-lg italic font-bold leading-none black"></span></p>
                          </div>
                      </div>
                      <div className="w-full p-5 mx-auto mb-6 font-light bg-white border border-gray-200 rounded-lg black">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={tck} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-sm font-bold tracking-wider uppercase black ">TCK Mixed Martial Arts</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-sm leading-tight lg:text-lg "><span className="mr-1 text-lg italic font-bold leading-none black "></span> DJ Finn is the best <span className="ml-1 text-lg italic font-bold leading-none black"></span></p>
                          </div>
                      </div>
                  </div>
                  <div className="px-3 md:w-1/3">
                      <div className="w-full p-5 mx-auto mb-6 font-light bg-white border border-gray-200 rounded-lg black">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={iguana} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-sm font-bold tracking-wider uppercase black ">Iguana Lounge NYC</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-sm leading-tight lg:text-lg "><span className="italic font-bold leading-none text-l g mrfvfv-1 black"></span> I was supposed to leave hours ago but I knew every song you kept playing and I could not 😩 <span className="ml-1 text-lg italic font-bold leading-none black"></span></p>
                          </div>
                      </div>
                      <div className="w-full p-5 mx-auto mb-6 font-light bg-white border border-gray-200 rounded-lg black">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={hccs} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-sm font-bold tracking-wider uppercase black ">HCCS Charter School</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-sm leading-tight lg:text-lg "><span className="mr-1 text-lg italic font-bold leading-none black"></span> You and your brother play the perfect music, I can tell you have been doing this for awhile <span className="ml-1 text-lg italic font-bold leading-none black"></span></p>
                          </div>
                      </div>
                  </div>
                  <div className="px-3 md:w-1/3">
                      <div className="w-full p-5 mx-auto mb-6 font-light bg-white border border-gray-200 rounded-lg black">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={suite} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-sm font-bold tracking-wider uppercase black ">Suite 215</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-sm leading-tight lg:text-lg "><span className="mr-1 text-lg italic font-bold leading-none black"></span>Pleasure to have you, you are welcomed to come back anytime<span className="ml-1 text-lg italic font-bold leading-none black"></span></p>
                          </div>
                      </div>
                      <div className="w-full p-5 mx-auto mb-6 font-light bg-white border border-gray-200 rounded-lg black">
                          <div className="flex items-center w-full mb-4">
                              <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                  <Image src={sfc} alt=""/>
                              </div>
                              <div className="flex-grow pl-3">
                                  <h6 className="text-sm font-bold tracking-wider uppercase black ">St Francis College</h6>
                              </div>
                          </div>
                          <div className="w-full">
                              <p className="text-sm leading-tight lg:text-lg "><span className="mr-1 text-lg italic font-bold leading-none black"></span>You really know how to get the crowd going - I see why they keep asking for you<span className="ml-1 text-lg italic font-bold leading-none black"></span></p>
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
