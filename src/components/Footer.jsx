import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container flex-center">
      <a href="#logo">
        <img
          id="footerLogo"
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="Logo"
        />
      </a>
      <p className="footer-text">
        Share your favorite recipes here!!!
        <br />
        Bon Appétit
      </p>
      <div className="footer-connect">
        <p>Follow us: </p>
        <div className="footer-icon flex jc-between ai-center">
          <a href="https://github.com/ritsathya/react-food-recipe">
            <i className="fa-brands fa-github" />
          </a>
          {/* <i className="fa-brands fa-facebook" /> */}
          {/* <i className="fa-brands fa-youtube" /> */}
          {/* <i className="fa-brands fa-instagram" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
