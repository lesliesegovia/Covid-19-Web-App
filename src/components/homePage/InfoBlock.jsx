import React from "react";
import "./info-block.css";

function InfoBlock (props){
    return (
        <div className="info-block">
            <h1 tabIndex='5'>{props.title}</h1>
            <p tabIndex='5'>{props.info}</p>
            <img src={props.img}/>
        </div>
    );
}

export default InfoBlock;