import React from 'react'
import { useLocation } from 'react-router-dom';
import ScrollButton from './effects/ScrollButton';
import SingleSiteDetails from './locationDetailsComponents/SingleSiteDetails';
import NavbarLocationDetails from './navbars/NavbarLocationDetails';

export function DisplayLocationDetails(props) {
    return (
        <div className='locDetPage'>
            <div className='statsHeader2'>
                <div className="navbar-content2">
                    <div className="content-details2">
                        <h1 id="covid-title2" tabIndex='1'>{ props.currentLocationName } COVID-19 Test Sites</h1>
                    </div>
                    <NavbarLocationDetails />
                </div>
            </div>

            <div className='stateLocations'>
                <SingleSiteDetails currentLocation={ props.currentLocation } currentLocationName={ props.currentLocationName } />
            </div>

            <footer>
                <p><span tabIndex='0'>This web app was created as a project for class.</span> <br/> <b tabIndex='0'>All test sites information was sourced from the <a target="_blank" href="https://documenter.getpostman.com/view/8854915/SzS7PR3t?version=latest">COVID-19 API Testing Locations API</a></b>.</p>
            </footer>

            <ScrollButton scrollStepInPx="50" delayInMs="1" />
        </div>
    )
}

export default DisplayLocationDetails;