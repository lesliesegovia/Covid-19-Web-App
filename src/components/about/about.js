import React from 'react'; 
import "./about.css";
import home from "../../assets/home-btn.png"
import WcaCard from "./wcaCard/wcaCard";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import fail from "../../assets/fail.png"
import nav from "../../assets/nav.png"
import cdc from "../../assets/cdc.png"

import { Link } from 'react-router-dom'; 
import ScrollButton from '../effects/ScrollButton';
  
function About () { 
    return <div className="about-section"> 
         <div className="about-heading">
        <Link to="/" tabIndex='1'><img src={home}/></Link>
        <h1 tabIndex='2'>About this website</h1>
        </div>

        <div className="about-content">
                <h3 tabIndex='3'>User Accessibility and Friendly Design</h3>
                <p tabIndex='4'>Our focus for this website was to be able to provide simplified and accesible Covid-19 information through a user friendly design. 
                Our goal for this design was intended for anyone around the ages of 12 to 60, to be able to easily understand and learn the information displayed. 
                As well as keeping in mind users who need to navigate by text-to-speech, using the keyboard or need a strong color contrast.  
                </p>
                
                <h3 tabIndex='5'>Color used on the Website</h3>
                <p tabIndex='6'> In order to implement proper use of color for this website, we chose to go with a blue, more specifically <b>#0B5E7D</b>. Blue is a color most 
                associated with Healthcare based on a majority of Healthcare company logos. The specific blue implemented on the website has a contrast ratio of <b>7.21</b> which  passes the 
                contrast criteria, according to the <b>WCAG Level AAA for any size text</b>.
                </p>
                <img className="big-img" src={fail} alt="Screenshot of the Contrast Ratio website showing the failing score of a light blue color against a white background."/>
                <p tabIndex='7'>As shown in the image above, most people are able to see the contrast between the light blue color against a white background. However, those who may have a visual impairment 
                may not be able to do so. Therefore the color contrast ratio is <b>1.48</b> and <b>fails WCAG 2.0</b>.</p>
               
                <h3 tabIndex='8'>Navigation</h3>
                <p tabIndex='9'>For the content on the homepage, we made sure to have a meaningful sequence of information so that anyone with a text to speech reader on can easily know where they are on the page. 
                The structure of the website also makes it simpler for anyone using the keyboard to navigate throughout the website.</p>
                <div id="nav-images">
                <img className="nav-img" src={nav} alt="Screenshot of our website with an arrow showing how the tab button navigates on the navbar."/>
                <img className="nav-img" src={cdc} alt="Screenshot of the CDC Covid-19 section of their website with various possible options for tab to navigate to." />
                </div>
               
                <p tabIndex='10'>The two images above are of this website and the CDC's website. Navigation is a bit easier to control vesus having other nested tabs and buttons as shown on the CDC website.</p>
                
                <h3 tabIndex='11'>Simplified Content</h3>
                <p tabIndex='12'>We simplified the content on this website and added subheadings which passes WCAG 2.0 Level AAA. The language used was also easy and simple to understand. 
                The text throughout the website all have a line height of 2em which also meets the criteria for WCAG 2.0 Level AA. 
                In addition, the font size is appropriate and works with both the blue and grey colors used for text on the website.
                </p>
        </div>

        <section className="wca-section">
        <h1 tabIndex='13'>Web Content Accessibility Guidelines</h1>
        <p id="wca-notice" tabIndex='14'>Web Content Accessibility Guidelines (WCAG) 2.1 defines how to make Web content more accessible to people with disabilities.
                These guidelines also make Web content more usable by older individuals with changing abilities due to aging and often improve usability for users in general.
                </p>
            <div className="wca">
                <WcaCard
                    img = {one}
                    alt = "Number one in a circle."
                    name = "Level A"
                    description = "For Level A conformance (the minimum level of conformance), the Web page satisfies all the Level A Success Criteria, or a conforming alternate version is provided."
                    item1 = "Meaningful Sequence"
                    item2 = "Use of Color"
                    item3 = "Keyboard"
                />
                <WcaCard
                    img = {two}
                    alt = "Number two in a circle."
                    name = "Level AA"
                    description = "For Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided."
                    item1 = "Contrast(Minimum)"
                    item2 = "Headings and Labels"
                    item3 = "Text Spacing"
                />
                <WcaCard
                    img = {three}
                    alt = "Number three in a circle."
                    name = "Level AAA"
                    description = "For Level AAA conformance, the Web page satisfies all the Level A, Level AA and Level AAA Success Criteria, or a Level AAA conforming alternate version is provided."
                    item1 = "Visual Presentation"
                    item2 = "Section Headings"
                    item3 = "Contract(Enhanced)"
                />
            </div>
        </section>
        <footer>
                <p tabIndex='16'>Website created by <b>Leslie Segovia</b> and <b>Francisco Gastelum</b>.<br/></p>
        </footer>

        <ScrollButton scrollStepInPx="50" delayInMs="3" />
    </div> 
} 
export default About; 