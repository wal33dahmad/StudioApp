import React from 'react'
import "./Business.css";
export default function Business() {
  return (
    <div className="business">
        <div className="left">
            <h1>How can we help your Business ?</h1>
            <p>
              We build readymade websites, mobile applications, and elaborate online
              business services.
            </p>
          </div>
          <div className="right">
            <div className="card">
                <div className="img-container">
                    <img src="./img/bs1.png" alt="" className="card-image" />
                </div>
              <h1>Business Idea Planning</h1>
              <p>We present you a proposal and discuss niffty-gritty like</p>
            </div>
            <div className="card">
                <div className="img-container">
                    <img src="./img/bs2.png" alt="" className="card-image" />
                </div>
              <h1>Financial Planning System</h1>
              <p>Protocols apart from aengage models, pricing billing</p>
            </div>
            <div className="card">
                <div className="img-container">
                    <img src="./img/bs3.png" alt="" className="card-image" />
                </div>
              <h1>Development Website and App</h1>
              <p>Communication protocols apart from engagement models</p>
            </div>
            <div className="card">
                <div className="img-container">
                    <img src="./img/bs4.png" alt="" className="card-image" />
                </div>
              <h1>Market Analysis Project</h1>
              <p>Protocols apart from aengage models, pricing billing</p>
            </div>
          </div>
    </div>
  )
}
