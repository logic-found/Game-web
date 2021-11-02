import React from 'react';
import navbar from "./Navbar.module.css";

function Navbar(props) {
    return(
        <>
        <div className={navbar.container}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity-13">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="tournament">Tournaments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="event">Events</a>
        </li>
      </ul>
      <form className="d-flex">
        <a className={navbar.an} href="signin">
      <button type="button" className="btn btn-outline-primary" >Sign In</button>
      </a>
      <a href="signup">
      <div className={navbar.btn}></div>
      <button type="button" className="btn btn-primary" onclick="window.location.href='https://localhost:3000/signup';">Sign Up</button>
      </a>
      </form>
    </div>
    </div>
  </nav>

 </div>
 </>

    );
}

export default Navbar;