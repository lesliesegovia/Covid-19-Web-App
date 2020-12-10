import React from "react";
import "./wcaCard.css";

function WcaCard(props){
    return(
        <div className="wca-card">
                <img className="wca-icon" src={props.img} alt={props.alt}/>
                <h2>{props.name}</h2>
                <p id="description">{props.description}</p>
                <p><b>Criteria includes:</b></p>
                <ul>
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>{props.item3}</li>
                </ul>
        </div>
    );
}

export default WcaCard;