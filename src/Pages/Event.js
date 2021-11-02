import React from 'react';
import Navbar from "../My Component/Navbar"
import event from "./Event.module.css";
import pic1 from "../images/team1.jpg";
import pic2 from "../images/team2.jfif";
import pic3 from "../images/team3.jpg";
import pic4 from "../images/team2.jpg";


export default function Second() {
        return(
            <div>
            <Navbar title="Event Schedule"/>
      <div className={event.bg}>     
<div className="event-schedule-area-two bg-color pad100">
    <div className="container">
        <div className="row">
            </div>
        <div className="row">
            <div className="col-lg-12">
                
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade active show" id="home" role="tabpanel">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className={event.content}>
                                        <th className="text-center" scope="col">Date</th>
                                        <th className="text-center" scope="col">Event + Category</th>
                                       
                                        <th scope="col"></th>
                                        <th className="text-center" scope="col">Match</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="inner-box" className={event.content}>
                                        <th scope="row">
                                            <div className="event-date">
                                                <p>10 Nov' 21</p>
                                            </div>
                                        </th>
                                        <td>
                                            <div  className="event-img">
                                                <img className={event.image} src={pic1} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="event-wrap" >
                                                <h3><a href="#" className={event.content}>Mid-Session Cup</a></h3>
                                                <div className="meta">
                                                    <div className="organizers">
                                                        <a href="#" className={event.content}>League of Legends</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="r-no">
                                                <span>T1 Vs RV</span>
                                            </div>
                                        </td>
                                       
                                    </tr>
                                    <tr className="inner-box" className={event.content}>
                                        <th scope="row">
                                            <div className="event-date">

                                                <p>14 Nov'21</p>
                                            </div>
                                        </th>
                                        <td>
                                            <div  className="event-img">
                                                <img className={event.image} src={pic2} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="event-wrap">
                                                <h3><a href="#" className={event.content} >Pubg Mobile Pro League Springs</a></h3>
                                                <div className="meta">
                                                    <div className="organizers">
                                                        <a href="#" className={event.content}>Pubg Mobile</a>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="r-no">
                                                <span>FL Vs LP</span>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="inner-box" className={event.content}>
                                        <th scope="row">
                                            <div className="event-date">
                                                
                                                <p>17 Nov' 21</p>
                                            </div>
                                        </th>
                                        <td>
                                            <div  className="event-img">
                                                <img className={event.image} src={pic3} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="event-wrap">
                                                <h3><a href="#" className={event.content}></a>Arena of Glory Springs </h3>
                                                <div className="meta">
                                                    <div className="organizers">
                                                        <a href="#" className={event.content}>Arena of Valor</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="r-no">
                                                <span>JPB Vs UWE</span>
                                            </div>
                                        </td>
                                       
                                    </tr>
                                    <tr className="inner-box" className={event.content}>
                                        <th scope="row">
                                            <div className="event-date">
                                                
                                                <p>24 Nov' 21</p>
                                            </div>
                                        </th>
                                        <td>
                                            <div  className="event-img">
                                                <img className={event.image} src={pic4} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="event-wrap">
                                                <h3><a href="#" className={event.content}>ESL One Road to Rio North America</a></h3>
                                                <div className="meta">
                                                    <div className="organizers">
                                                        <a href="#" className={event.content}>Counter streak:Global Offensive</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="r-no">
                                                <span>JSR Vs UF</span>
                                            </div>
                                        </td>
                                      </tr> 
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>     
        
            </div>
            </div>
            </div>
            </div>
</div>

            </div>
        );


}