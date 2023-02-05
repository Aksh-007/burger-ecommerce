import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCartHandler = (itemNum) => {

  };

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="cheese burger"
          hander={addToCartHandler}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={300}
          title="chicken burger"
          hander={addToCartHandler}
        />
        <MenuCard
          itemNum={1}
          burgerSrc={burger3}
          price={500}
          title="mutton burger"
          hander={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
