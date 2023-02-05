import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerSrc, price, title,handler }) => {
  return (
    <motion.div className="menuCard">
      <div>Item{itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>{price}</h5>

        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
