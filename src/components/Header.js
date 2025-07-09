import React from "react";
import '../styles.css';

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src="./cctn_logo.png" alt="Cyber Cityz Television Network" />
      <h2 className="app-subtitle">Educative & entertaining programming across all borders!</h2>
    </header>
  );
}