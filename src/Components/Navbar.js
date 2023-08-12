import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link   //Link is used to navigate between pages in react router
} from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark"  data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NewsZy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        {/* <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li> */}


        <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
        <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
        <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
        <li className="nav-item"><a className="nav-link" href="/general">General</a></li>
        <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
        <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
        <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
        
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
