import React from 'react';

function Footer() {
  return (
    <div className="bg-black p-6 sm:p-10">
      <section className=" overflow-x-hidden  text-white">
        <div className="grid bg-gray-950 sm:border-gray-400 sm:border-2 rounded-2xl w-full  pt-10 overflow-x-hidden sm:pt-[100px]  sm:pl-16 grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-x-[200px]">
          <div className="w-[90%] ">
            <h1 className="text-4xl sm:text-7xl lg:text-9xl">Innovate with us</h1>
            <p className="mt-4 text-2xl">
              Our creative solutions have helped lorm10
               clients raise $100+ mln and expand their reach.
            </p>
            <div className="mt-[100px]  flex gap-4">
              <button className="bg-white text-black px-6  sm:px-12 py-4 rounded-2xl text-2xl hover:bg-gray-300">
                Write us
              </button>
              <button className="bg-white text-black px-6 sm:px-12 py-8 rounded-2xl text-2xl hover:bg-gray-300">
                Book a call
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="flex justify-center  sm:justify-end items-end">
            <div className="relative hidden border-gray-500 border-t-4 border-l-4 rounded-tl-4xl lg:block bg-blue-700 h-[300px] sm:h-[700px] w-full max-w-[600px]">
              <div className="absolute h-[200px] border-t-2 border-l-2 border-gray-500 rounded-3xl sm:h-[300px] bg-amber-100 top-[30%] right-[10%] sm:right-[40%] w-[80%] sm:w-[500px]">
                
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-x-hidden bg-black'>
        <div className='sm:py-16 '>
          <div className='  sm:flex text-gray-400  sm:justify-between '>
            <div className='grid p-4   grid-cols-2 gap-y-10 sm:gap-x-[50px] sm:grid-cols-3'>
              <div className='sm:text-xl  text-lg space-y-2 sm:space-y-4'>
                <h1 className='font-bold text-white pb-2'>Cases</h1>
                <p>Fitonist</p>
                <p>Brainforest</p>
                <p>Cybervergent</p>
                <p>Nopan</p>
                <p>Ramos</p>

              </div>

              <div className='text-lg sm:text-xl space-y-2 sm:space-y-4'>
                <h1 className='font-bold text-white pb-2'>Services</h1>
                <p>Complex solution</p>
                <p>Branding</p>
                <p>Design</p>
                <p>Development</p>
              </div>
              <div className='text-lg sm:text-xl space-y-2 sm:space-y-4'>
                <h1 className='font-bold text-white pb-2'>About us </h1>
                <p>Numbers</p>
                <p>Missions</p>
                <p>Values</p>
                <p>Clients</p>
              </div>
            </div>
            <div className='p-4'>
              <div className=' text-3xl sm:text-6xl  xl  '>hello@outcrowd.io</div>
              <div className='flex p-4 sm:justify-end  sm:space-x-4'>
                <div>
                  <button className='bg-gray-800 p-4   rounded-xl ' onClick={()=>{}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </button>
                </div>
                <div>
                  <button className='bg-gray-800 p-4   rounded-xl ' onClick={()=>{}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </button>
                </div>
                <div>
                  <button className='bg-gray-800 p-4   rounded-xl ' onClick={()=>{}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </button>
                </div>
                <div>
                  <button className='bg-gray-800 p-4   rounded-xl ' onClick={()=>{}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </button>
                </div>
                <div>
                  <button className='bg-gray-800 p-4   rounded-xl ' onClick={()=>{}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </button>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>

      </section>


      <div className="mt-10 flex text-2xl justify-between  text-gray-300 border-t border-gray-500">
        <div className='mt-6'>
          Copyright © 2024 Outcrowd Inc. All rights reserved.
        </div>
        <div className='mt-6'>
          LEWES - INDIA
        </div>
      </div>
    </div>
  );
}

export default Footer;
