import React from "react";
import "./wcaCard.css";

function WcaCard(props){
    return(
        <div className="wca-card">
                <img className="wca-icon" src={props.img} alt={props.alt}/>
                <h2 tabIndex='15'>{props.name}</h2>
                <p id="description" tabIndex='15'>{props.description}</p>
                <p tabIndex='15'><b>Criteria includes:</b></p>
                <ul>
                    <li tabIndex='15'>{props.item1}</li>
                    <li tabIndex='15'>{props.item2}</li>
                    <li tabIndex='15'>{props.item3}</li>
                </ul>
        </div>
    );
}

export default WcaCard;