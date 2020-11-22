import React from 'react';
import '../App.css';
import './home.css'

function HeroSection() {
    return (
        <div className = 'hero-container'>
          <video src = '/video/video1.mp4' autoPlay loop muted />
          <h1>POPI SYSTEM</h1>
          <p>CREATED BY ANDRE SPANGENBERG 2020</p>
        </div>
    );
}

export default HeroSection;