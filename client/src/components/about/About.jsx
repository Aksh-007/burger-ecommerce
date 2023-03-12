import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import my from "../../assets/my.jpg";

const About = () => {
  const founderName = "Akshay Barapatre"
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Burger Joint</h4>
          <p>"Savor the flavor in every bite." <br/>
          Explore the various type of Burgers<br/>
          Click below to Explore the Menu</p>
          <Link to="/">
            <BiSearchAlt size={35} />
          </Link>
        </article>

        <div>
          
          <article>
            <div>
              <img src={my} alt="Founder" />
              <h2>{founderName}</h2>
              <h3>Founder</h3>
            </div>
            <p>
              Our Burger website was founded by {founderName}, a food
              enthusiast with a passion for creating the perfect burger. With
              years of experience in the food industry and a love for
              experimenting with new flavors, {founderName} set out to bring
              the best burger experience to customers everywhere. At our burger
              website, we believe in using only the freshest ingredients and
              source our meat from local farms. Our buns are baked daily and our
              sauces are made from scratch to create a truly mouth-watering
              burger. With {founderName}'s commitment to excellence and
              unwavering passion for burgers, our website has become a go-to
              destination for burger lovers everywhere. So, come visit us and
              taste the difference for yourself!
            </p>
          </article>
        </div>
      </main>
      <hr />
    </section>
    
  );
};

export default About;
