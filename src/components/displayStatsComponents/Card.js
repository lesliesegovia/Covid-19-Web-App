import React from 'react'
import AllStats from './AllStats';
import ChangeDate from './ChangeDate';

export function Card(props) {
    return (
        <div className='card'>
            <h1 className='header' tabIndex='1'>{ props.country }</h1>
            <h1 tabIndex='2'>{ props.date }</h1>
            <div className='allStats'>
                <AllStats stats={ props.stats } />
            </div>
            <ChangeDate allStats={ props.allStats } changeDate={ props.changeDate } />
        </div>
    )   
}

export default Card;