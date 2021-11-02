import React from "react";
import cards from "./Card.module.css";

function Card(props) {
    return(
        <>
        <div className="card" className={cards.design}>
      <img src={props.img} className={cards.img} className="card-img-top" alt="img1"/>
  <div className="card-body" className={cards.content}>
    <h5 className="card-title">{props.title}</h5>
    <a href="#" className="btn btn-primary">{props.button}</a>
  </div>
</div>


        </>
    );
}
export default Card;
