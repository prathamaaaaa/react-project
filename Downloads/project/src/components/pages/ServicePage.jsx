import { section } from 'framer-motion/client'
import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../../lotties/Animation - 1737635556614.json";
import { motion } from 'framer-motion';

function ServicePage() {
  const defaultOptions = {
    
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const animationVariants = {
  hidden: { opacity: 0, x: -500 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } } 
};
const animationVariantsr = {
  hidden: { opacity: 0, x: 500 }, 
  visible: { opacity: 1, x: 0, transition: { duration: 1 } } 
};
  return (
    <>

      <div className='overflow-x-hidden overflow-y-hidden bg-[#CBD2A4]'>

        <section>
        <div className="flex m-[100px] justify-center items-center">
          <h1 className="text-6xl font-bold">
            {"Our Services".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block transition duration-300 hover:text-pink-500 hover:scale-200 cursor-[url('/cursor.png'),_pointer]"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>


        </section>
        
        <motion.section 
          initial='hidden'
          whileInView="visible"
          variants={animationVariantsr}
          sm:initial='hidden'
          sm:whileInView="visible"
          sm:variants={animationVariantsr}
          className='border-y-4 border-l-4 h-auto my-8 sm:ml-[100px] bg-[#E9EED9] border-black-300 sm:rounded-tl-full sm:rounded-bl-full '>
            <div className='grid grid-cols-1 sm:grid-cols-2 m-10 sm:m-0 sm:p-0 p-10 '>
              <div className=' pb-10 flex justify-center m-10 items-center h-full w-full'>
              {/* <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className='m-10' viewBox="0 0 24 24" fill="none" stroke="#203003" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>

              </div>
              <div className=' pb-10 flex justify-center items-center '>
                  <div className='space-y-6 sm:pr-[150px]'>
                    <h1 className='text-3xl text-center font-bold'>Strategy</h1>
                    <p className='text-xl  text-center'>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, placeat. sit amet consectetur adipisicing elit. Animi atque fuga id blanditiis.

                    </p>
                  </div>

              </div>
            </div>
        </ motion.section>

        <motion.section 
            initial='hidden'
            whileInView="visible"
            variants={animationVariants}
          sm:initial='hidden'
          sm:whileInView="visible"
          sm:variants={animationVariants}
            className='border-y-4 border-r-4 h-auto my-8 sm:mr-[100px]  bg-[#E9EED9] border-black-300 sm:rounded-tr-full sm:rounded-br-full '>
            <div className='grid grid-cols-1 sm:grid-cols-2 m-10 sm:m-0 sm:p-0 p-10 '>
              
              <div className=' pb-10 flex justify-center items-center '>
                  <div className='space-y-6 sm:pl-[150px]'>
                    <h1 className='text-3xl text-center font-bold'>Strategy</h1>
                    <p className='text-xl  text-center'>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, placeat. sit amet consectetur adipisicing elit. Animi atque fuga id blanditiis.

                    </p>
                  </div>

              </div>
              <div className=' pb-10 flex justify-center m-10 items-center h-full w-full'>
              {/* <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className='m-10' viewBox="0 0 24 24" fill="none" stroke="#203003" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>

              </div>
            </div>
        </motion.section>


        <motion.section 
          sm:initial='hidden'
          sm:whileInView="visible"
          sm:variants={animationVariantsr}
          className='border-y-4 border-l-4 h-auto my-8 sm:ml-[100px]  bg-[#E9EED9] border-black-300 sm:rounded-tl-full sm:rounded-bl-full '>
            <div className='grid grid-cols-1 sm:grid-cols-2 m-10 sm:m-0 sm:p-0 p-10 '>
              <div className=' pb-10 flex justify-center m-10 items-center h-full w-full'>
              {/* <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className='m-10' viewBox="0 0 24 24" fill="none" stroke="#203003" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>

              </div>
              <div className=' pb-10 flex justify-center items-center '>
                  <div className='space-y-6 sm:pr-[150px]'>
                    <h1 className='text-3xl text-center font-bold'>Strategy</h1>
                    <p className='text-xl  text-center'>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, placeat. sit amet consectetur adipisicing elit. Animi atque fuga id blanditiis.

                    </p>
                  </div>

              </div>
            </div>
        </ motion.section>


        <motion.section 
            
          sm:initial='hidden'
          sm:whileInView="visible"
          sm:variants={animationVariants}
            className='border-y-4 border-r-4 h-auto my-8 sm:mr-[100px]  bg-[#E9EED9] border-black-300 sm:rounded-tr-full sm:rounded-br-full '>
            <div className='grid grid-cols-1 sm:grid-cols-2 m-10 sm:m-0 sm:p-0 p-10 '>
              
              <div className=' pb-10 flex justify-center items-center '>
                  <div className='space-y-6 sm:pl-[150px]'>
                    <h1 className='text-3xl text-center font-bold'>Strategy</h1>
                    <p className='text-xl  text-center'>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, placeat. sit amet consectetur adipisicing elit. Animi atque fuga id blanditiis.

                    </p>
                  </div>

              </div>
              <div className=' pb-10 flex justify-center m-10 items-center h-full w-full'>
              {/* <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className='m-10' viewBox="0 0 24 24" fill="none" stroke="#203003" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>

              </div>
            </div>
        </motion.section>
        <motion.section 
          sm:initial='hidden'
          sm:whileInView="visible"
          sm:variants={animationVariantsr}
          className='border-y-4 border-l-4 h-auto my-8 sm:ml-[100px]  bg-[#E9EED9] border-black-300 sm:rounded-tl-full sm:rounded-bl-full '>
            <div className='grid grid-cols-1 sm:grid-cols-2 m-10 sm:m-0 sm:p-0 p-10 '>
              <div className=' pb-10 flex justify-center m-10 items-center h-full w-full'>
              {/* <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className='m-10' viewBox="0 0 24 24" fill="none" stroke="#203003" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>

              </div>
              <div className=' pb-10 flex justify-center items-center '>
                  <div className='space-y-6 sm:pr-[150px]'>
                    <h1 className='text-3xl text-center font-bold'>Strategy</h1>
                    <p className='text-xl  text-center'>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, placeat. sit amet consectetur adipisicing elit. Animi atque fuga id blanditiis.

                    </p>
                  </div>

              </div>
            </div>
        </ motion.section>

        <motion.section 
            
          sm:initial='hidden'
          sm:whileInView="visible"
          sm:variants={animationVariants}
            className='border-y-4 border-r-4 h-auto my-8 sm:mr-[100px]  bg-[#E9EED9] border-black-300 sm:rounded-tr-full sm:rounded-br-full '>
            <div className='grid grid-cols-1 sm:grid-cols-2 m-10 sm:m-0 sm:p-0 p-10 '>
              
              <div className=' pb-10 flex justify-center items-center '>
                  <div className='space-y-6 sm:pl-[150px]'>
                    <h1 className='text-3xl text-center font-bold'>Strategy</h1>
                    <p className='text-xl  text-center'>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, placeat. sit amet consectetur adipisicing elit. Animi atque fuga id blanditiis.

                    </p>
                  </div>

              </div>
              <div className=' pb-10 flex justify-center m-10 items-center h-full w-full'>
              {/* <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className='m-10' viewBox="0 0 24 24" fill="none" stroke="#203003" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>

              </div>
            </div>
        </motion.section>


      </div>
    </>
  )
}

export default ServicePage