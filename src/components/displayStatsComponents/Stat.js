import React from 'react'

export function Stat(props) {
    return (
        <div className='stat'>
            <h2 tabIndex='3'>{props.stat1}</h2>
            <p className='active' tabIndex='3'>{props.stat2}</p>
        </div>
    )
}

export default Stat;