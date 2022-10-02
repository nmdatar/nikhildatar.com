import React from 'react';
import '../../App.css';
import './Hero.css';

function Hero() {
  return (
    <div className = 'hero-container'>
        <video src={require('../../videos/background_video.mp4')} autoPlay loop muted />
    </div>
  )
}

export default Hero