import React from "react";
import "../styles.css";
import backgroundpics from "../assets/heading-pics.png";
import Navbar from "./navbars/Navbar";
import Quiz from "./homePage/Quiz.jsx";
import InfoBlock from "./homePage/InfoBlock.jsx";
import SymptomList from "./homePage/SymptomsList.jsx";
import covidVisual from "../assets/covid-visual.png";
import group from "../assets/group.png";

import ScrollButton from './effects/ScrollButton';

function HomePage(){
    return(
        <div>
            <section className="header-section">
            <div className="navbar-content">
                <div className="content-details">
                    <h1 id="covid-title">COVID-19</h1>
                </div>
                <Navbar/>
            </div>
            
            <div className="header-content">
                <div className="content-details">
                    <img src={backgroundpics} alt="Image of social distancing, washing hands and wearing a mask."/>
                </div>
                <div className="content-details">
                    <h1 className="detail-title">Learn about Covid-19 and more.</h1>
                    <h1 className="detail-text"><a href="#quiz">Take the quiz</a> to see if you should get tested.</h1>
                </div>
            </div>
            </section>

            <section id="about-section">
                <div id="about-content">
                <InfoBlock
                    title="What is Covid-19 ?"
                    info="According to the CDC, Coronavirus disease 2019 (COVID-19) is a respiratory illness caused by a virus. COVID-19 can sometimes cause serious complications. People at a higher risk for severe illness include
                        older adults and people of any age who have underlying medical conditions."
                    img={covidVisual}
                />
                 <InfoBlock
                    title="How does it spread ?"
                    info="COVID-19 mainly spreads from person-to-person through respiratory droplets between people who are in close contactwith one another (within 6 feet for a total of 15 minutes or more).
                        The droplets are produced when a person who is infected with the virus that causes COVID-19 coughs, sneezes, or talks.
                        You can get the virus from people who don’t seem sick or don’t have any symptoms.
                        You might be able to get COVID-19 by shaking someone’s hand or touching a surface or object that has the virus on it and then touching your face, mouth, nose, or eyes."
                    img={group}
                />
                 {/* <InfoBlock
                    title="What are the signs ?"
                    info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    img={group}
                /> */}
                <h1>What are the signs ?</h1>
                    <p id="symptom-notice">Notice: Symptoms may appear <b>2-14 days after</b> exposure to the virus.</p>
                    <SymptomList/>
                    <p id="symptom-notice">This list does not include all possible symptoms. CDC will continue to update this list as they learn more about COVID-19.</p>
                </div>
            </section>

            <section id="quiz" className="quiz-section">
                <div className="quiz">
                    <Quiz/>
                </div>
            </section>

            <footer>
                <p>This web app was created as a project for class. <br/> <b>All information was sourced from the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">CDC</a></b>.</p>
            </footer>

            <ScrollButton scrollStepInPx="50" delayInMs="3" />
        </div>
        
    );
}

export default HomePage;