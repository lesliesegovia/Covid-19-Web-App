import React from 'react';
import { Link } from 'react-router-dom'
import SingleLocation from './SingleLocation';

export function GetAllLocations(props) {
    return Object.entries(props.locations).map((k) => (
        <div className='location' key={ props.index }>
            <h1 className='header' tabIndex='0'>{ k[0].replace(/-|_/gi, " ") }</h1>
            <SingleLocation 
                information={ k[1] } 
                stateName={ k[0] } 
            />
            <Link to='/displayLocationDetails' tabIndex='-1'>
                <button className='locationBtn' onClick={ props.chooseLocation.bind(this, props.index, k[0]) }><span>View Details</span></button>
            </Link>
        </div>
    ))
}

export default GetAllLocations;