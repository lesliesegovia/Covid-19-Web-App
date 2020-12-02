import React from 'react'
import { useLocation } from 'react-router-dom';
import SingleSiteDetails from './locationDetailsComponents/SingleSiteDetails';

export function DisplayLocationDetails(props) {
    return (
        <div className='stateLocations'>
            <h1 className='header' tabIndex='1'>
                { props.currentLocationName }
            </h1>
            <SingleSiteDetails currentLocation={ props.currentLocation } currentLocationName={ props.currentLocationName } />
        </div>
    )
}

export default DisplayLocationDetails;