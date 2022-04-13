import React from 'react'
import './DigProd.css';
export default function DigProd() {
  return (
    <div className="container digital-prod">
        <div className="left">
            <video poster="img/digprod.jpg" controls>
                <source src="movie.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
        </div>
        <div className="right">
          <h1>Great Digital Product Agency since 2016</h1>
          <p>
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its goals.
            Our goal is to provide our client high quality Product with modern
            idea accordingly their budgets and according thir reuirements.
          </p>
        </div>
      </div>
  )
}
