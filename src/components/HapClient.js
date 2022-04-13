import React from 'react'
import "./HapClient.css";
export default function HapClient() {
  return (
    <div className="happy-client">
        <div className="row">
          <h1>What our happy client say</h1>
          <p>Several selected clients, who already believe in our service.</p>
        </div>
        <div className="rowt">
          <div className="left-image">
            <img src="./img/ring/user.jpg" alt="client" />
          </div>
          <div className="center-feed">
            <h1>Matthew Paul</h1>
            <p>
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
          </div>
          <div className="right-image">
            <img className="img-1" src="./img/ring/1.jpg" alt="user" />
            <img className="img-2" src="./img/ring/2.jpg" alt="user" />
            <img className="img-3" src="./img/ring/3.jpg" alt="user" />
            <img className="img-4" src="./img/ring/4.jpg" alt="user" />
            <img className="img-5" src="./img/ring/5.jpg" alt="user" />
            <img className="img-6" src="./img/ring/6.jpg" alt="user" />
            <img className="img-7" src="./img/ring/7.jpg" alt="user" />
            <img className="img-8" src="./img/ring/8.jpg" alt="user" />
          </div>
        </div>
    </div>
  )
}
