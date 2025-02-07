import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import firstImage from "../../assets/fisrtimage.jpg"
import second from "../../assets/secondimage.jpg"
import third from "../../assets/thirdimage.jpg"

const Content = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  const div5Ref = useRef(null);

  const div6Ref = useRef(null);


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 765);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 765);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress: scrollDiv1 } = useScroll({
    target: div1Ref,
    offset: ["start end", "center center", "end start"],
  });

  const { scrollYProgress: scrollDiv2 } = useScroll({
    target: div2Ref,
    offset: ["start end", "center center", "end start"],
  });

  const { scrollYProgress: scrollDiv3 } = useScroll({
    target: div3Ref,
    offset: ["start end", "center center", "end start"],
  });

  const rotateDiv1 = useTransform(
    scrollDiv1,
    [0, 0.5, 1],
    isMobile ? [0, 0, 0] : [-15, 0, 15]
  );
  const rotateDiv2 = useTransform(
    scrollDiv2,
    [0, 0.5, 1],
    isMobile ? [0, 0, 0] : [-20, 0, 20]
  );
  const rotateDiv3 = useTransform(
    scrollDiv3,
    [0, 0.5, 1],
    isMobile ? [0, 0, 0] : [-25, 0, 0]
  );

  const opacityDiv1 = useTransform(
    scrollDiv1,
    [0, 0.5, 0.9],
    isMobile ? [1, 1, 1] : [0, 1, 0]
  );
  const opacityDiv2 = useTransform(
    scrollDiv2,
    [0.2, 0.5, 0.9],
    isMobile ? [1, 1, 1] : [0, 1, 0]
  );
  const opacityDiv3 = useTransform(
    scrollDiv3,
    [0.2, 0.5, 0.9],
    isMobile ? [1, 1, 1] : [0, 1, 1]
  );

  const { scrollYProgress: scrollDiv4 } = useScroll({ target: div4Ref, offset: ["start 80%", "center center", "end 20%"] });
  const { scrollYProgress: scrollDiv5 } = useScroll({ target: div5Ref, offset: ["start 80%", "center center", "end 20%"] });
  const { scrollYProgress: scrollDiv6 } = useScroll({ target: div6Ref, offset: ["start 80%", "center center", "end 20%"] });

  const opacityDiv4 = useTransform(scrollDiv4, [0, 0.5, 1], [0, 1, 0]);
  const opacityDiv5 = useTransform(scrollDiv5, [0, 0.5, 1], [0, 1, 0]);
  const opacityDiv6 = useTransform(scrollDiv6, [0, 0.5, 1], [0, 1, 0]);



  return (
    <motion.div
      ref={containerRef}
      className="w-screen h-auto flex flex-col items-center justify-center bg-black overflow-hidden no-scrollbar px-0"
    >
      <motion.div className="grid grid-cols-1 md:grid-cols-12 w-full px-0  relative">
      

<motion.div
ref={div4Ref}
style={{ opacity: opacityDiv4 }}
  className="md:col-span-6 h-auto flex flex-col justify-center items-start text-white space-y-6 pt-[160px] pl-[136px] pr-[91px] order-2 md:order-1"

>
  <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold">Robotics and Automation</h2>
  <p className="text-base md:text-md lg:text-xl text-[#737373] leading-relaxed">
    Empowering industries with cutting-edge robotics solutions for smarter, automated workflows.”Robotics : ForthTech delivers advanced robotics solutions tailored for global industries. From custom systems to intelligent automation, we enhance efficiency, precision, and scalability. Partner with us for seamless integration and innovation-driven growth.
  </p>
</motion.div>


        <div className="md:col-span-6 h-auto  bg-[#171717] shadow-2xl relative flex items-center justify-center md:justify-end py-6 md:py-0 px-4 md:px-0 order-1 md:order-2">
          <motion.div
            ref={div1Ref}
            className="w-full md:w-[94%] lg:w-[92%] h-[250px] md:h-[70%] lg:h-[75%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white text-lg lg:text-3xl md:text-xl font-semibold md:absolute md:-right-6 lg:-right-12 "
            style={{ rotate: rotateDiv1, opacity: opacityDiv1 }}
          >
            <img src={firstImage} className="w-full h-full object-cover rounded-2xl"></img>
            </motion.div>
        </div>

        {/* Second div */}
        <motion.div 
        ref={div5Ref}
        style={{ opacity: opacityDiv5}}
        
        //  ref={div1Ref}
        //  style={{
        //    opacity: opacityDiv1,
        //    y: useTransform(scrollDiv1, [0, 0.5, 1], [50, 0, -20]), // Move up while fading in
        //  }}
        className="md:col-span-6  h-auto flex flex-col justify-center items-start text-white space-y-6 pt-[160px] pl-[136px] pr-[91px] order-3 md:order-4">
          <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold">Product Design</h2>
          <p className="text-base md:text-md lg:text-xl text-[#737373] leading-relaxed">
          Transforming ideas into reality with innovative product design solutions.”ForthTech specializes in end-to-end product design, crafting innovative solutions that resonate globally. From concept to prototype, we ensure every detail is meticulously designed to deliver functionality, aesthetics, and user satisfaction. Partner with us to bring your vision to life and set new benchmarks in your industry.
       </p>

          {/* <p className="text-base md:text-sm lg:text-xl text-[#737373] font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p> */}
        </motion.div>
        <div className="md:col-span-6 h-auto bg-[#171717] shadow-2xl relative flex items-center justify-center md:justify-end py-6 md:py-0 px-4 md:px-0 order-2 md:order-4">
          <motion.div
            ref={div2Ref}
            className="w-full md:w-[94%] lg:w-[92%] h-[250px] md:h-[70%] lg:h-[75%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white text-lg lg:text-3xl md:text-xl font-semibold md:absolute md:-right-6 lg:-right-12 "
            style={{ rotate: rotateDiv2, opacity: opacityDiv2 }}
          >
            {/* The Cross-Chain Stablecoin */}
            <img src={second} className="w-full h-full object-cover rounded-2xl"></img>
          </motion.div>
        </div>

        {/* Third div */}
        <motion.div
        ref={div6Ref}
        style={{ opacity: opacityDiv6}}
         className="md:col-span-6 h-auto  flex flex-col justify-center items-start text-white space-y-6 pt-[160px] pl-[136px] pr-[91px]  order-5 md:order-6">
          <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold">Web/App Development and Software</h2>
          <p className="text-base md:text-md lg:text-xl text-[#737373] leading-relaxed">
          Building digital solutions that drive innovation and transform businesses.” - ForthTech offers expert web, app, and software development services tailored to global needs. From intuitive interfaces to robust backend systems, we create scalable, user-friendly solutions that enhance efficiency and user engagement. Let’s build technology that empowers your business and elevates your digital presence.
          </p>
          {/* <p className="text-base md:text-sm lg:text-xl text-[#737373] font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p> */}
        </motion.div>
        <div className="md:col-span-6 h-auto  bg-[#171717] shadow-2xl relative flex items-center justify-center md:justify-end py-6 md:py-0 px-4 md:px-0 order-4 md:order-6">
          <motion.div
            ref={div3Ref}
            className="w-full md:w-[94%] lg:w-[92%] h-[250px] md:h-[70%] lg:h-[75%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white lg:text-3xl md:text-xl font-semibold md:absolute md:-right-6 lg:-right-12 "
            style={{ rotate: rotateDiv3, opacity: opacityDiv3 }}
          >
            <img src={third} className="w-full h-full object-cover rounded-2xl"></img>
            </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Content;
