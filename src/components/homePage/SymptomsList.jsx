import React from "react";
import "./list.css";


function SymptomList (){
    return(
        <div className="symptom">
            <ul className="symptom-list">
                <li>Fever or chills</li>
                <li>Cough</li>
                <li>Shortness of breath or difficulty breathing</li>
                <li>Fatigue</li>
                <li>Muscle or body aches</li>
                <li>Headache</li>
                <li>New loss of taste or smell</li>
                <li>Sore throat</li>
                <li>Congestion or runny nose</li>
                <li>Nausea or vomiting</li>
                <li>Diarrhea</li>
            </ul>
        </div>
    );
}

export default SymptomList;