import React from 'react'
import LocationInfo from './LocationInfo';

export function SingleLocation(props) {
    return Object.entries(props.information).map((k, index) => (
        <LocationInfo  information={ k[1] } key={ index } />
    ))
}

export default SingleLocation;