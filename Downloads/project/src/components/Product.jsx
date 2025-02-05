import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView, entry } = useInView({ triggerOnce: false, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 3, delay: i * 0.1 }, // Adjust delay for smooth stagger
    }),
    reverse: { opacity: 0, y: 20 }, // Reverse animation
  };

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

  const words = text.split(" "); // Split text into individual words

  return (
    <section
      id="About"
      ref={ref}
      className="h-[700px] w-full flex items-center bg-[#d6eadf] justify-center"
    >
      <div className="text-center w-3/4 p-6 border border-[#11150d] rounded-lg bg-white">
        <div className="flex flex-wrap justify-center">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "reverse"} 
              custom={index}
              className="text-2xl sm:text-4xl font-bold text-[#11150d] mx-1 my-1"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
