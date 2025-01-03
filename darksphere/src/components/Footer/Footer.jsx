import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p>
            DarkSphere is your gateway to free and accessible coding knowledge.
            Whether you're a beginner or an experienced developer, our platform
            offers resources to help you grow and succeed in the tech world.
            Start learning today and take your skills to the next level!
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.linkedin.com/in/hind-ziki-0b0488275"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/thereall_hind/profilecard/?igsh=aGQ5Nnp5ankzOXJq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="footer-content-center" id="footer">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0632211690</li>
            <li>hindziki@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Darksphere.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

