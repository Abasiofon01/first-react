import React from "react";
import "./index.css";
import Bottom from "./Bottom";

export default function Header() {
  return (
    <div className="header">
      <div class="wrapper">
        <nav>
          <a href="index.html" class="logo">
            Atomic
          </a>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="center">
        <div className="title">
          <h1> Design a better website template.</h1>
          <p>
            Far far away, behind the word moutains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="play">
          <i class="fa-solid fa-circle-play fa-3x"></i>
        </div>
      </div>
      <div className="btn">
        <button>
          <a href="#download">FREE DOWNLOAD</a>
        </button>
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
}
