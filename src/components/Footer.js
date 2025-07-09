import React from "react";
import '../styles.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();   
  return (
    <footer className="footer">
      <p className="footer-text">Cyber Cityz Television Network</p>
      <p className="footer-text">© {currentYear} All rights reserved.</p>
      <p className="footer-text">Contact us: <a href="mailto:info@cybercityz.com">Send Mail</a></p>
    </footer>
    );
}