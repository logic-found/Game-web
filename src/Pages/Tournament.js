import React from 'react';
import Navbar from "../My Component/Navbar";
import Card from '../My Component/Card';
import tour from "./Tournament.module.css";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";

export default function Tournament() {
        return(
            <>
            <Navbar title="Tournament Area"/>
            <div className={tour.bg}>
           
          <div className={tour.card}>
           <Card title="Battlefield 1" button="Play now!" img={pic1} />
           <Card title="Battlefield 2" button="Play now!" img={pic2} /></div>
           <div className={tour.card1}>
           <Card title="Battlefield 3" button="Play now!" img={pic3} />
           <Card title="Battlefield 4" button="Play now!" img={pic4} />
           
</div>

</div>
            </>

        );


}

