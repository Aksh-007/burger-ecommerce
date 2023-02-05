import React from "react";
import { Link } from "react-router-dom";
import {IoFastFoodOutline} from 'react-icons/io5';
import {FiShoppingCart,FiLogIn} from 'react-icons/fi';
import {FaUser} from 'react-icons/fa';
import { motion} from "framer-motion"


const Header = ({isAuthenticated = false}) => {
  return (
    <nav>
       {/* using motion to animated the icon and customising it */}
      <motion.div
      initial={{x:'-100%'}}
      whileInView={{x:10}}
      >
        <IoFastFoodOutline/>
        {/* <p>BURGERWALA</p> */}
      </motion.div>
      <div>
        {/* basicaly this is a anchor tag */}
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart"><FiShoppingCart/></Link>

        {/* here writing logic for route authentication */}
        <Link to={isAuthenticated ?'/me':'/login'}>
          {/* here isAuth is true then show user User Icon else Login icon */}
          {isAuthenticated ? <FaUser/> : <FiLogIn/>}
        </Link>

      </div>
    </nav>
  );
};

export default Header;
