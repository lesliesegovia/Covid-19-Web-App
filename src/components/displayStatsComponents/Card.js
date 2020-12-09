import React from 'react'
import AllStats from './AllStats';
import ChangeDate from './ChangeDate';
import { Link } from 'react-router-dom';

import MapImage from '../../assets/united-states-animated-map.png';

export function Card(props) {
    return (
        <div className='card'>
            <div className='mapAndCountry'>
                <img src={ MapImage } className='map' alt='Image Of United States Map' />
                <h1 className='countryName' tabIndex='1'>{ props.country }</h1>
            </div>

            <div className='allCases'>
                <h1 tabIndex='2'>{ props.date }</h1>
                <ChangeDate allStats={ props.allStats } changeDate={ props.changeDate } />
                <div className='allStats'>
                    <AllStats stats={ props.stats } />
                </div>
                <Link to='/displayTestSites' tabIndex='-1'>
                    <button className='locationBtn'><span>View Test Sites</span></button>
                </Link>
            </div>
        </div>
    )   
}

export default Card;