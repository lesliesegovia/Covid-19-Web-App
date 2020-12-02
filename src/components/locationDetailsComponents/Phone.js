import React from 'react'

export function Phone(props) {
    const { language, number } = props.phones[0];
    return (
        <div className='telephone'>
            <span tabIndex='2'>Telephone: </span><a href={ "tel:" + number } className='telephoneLink' tabIndex='2'>{ number }</a>
            <br/>
            <p tabIndex='2'>Language: { language }</p>
        </div>
    )
}

export default Phone;