import React from 'react'

export function Address(props) {
    const { address_1, city, country, postal_code, state_province } = props.physical_address[0];
    const mapLink = "https://www.google.com/maps/place/" + address_1 + ",+" + city + ",+" + state_province + "+" + postal_code;
    return (
        <div className='address'>
            <p tabIndex='2'>{ address_1 }</p>
            <p tabIndex='2'>{ city + ", " + state_province + " " + postal_code }</p>
            <p>
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className='mapLink' tabIndex='2'>View on map</a>
            </p>
        </div>
    )
}

export default Address;