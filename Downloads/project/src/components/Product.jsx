import React from 'react'
import AnimatedTextWord from './AnimatedTextWord'

function Product() {
  
  return (
    <>
        {/* Product Section */}
        <section id='Product' className='h-full space-y-10 bg-[#92ba92] flex justify-center items-center flex-col'>
                    <h1 className="text-4xl font-semibold text-center text-gray-800">Our Products</h1>

                    {/* <section className='h-full w-full'>
                      <AnimatedTextWord text={"this is animated text to see!"} />
                    </section> */}

                    <section className='flex justify-center items-center space-y-10'>
                      <div className=' space-y-10  w-full'>
                        <div className='w-[50%] bg-black'>
                        <p className='text-2xl text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione delectus voluptatibus blanditiis molestiae? Adipisci cum dignissimos ex ducimus nostrum maxime, tempora nemo error iure quibusdam fuga voluptatem perspiciatis vitae ut molestiae repellat explicabo voluptas tenetur facere debitis corrupti illum voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ipsum nihil at excepturi eos eligendi odio optio molestiae expedita!</p>

                        </div>
                        <div className='grid gap-10 gap-x-10 grid-cols-2'>
                          <div className='h-[500px] w-[400px] bg-blue-400'>one</div>
                          <div className='h-[500px] mt-10 w-[400px] bg-blue-100'>one</div>
                          <div className='h-[500px] w-[400px] bg-blue-400'>one</div>
                          <div className='h-[500px] mt-10 w-[400px] bg-blue-100'>one</div>

                        </div>
                      </div>
                      

                    </section>
                </section>

    </>
  )
}

export default Product