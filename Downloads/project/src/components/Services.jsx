import React from 'react'
import animationData from "../lotties/Animation - 1738920078343.json";
import animationData1 from "../lotties/Animation - 1738922010588.json";

import Lottie from 'react-lottie';

function Services() {
    const defaultOptions = {
    
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const defaultOptions1 = {
    
  animationData: animationData1,
  rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
  }
};
  return (
    <>
      <div className='overflow-x-hidden'>
        <div className='bg-blue-400 border-2'>
          <div className='container'>
            <div className='flex space-y-10  w-full justify-center text-center '>
                <div className='md:w-[35%] space-y-6 sm:w-[60%] w-full bg-amber-100'>
                  <h1 className='md:text-9xl mt-10 sm:text-7xl text-5xl font-semibold text-white'>Services</h1>
                  <p className='md:text-2xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus esse iste voluptate corrupti recusandae quos architecto officiis vero nulla!</p>
                  <button className='p-4 bg-gray-700 rounded-4xl text-white'>Complex Solution</button>
                  <div className='border-l-2 h-[100px] justify-self-center bg-amber-500'><h1></h1></div>
                  <p className='md:text-3xl text-2xl font-semibold'>Instead of a request which sounds like “I need a website”, we embrace - “I want to market my product to get first organic users”, where we can suggest what to do, and execute the approved plan from A to Z.</p>
                </div>
            </div>



            {/* grid  */}

            <div className='flex justify-center overflow-x-hidden '>
              <div className=' mt-16'>


                {/* one  */}
                <div className='md:flex justify-center  text-center w-full'>
                  <div className='bg-black text-white w-full rounded-3xl m-4 md:w-[30%] md:h-[50%]'>
                    
                    <div className='space-y-6 m-6'>
                      <h1 className='text-5xl'>Brand Strategy </h1>
                      <p className='text-xl'>
                        We establish comprehensive product-market fit hypotheses, validate them, and visualise in the most creative ways.
                      </p>
                      <div className='h-[150%] p-6 '>
                         <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    /> 
                      </div>
                    </div>
                  </div>

                  <div className='bg-red-200 mt-4 rounded-3xl mb-10 w-full md:w-[30%] h-fit'>
                    <div className='space-y-6 m-6'>
                      <h1 className='text-white text-6xl font-bold mt-10'>Brand Visual  </h1>
                      <p className='text-xl'>We create brand materials that speak of your values non-verbally and complement your offering to the market.
                      </p>
                      <div className='  p-6 '>
                         <Lottie
                        options={defaultOptions1}
                        height={150}
                        width={200}
                    /> 
                      </div>                   
                     </div>
                  </div>
                </div>

                {/* two  */}
                <div className='md:flex justify-center m-2  text-center w-full'>
                  <div className='bg-black text-white w-full rounded-3xl m-4 md:w-[30%] md:h-[50%]'>
                    
                    <div className='space-y-6 m-6'>
                      <h1 className='text-5xl'>Brand Strategy </h1>
                      <p className='text-xl'>
                        We establish comprehensive product-market fit hypotheses, validate them, and visualise in the most creative ways.
                      </p>
                      <div className='h-[150%] p-6 '>
                         <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    /> 
                      </div>
                    </div>
                  </div>

                  <div className='bg-red-200 mt-4 rounded-3xl mb-10 w-full md:w-[30%] h-fit'>
                    <div className='space-y-6 m-6'>
                      <h1 className='text-white text-6xl font-bold mt-10'>Brand Visual  </h1>
                      <p className='text-xl'>We create brand materials that speak of your values non-verbally and complement your offering to the market.
                      </p>
                      <div className='  p-6 '>
                         <Lottie
                        options={defaultOptions1}
                        height={150}
                        width={200}
                    /> 
                      </div>                   
                     </div>
                  </div>
                </div>

                {/* three  */}
                <div className='md:flex justify-center m-2 text-center w-full'>
                  <div className='bg-red-300 m-4 md:w-[30%] md:h-[50%]'>
                    
                    <div>
                      <h1>Brand Strategy </h1>
                      <p>
                        We establish comprehensive product-market fit hypotheses, validate them, and visualise in the most creative ways.
                      </p>
                      <div className='h-[150%] p-6 bg-black'>
                         <Lottie
                        options={defaultOptions}
                        height={200}
                        width={200}
                    /> 
                      </div>
                    </div>
                  </div>

                  <div className='bg-red-500  w-[30%] h-fit'>
                    <div>
                      <h1>Brand Visual  </h1>
                      <p>We create brand materials that speak of your values non-verbally and complement your offering to the market.
                      </p>
                      <div></div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services