import React from 'react';

function About() {
  
  return (
    <section className='bg-black w-full flex justify-start items-center h-auto py-16 sm:h-[1100px] overflow-hidden'>
      <div className='container px-6 sm:px-12 w-[70%] md:px-16 lg:px-20 xl:px-32 text-white space-y-10'>
        <p className='text-2xl font-sans leading-16 sm:text-4xl lg:text-5xl '>
          Welcome to the heart of innovation at Handee agency, where creativity meets results! Here, we don't just think outside the box; we redefine it. Our team is a symphony of creativity, weaving narratives that captivate, designs that inspire, and strategies that propel brands into the spotlight.
        </p>
        <div className='space-y-4'>
          <p className='text-xl sm:text-2xl'>Join us on a journey where numbers speak louder than words.</p>
          <p className='text-xl sm:text-2xl'>Let's elevate your brand to new heights together!</p>
        </div>
        <div className='flex justify-start'>
          <div className='grid grid-cols-2 gap-x-8 gap-y-6 py-10 text-center'>
            <div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl text-green-500 font-bold'>1000+</h1>
              <p className='text-lg sm:text-xl'>Campaigns Launched</p>
            </div>
            <div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl text-green-500 font-bold'>250M+</h1>
              <p className='text-lg sm:text-xl'>Campaign Reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;