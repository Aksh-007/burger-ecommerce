import React from "react";
import{AiFillInstagram,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Nagpur burgerwala</h2>
        <p>"Savor the flavor in every bite."</p>
        <br />
        <em>We give attention to genuine feedback</em>
        <strong>All right reserved for Nagpur Brgerwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/akshaybarapatre_aksh">
            <AiFillInstagram/>
        </a>
        <a href="https://www.linkedin.com/in/akshay-barapatre-19a656100/">
            <AiFillLinkedin/>
        </a>
        <a href="https://github.com/Aksh-007">
            <AiFillGithub/>
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
