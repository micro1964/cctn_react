import React from "react";
import '../styles.css';

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src="./techin9ja_200x200.png" alt="Tech In 9ja" />
      <h2 className="app-subtitle">Click, learn, succeed!</h2>
    </header>
  );
}