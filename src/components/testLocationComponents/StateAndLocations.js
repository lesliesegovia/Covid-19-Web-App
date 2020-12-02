import React from 'react'
import GetAllLocations from './GetAllLocations'

export function StateAndLocations(props) {
    return Object.entries(props.locations).map((k, index) => (
        <GetAllLocations key={ index } index={ index } locations={ k[1] } chooseLocation={ props.chooseLocation } />
    ))
}

export default StateAndLocations;