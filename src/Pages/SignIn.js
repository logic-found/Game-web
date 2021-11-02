import React from 'react';
import Navbar from "../My Component/Navbar";
import signin from "./SignIn.module.css";

export default function SignIn() {
    return (
        <>
         <Navbar title="Login"/>
         <form>
             <div className={signin.bg}>
        <div className={signin.container}>
            <div className={signin.heading}>Login</div><br/>

        <div className="form-group">
          <label for="text">League Username</label><br/>
          <input type="text" className="form-control" id="text" placeholder="_rashikasahu"/>
        </div>

        <div className="form-group">
          <label for="password">Password</label><br/>
          <input type="password" className="form-control" id="password" placeholder="*******"/>
        </div><br/>
        <div className={signin.button}>
        <button type="button" className="btn btn-primary btn-lg btn-block">
            Login</button></div>

            
    
       
          </div>
        </div>
      </form>
        </>
    );
}

