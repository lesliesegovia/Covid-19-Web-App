import React from "react";
import "./quiz.css";

function Quiz(){
    return (
        <div className="quiz">
            <h1>Should I get tested for Covid-19 ?</h1>
            <p>Take this short quiz to see if it is better for you to quarentine or get tested.</p>
            <form>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> You have had close contact with someone diagnosed with COVID-19 or been notified that you may have been exposed to it</label><br/>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                <label for="vehicle2"> You live in a long-term care facility, nursing home, or homeless shelter?</label><br/>
                <input type="checkbox" id="vehicle3" name="vehicle2" value="Car"/>
                <label for="vehicle3"> In the last two weeks, you worked or volunteered in a healthcare facility or as a first responder. Healthcare facilities include a hospital, other medical setting (including dental care setting), or long-term care facility.</label><br/>
                <input type="checkbox" id="vehicle4" name="vehicle2" value="Car"/>
                <label for="vehicle4"> In the two weeks before you felt sick, you cared for or had close contact (within 6 feet of an infected person for at least 15 minutes) with someone with symptoms of COVID-19, tested for COVID-19, or diagnosed with COVID-19?</label><br/>
                <input type="checkbox" id="vehicle5" name="vehicle2" value="Car"/>
                <label for="vehicle5"> Have or are experiencing any of the symptoms listed above</label><br/><br/>
            </form>
            <button class="check-button">Check</button>
        </div>
    );
}

export default Quiz;