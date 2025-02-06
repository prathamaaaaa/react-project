import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView();
  const [scrollDirection, setScrollDirection] = useState(null);
  const refe = useRef(null);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      // lastScrollY = currentScrollY;    
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 3, delay: i * 0.1 },
    }),
    reverse: { opacity: 0, y: 20, transition: { duration: 5 } },
  };

  const boxVariants = {
    hiddenLeft: {
      opacity: 0,
      x: -500,
      y: 100,
      rotate: -20,
    },
    hiddenRight: {
      opacity: 0,
      x: 500,
      y: 100,
      rotate: 20,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 2, delay: i * 0.3 },
    }),
    reverseLeft: {
      opacity: 0,
      x: -500,
      y: 100,
      rotate: -20,
      transition: { duration: 5 },
    },
    reverseRight: {
      opacity: 0,
      x: 500,
      y: 100,
      rotate: 20,
      transition: { duration: 5 },
    },
  };

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const words = text.split(" ");

  return (
    <section
      id="About"
      ref={ref}
      className="h-full w-full flex items-center flex-col bg-[#d6eadf] justify-center"
    >
      <div className="text-center w-3/4 p-6 border border-[#11150d] rounded-lg bg-white">
        <div className="flex flex-wrap justify-center">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              animate={
                scrollDirection === "down"
                  ? inView
                    ? "visible"
                    : "reverse"
                  : "reverse"
              }
              custom={index}
              className="text-2xl sm:text-4xl font-bold text-[#11150d] mx-1 my-1"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Box 1 - Curved from Left */}
          <motion.div
            variants={boxVariants}
            initial="hiddenLeft"
            animate={
              scrollDirection === "down"
                ? inView
                  ? "visible"
                  : "reverseLeft"
                : "reverseLeft"
            }
            custom={0}
            className="h-[300px] w-[300px] bg-blue-300 rounded-xl"
          >
            One
          </motion.div>

          {/* Box 2 - Curved from Right */}
          <motion.div
            variants={boxVariants}
            initial="hiddenRight"
            animate={
              scrollDirection === "down"
                ? inView
                  ? "visible"
                  : "reverseRight"
                : "reverseRight"
            }
            custom={1}
            className="h-[300px] w-[300px] bg-blue-300 rounded-xl"
          >
            Two
          </motion.div>

          {/* Box 3 - Curved from Left */}
          <motion.div
            variants={boxVariants}
            initial="hiddenLeft"
            animate={
              scrollDirection === "down"
                ? inView
                  ? "visible"
                  : "reverseLeft"
                : "reverseLeft"
            }
            custom={2}
            className="h-[300px] w-[300px] bg-blue-300 rounded-xl"
          >
            Three
          </motion.div>

          {/* Box 4 - Curved from Right */}
          <motion.div
            variants={boxVariants}
            initial="hiddenRight"
            animate={
              scrollDirection === "down"
                ? inView
                  ? "visible"
                  : "reverseRight"
                : "reverseRight"
            }
            custom={3}
            className="h-[300px] w-[300px] bg-blue-300 rounded-xl"
          >
            Four
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
