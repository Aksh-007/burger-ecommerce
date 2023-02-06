import React from 'react';   
import {motion} from 'framer-motion';
import my from '../../assets/my.jpg';


const Founder = () => {
    const name = "Akshay Barapatre";
    const company = "3 Brackets"

    const options ={
        initial:{
            x:'-100%',
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1
        },
    };

  return (
   <section className="founder">
    <motion.div
    {...options}
    transition={{delay:0.6}}
    >
        <img src={my} alt="Myimage"/>
        <h1>{name}</h1>
         <p>
          is the founder and CEO of {company}, a gourmet burger company dedicated to elevating the classic burger with unique ingredients and high-quality toppings. With a background in the food industry and a passion for creating the ultimate burger experience, {name} is committed to bringing their vision to life. By using the freshest ingredients and creating a welcoming atmosphere, {name} is changing the way people think about burgers and delivering a delicious, satisfying experience to their customers.
         </p>
    </motion.div>
   </section>
  )
}

export default Founder
