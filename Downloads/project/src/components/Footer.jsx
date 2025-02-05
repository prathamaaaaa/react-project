import React from 'react';

function Footer() {
  return (
    <div className="bg-black p-6 sm:p-10">
      <section className=" overflow-x-hidden  text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-950 sm:border-gray-400 sm:border-2 rounded-2xl w-full  pt-10 overflow-x-hidden sm:pt-[100px]  sm:pl-16  gap-5 sm:gap-x-[200px]">
          <div className="w-[100%] sm:w-[90%] ">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl">Innovate with us</h1>
            <p className="mt-4 text-2xl">
              Our creative solutions have helped lorm10
              clients raise $100+ mln and expand their reach.
            </p>
            <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-4 self-center">
              
            <button className="bg-white text-black px-6 sm:py-10 sm:text-2xl md:text-3xl  py-6 rounded-2xl text-2xl hover:bg-gray-300">
                Write us
              </button>
              <button className="bg-white text-black px-6  py-6 rounded-2xl sm:py-10 sm:text-3xl text-2xl hover:bg-gray-300">
              Book a Call
              </button> 
            </div>
          </div>

          {/* Image section */}
          <div className="flex justify-center ml-14 sm:ml-0  sm:justify-end items-end">
            <div className="relative  border-gray-500 border-t-4 border-l-4 rounded-tl-4xl lg:block bg-blue-700 h-[300px] sm:h-[700px] w-full max-w-[600px]">
              <div className="absolute  h-[130px] border-t-2 border-l-2 border-gray-500 rounded-3xl sm:h-[300px] bg-amber-100 top-[30%] left-[-15%] sm:right-[40%] w-[70%] sm:w-[500px]">
                
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-x-hidden bg-black'>
        <div className='sm:py-16 '>
          <div className='  md:flex text-gray-400  md:justify-between '>
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
            <div className='p-4 space-y-4'>
              <div className=' text-3xl sm:text-6xl  xl  text-center '>hello@outcrowd.io</div>
              <div className='flex sm:p-4 sm:justify-end space-x-2 '>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"  color='white' stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>                  </button>
                </div>
                <div>
                  <button className='bg-gray-800 p-4   rounded-xl ' onClick={()=>{}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>                  </button>
                </div>
                <div>
                  <button className='bg-gray-800 p-4   rounded-xl ' onClick={()=>{}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>                  </button>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>

      </section>


      <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 text-2xl  text-gray-300 border-t border-gray-500">
        <div className='mt-6'>
          Copyright © 2024 Outcrowd Inc. All rights reserved.
        </div>
        <div className=' sm:text-end text-start mt-6'>
          LEWES - INDIA
        </div>
      </div>
    </div>
  );
}

export default Footer;
