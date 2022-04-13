import React,{useState} from 'react'
import './Navbar.css';
export default function Navbar() {

  const [collapse,setToggle] = useState(false);

  return (
  <div className="container navbar">
    <a className="nav-brand" href="/"><b>A</b>+ Studio</a>
    <div className="menu-container">
      <button className="toggle-btn" onClick={()=> setToggle(!collapse)}><i className="fas fa-bars"></i></button>
      <div className={`menu-bar ${collapse && 'height-fit-content'}`}>
        <ul className="navbar-ul">
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item">
            <a className="nav-link" href="/">What We Do</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Project</a>
          </li>
          <li className="nav-item"><a className="nav-link" href="/">Blog</a></li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
};