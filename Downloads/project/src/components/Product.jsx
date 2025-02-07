import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Product() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY; // Update after comparison
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { duration: 1, delay: i * 0.1 },
    }),
    reverse: { opacity: 0, transition: { duration: 0.5 } },
  };

  const boxVariants = {
    hiddenLeft: {
      opacity: 0,
      x: -100,
    },
    hiddenRight: {
      opacity: 0,
      x: 100,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: i * 0.2 },
    }),
    reverseLeft: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.5 },
    },
    reverseRight: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.5 },
    },
  };

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const words = text.split(" ");

  return (
    <section
      id="About"
      ref={ref}
      className="h-[1100px] overflow-x-hidden w-full flex items-center flex-col bg-[#d6eadf] justify-center"
    >
      {/* Fade-in Text */}
      <div className="text-center w-3/4 p-6 border border-[#11150d] rounded-lg bg-white">
        <div className="flex flex-wrap justify-center">
          {words.map((word, index) => (
            <motion.span
            
              key={index}
              variants={fadeVariants}
              initial="hidden"
              animate={
                scrollDirection === "down"
                  ? inView
                    ? "visible"
                    : "reverse"
                  : inView
                  ? "visible"
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

      {/* Fade-in and Fade-out Boxes */}
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <motion.div
            variants={boxVariants}
            initial="hiddenLeft"
            animate={
              scrollDirection === "down"
                ? inView
                  ? "visible"
                  : "reverseLeft"
                : inView
                ? "visible"
                : "reverseLeft"
            }
            custom={0}
            className="h-[300px] w-[300px] bg-blue-300 rounded-xl"
          >
            One
          </motion.div>

          <motion.div
            variants={boxVariants}
            initial="hiddenRight"
            animate={
              scrollDirection === "down"
                ? inView
                  ? "visible"
                  : "reverseRight"
                : inView
                ? "visible"
                : "reverseRight"
            }
            custom={1}
            className="h-[300px] w-[300px] bg-blue-300 rounded-xl"
          >
            Two
          </motion.div>

          <motion.div
            variants={boxVariants}
            initial="hiddenLeft"
            animate={
              scrollDirection === "down"
                ? inView
                  ? "visible"
                  : "reverseLeft"
                : inView
                ? "visible"
                : "reverseLeft"
            }
            custom={2}
            className="h-[300px] w-[300px] bg-blue-300 rounded-xl"
          >
            Three
          </motion.div>

          <motion.div
          
            variants={boxVariants}
            initial="hiddenRight"
            animate={
              scrollDirection === "down"
                ? inView
                  ? "visible"
                  : "reverseRight"
                : inView
                ? "visible"
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

export default Product;