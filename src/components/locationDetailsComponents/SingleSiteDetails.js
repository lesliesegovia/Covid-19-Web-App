import React from 'react'
import { Redirect } from 'react-router-dom';
import LocationDetailsCard from './LocationDetailsCard'

export function SingleSiteDetails(props) {
    return props.currentLocation.map((k, index) => (
        <LocationDetailsCard key={ index } locationInfo={ k } />
    ))
}

export default SingleSiteDetails;