import React from 'react'
import "./Client.css";
export default function Client() {
  return (
    <div className="container client">
        <div className="left-box-cl">
            <h1>Our Client</h1>
            <p>Several selected clients, who already believe in our service.</p>
        </div>
        <div className="right-box">
            <img src="./img/google.png" alt="google" />
            <img src="./img/airbnb.png" alt="airbnb" />
            <img src="./img/uber.png" alt="ubereat" />
            <img src="./img/amazon.png" alt="amazon" />
        </div>
    </div>
  )
}
