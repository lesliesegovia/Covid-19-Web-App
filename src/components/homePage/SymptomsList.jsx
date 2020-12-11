import React from "react";
import "./list.css";


function SymptomList (){
    return(
        <div className="symptom">
            <ul className="symptom-list">
                <li tabIndex='9'>Fever or chills</li>
                <li tabIndex='9'>Cough</li>
                <li tabIndex='9'>Shortness of breath or difficulty breathing</li>
                <li tabIndex='9'>Fatigue</li>
                <li tabIndex='9'>Muscle or body aches</li>
                <li tabIndex='9'>Headache</li>
                <li tabIndex='9'>New loss of taste or smell</li>
                <li tabIndex='9'>Sore throat</li>
                <li tabIndex='9'>Congestion or runny nose</li>
                <li tabIndex='9'>Nausea or vomiting</li>
                <li tabIndex='9'>Diarrhea</li>
            </ul>
        </div>
    );
}

export default SymptomList;