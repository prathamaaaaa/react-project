import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function About() {

  const [inView, setInView] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    const section = document.getElementById('About');
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 2 } });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [inView, controls]);

  return (
    <section id='About' className='h-[700px] w-full flex items-center bg-[#d6eadf] justify-center'>
      <div className='relative w-full bg-blue-300 sm:w-[800px] h-[80%] '>
      <div className='h-full w-full bg-amber-200'>
      <img
            src='home1.jpg'
            alt=''
            className='h-full w-full'
          />
      </div>
      <div className='absolute top-0 bottom-0 pt-10 self-center h-[75%] w-full sm:left-[20%] md:left-[40%] lg:left-[60%] bg-[#d6eadf] sm:w-[700px]'
        >
          <motion.div
              animate={controls}
              initial={{ opacity: 0, y: 100 }}
              className='text-center '
            >
              
              <h1 className='text-4xl sm:text-6xl font-bold pb-8 text-[#11150d]'>
                About us
              </h1>
              <p className='max-w-lg mx-auto lg:mx-0 text-md sm:text-2xl pb-9 text-[#11150d]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
                recusandae!
              </p>
              <h3 className='sm:text-4xl text-2xl pb-4 text-[#11150d] font-bold'>kmnbn</h3>
              <p className='sm:text-2xl text-md pb-9 text-[#11150d] font'>
                Lorem ipsum dolor sit.
              </p>
              <button className='px-6 py-2 bg-[#11150d] text-[#fefee3] font font-semibold rounded-lg shadow-md hover:bg-[#526a40] transition duration-300'>
                Know More
              </button>
            </motion.div>
          </div>
        
      </div>

      {/* <div className='grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2  '>
        <div>
          <img
            src='home1.jpg'
            alt=''
            className='h-[630px] relative pt-14 ml-0 lg:ml-[200px] w-[800px]'
          />
        </div>

        <div className='pt-[150px] sm:ml-0 md:ml-[200px] lg:ml-[760px]  absolute'>
          <div className='lg:h-[400px] lg:w-[700px]  md:h-[400px] md:w-[500px] h-[450px] w-[400px] absolute flex justify-center items-center bg-[#d6eadf]'>
            <motion.div
              animate={controls}
              initial={{ opacity: 0, y: 100 }}
              className='text-center '
            >
              <h1 className='text-6xl font-bold pb-8 text-[#11150d]'>
                About us
              </h1>
              <p className='max-w-lg mx-auto lg:mx-0 text-2xl pb-9 text-[#11150d]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
                recusandae!
              </p>
              <h3 className='text-4xl pb-4 text-[#11150d] font-bold'>kmnbn</h3>
              <p className='text-2xl pb-9 text-[#11150d] font'>
                Lorem ipsum dolor sit.
              </p>
              <button className='px-6 py-2 bg-[#11150d] text-[#fefee3] font font-semibold rounded-lg shadow-md hover:bg-[#526a40] transition duration-300'>
                Know More
              </button>
            </motion.div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default About;
