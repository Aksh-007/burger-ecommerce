import React from "react";
import{AiFillInstagram,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Joint</h2>
        <p>"Savor the flavor in every bite."</p>
        <br />
        <em>We give attention to genuine feedback</em>
        <strong>All right reserved for BURGER JOINT</strong>
      </div>
      <aside>
        <h4>Follow Us :</h4>
        <div className="icons">
        <a href="https://www.instagram.com/akshaybarapatre_aksh"   target="_blank" rel="noreferrer">
            <AiFillInstagram/>
        </a>
        <a href="https://www.linkedin.com/in/akshay-barapatre-19a656100/"  target="_blank" rel="noreferrer">
            <AiFillLinkedin/>
        </a>
        <a href="https://github.com/Aksh-007" target="_blank" rel="noreferrer">
            <AiFillGithub/>
        </a>
        </div>
       
      </aside>
    </footer>
  );
};

export default Footer;
