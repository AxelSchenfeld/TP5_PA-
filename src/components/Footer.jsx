import React from 'react';
import logo from '../assets/imgs/logo-footer.svg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="links">
          <a href="#">LinkedIn</a>
          <a href="#">Crunchbase</a>
          <a href="#">Hackernews</a>
        </div>
        <div className="copyright">
          <img src={logo} alt="Logo de Batabit" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;