import React from "react";
// import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.h1
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            {...options}
          >
            Burger Joint
          </motion.h1>
          <motion.p {...options}>
            Treat yourself with tasty and Authentic Burger{" "}
          </motion.p>
          <motion.p {...options} transition={{ delay: 0.2 }}>
            only in BURGER JOINT!!!
          </motion.p>
        </div>
        <a href="#menu">ORDER NOW !!! </a>
        {/* <motion.div
       initial={{x:'-100%'}}
       whileInView={{x:10}}
      >
        <FaSearch />
      </motion.div> */}
      </section>
      <Founder />
      <Menu/>
    </>
  );
};

export default Home;
