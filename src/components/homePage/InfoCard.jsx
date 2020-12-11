import React from "react";
import "../../styles.css";

function InfoCard(props){
    return (
            <div className="info-card">
                <img className="info-img" src={props.img} alt={props.alt}/>
                <h3 tabIndex='30'>{props.title}</h3>
                <p tabIndex='30'>{props.text}</p>
            </div>
    );
}

export default InfoCard;