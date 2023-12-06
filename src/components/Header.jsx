import React from "react";
import "./Header.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="icons">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <ul className="header-t-ul">
          <li>Sponsor</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="header-bottom">
        <h2>ADOPTED</h2>
        <ul>
          <li>Home</li>
          <li>Adoption</li>
          <li>Success Stories</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
