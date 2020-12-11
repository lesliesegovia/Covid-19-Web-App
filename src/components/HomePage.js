import React from "react";
import "../styles.css";
import backgroundpics from "../assets/heading-pics.png";
import Navbar from "./navbars/Navbar";
import Quiz from "./homePage/Quiz.jsx";
import InfoBlock from "./homePage/InfoBlock.jsx";
import SymptomList from "./homePage/SymptomsList.jsx";
import covidVisual from "../assets/covid-visual.png";
import group from "../assets/group.png";
import InfoCard from "./homePage/InfoCard.jsx";
import mask from "../assets/mask.png";
import distance from "../assets/distance.png";
import tissue from "../assets/tissue.png";
import health from "../assets/health.png";
import clean from "../assets/clean.png";
import wash from "../assets/wash.png";

import ScrollButton from './effects/ScrollButton';

function HomePage(){
    return(
        <div>
            <section className="header-section">
                <div className='header'>
                    <div className="navbar-content">
                        <div className="content-details1">
                            <h1 id="covid-title" tabIndex='1'>COVID-19</h1>
                        </div>
                        <Navbar/>
                    </div>
                </div>
                
                
                <div className="header-content">
                    <div className="content-details">
                        <img src={backgroundpics} alt="Three seperate images about social distancing, washing hands and wearing a mask."/>
                    </div>
                    <div className="content-details">
                        <h1 className="detail-title" tabIndex='3'>Learn about Covid-19 and more.</h1>
                        <h1 className="detail-text" tabIndex='4'><a href="#quiz" tabIndex='4'>Take the quiz</a> to see if you should get tested.</h1>
                    </div>
                </div>
            </section>

            <section id="about-section">
                <div id="about-content">
                    <div className='info-blocks'>
                        <InfoBlock
                            title="What is Covid-19 ?"
                            info="According to the CDC, Coronavirus disease 2019 (COVID-19) is a respiratory illness caused by a virus. COVID-19 can sometimes cause serious complications. People at a higher risk for severe illness include
                                older adults and people of any age who have underlying medical conditions."
                            img={covidVisual}
                            alt="Visual of Covid cell going to a pair of lungs to represent how covid attacks the body."
                        />
                        
                        <InfoBlock
                            title="How does it spread ?"
                            info="COVID-19 mainly spreads from person-to-person through respiratory droplets between people who are in close contact with one another (within 6 feet for a total of 15 minutes or more).
                                The droplets are produced when a person who is infected with the virus that causes COVID-19 coughs, sneezes, or talks.
                                You can get the virus from people who don’t seem sick or don’t have any symptoms.
                                You might be able to get COVID-19 by shaking someone’s hand or touching a surface or object that has the virus on it and then touching your face, mouth, nose, or eyes."
                            img={group}
                            alt="Group of people in close contact to represent no social distancing or mask wearing."
                        />
                        
                    </div>
                    <h1 tabIndex='7'>What are the symptoms ?</h1>
                    <p id="symptom-notice" tabIndex='8'>Notice: Symptoms may appear <b>2-14 days after</b> exposure to the virus.</p>
                    <SymptomList/>
                    <p id="symptom-notice" tabIndex='9'>This list does not include all possible symptoms. CDC will continue to update this list as they learn more about COVID-19.</p>
                </div>
            </section>

            <section id="quiz" className="quiz-section">
                <div className="quiz">
                    <Quiz/>
                </div>
            </section>

            <section id="prevent" className="prevent-section">
            <h1 tabIndex='29'>Ways to Prevent Covid-19</h1>
                <div className="prevent-content">
                    <InfoCard
                    img = {wash}
                    alt = "Hands washing with soap."
                    title = "Wash your hands often"
                    text = "Wash your hands often with soap and water for at least 20 seconds. Use a hand sanitizer that contains at least 60% alcohol and avoid touching your eyes, nose, and mouth with unwashed hands."
                    />
                     <InfoCard
                    img = {distance}
                    alt = "Two people with a distance in between."
                    title = "Avoid Close Contact"
                    text = "Avoid close contact with people who are sick. If possible, maintain 6 feet between the person who is sick and other household members.Outside your home, put 6 feet of distance between yourself and people who don’t live in your household."
                    />
                     <InfoCard
                    img = {mask}
                    alt = "A side profile face with a mask on."
                    title = "Wear a mask"
                    text = "Masks help prevent you from getting or spreading the virus. Everyone should wear a mask in public settings and when around people who don’t live in your household, especially when other social distancing measures are difficult to maintain."
                    />
                     <InfoCard
                    img = {tissue}
                    alt = "Tissue box."
                    title = "Cover coughs and sneezes"
                    text = "Always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow and do not spit. Immediately wash your hands with soap and water for at least 20 seconds."
                    />
                     <InfoCard
                    img = {clean}
                    alt = "Cleaning spray bottle."
                    title = "Clean and disinfect"
                    text = "Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks. If surfaces are dirty, clean them. Use detergent or soap and water prior to disinfection."
                    />
                     <InfoCard
                    img = {health}
                    alt = "A side profile face with a health symbol over the head."
                    title = "Monitor Your Health Daily"
                    text = "Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of COVID-19. Take your temperature if symptoms develop and follow CDC guidance."
                    />
                </div>
            </section>

            <footer>
                <p><span tabIndex='31'>This web app was created as a project for class.</span> <br/> <b tabIndex='32'>All information was sourced from the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" tabIndex='33'>CDC</a></b>.</p>
            </footer>

            <ScrollButton scrollStepInPx="50" delayInMs="3" />
        </div>
        
    );
}

export default HomePage;