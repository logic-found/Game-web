import React from 'react';
import Navbar from "../My Component/Navbar";
import home from "./Home.module.css";


export default function Home() {
  return(
    <>
    <Navbar title="BattleField" />
   
    <div className={home.bg}>
      <div className={home.content1box}>
      <div className={home.content1}>
        Find you game <br/> tournament here! 
      </div></div>

      
        <div className={home.content2box}>
    <div className={home.content2}>Over 100 tournament & event waiting
    for you to join<br/>
    <button type="button" className="btn btn-primary btn-lg">Join Tournament</button></div>
    </div>
    </div>
   
    
    </>

  );
}
