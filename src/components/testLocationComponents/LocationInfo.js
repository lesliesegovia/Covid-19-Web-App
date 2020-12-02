import React from 'react'

export function LocationInfo(props) {
    return (
        <div className='allSites'>
            <p className='singleSite' tabIndex='0'>{ props.information.name }</p>
        </div>
    )
}

export default LocationInfo;