import React from 'react';
import Navbar from "../My Component/Navbar";
import signup from "./SignUp.module.css";

export default function SignUp(){
    return (
        <>
         <Navbar title="Register"/>
         <form>
             <div className={signup.bg}>
        <div className={signup.container}>
            <div className={signup.heading}>Register</div><br/>

        <div className="form-group">
          <label for="text">Full Name</label><br/>
          <input type="text" className="form-control" id="text" placeholder="Rashika Sahu"/>
        </div>
        <div className="form-group">
          <label for="email">League Username</label><br/>
          <input type="email" className="form-control" id="email" placeholder="_rashikasahu"/>
        </div>

        <div className="form-group">
          <label for="password">Password</label><br/>
          <input type="password" className="form-control" id="password" placeholder="*******"/>
        </div>
        <div className="form-group">
          <label for="password">Confirm Password</label><br/>
          <input type="password" className="form-control" id="password" placeholder="*******"/>
        </div><br/>
        <div className={signup.button}>
        <button type="button" className="btn btn-primary btn-lg btn-block">
            Register</button></div>
            <p style={{ fontSize:"20px", marginLeft:"125px"}}>Already have an account? <a href="#">Sign In</a></p>
</div>
</div>
            </form>
    
      </>
      );
}


