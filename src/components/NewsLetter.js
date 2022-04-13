import React from 'react'
import "./NewsLetter.css"
export default function NewsLetter() {
  return (
    <section className="newsletter">
      <div className="news">
        <div className="news-left">
          <h1>Subscribe Newsletter</h1>
          <p>I will update good news and promotion service not spam</p>
        </div>
        <div className="news-right">
          <form className="form-group">
            <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address..."
          />
          <button>Contact Now</button>
          </form>
        </div>
      </div>
    </section>
  )
}
