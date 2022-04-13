import React from 'react'
import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero-headline">
      <div className="container">
        <div className="left-box">
            <h1>A Digital Product Agency</h1>
            <p>
              Leading digital agency with solid design and development expertise. We
              build readymade websites, mobile applications, and elaborate online
              business services.
            </p>
            <button>Contact Now</button>
          </div>
          <div className="right-box"></div>
      </div>
    </div>
  )
}
