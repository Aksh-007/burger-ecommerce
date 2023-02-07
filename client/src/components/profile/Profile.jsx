import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/my.jpg";
import { Link } from "react-router-dom";
import { TbLogout} from "react-icons/tb";
import { MdDashboard} from "react-icons/md";
import { BsCartDashFill } from "react-icons/bs";

const Profile = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="user" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Akshay
        </motion.h5>

        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link to="/admin/dashboard">Dashboard <MdDashboard size={22} style={{padding:'0px 0 0 10px'}}/></Link>
        </motion.div>
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders">Orders<BsCartDashFill size={22} style={{padding:'0px 0 0 10px'}}/></Link>
        </motion.div>

        <motion.button
        initial={{
            x:'-100vw',
            opacity:0,
        }}
        animate={{
            x:0,
            opacity:1,
        }}
        transition={{
            delay:0.3
        }}
        >
            LogOut <TbLogout size={22} style={{padding:'0px 0 0 10px'}}/>
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
