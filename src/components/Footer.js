import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className="container footer">
        <div className="rowup">
          <div className="col">
            <a className="footer-brand" href="/"><b>A</b>+ Studio</a>
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <div className="icons">
              <a href="/"><i className="fab fa-facebook-f"></i></a>
              <a href="/"><i className="fab fa-twitter"></i></a>
              <a href="/"><i className="fab fa-linkedin-in"></i></a>
          </div>
          </div>
          <div className="col">
            <h4>What We Do</h4>
            <ul>
              <li><a href="/">Web Design</a></li>
              <li><a href="/">App Design</a></li>
              <li><a href="/">Social Media Manage</a></li>
              <li><a href="/">Market Analysis Project</a></li>
            </ul>
          </div>
          <div className="col">
            <h4>Company</h4>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Become Investor</a></li>
            </ul>
          </div>
          <div className="col">
            <h4>Support</h4>
            <ul>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Policy</a></li>
              <li><a href="/">Business</a></li>
            </ul>
          </div>
          <div className="col">
            <h4>Contact</h4>
            <ul>
              <li><a href="/">WhatsApp</a></li>
              <li><a href="/">Support 24</a></li>
            </ul>
          </div>
        </div>
        <div className="rowdn">Copyright © 2022 Avi Yansah</div>
      </div>
  )
}
