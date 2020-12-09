import React from 'react'

export default function SingleWorkDayHours(props) {
    const days = {'1': 'Sunday', '2': 'Monday', '3': 'Tuesday', '4': 'Wednesday', '5': 'Thursday', '6': 'Friday', '7': 'Saturday'}

    return (
        <div className='singleWorkDayHours'>
            <h4 className='dayOfWeek' tabIndex='2'>{days[props.workDay['weekday']]}</h4>
            <p tabIndex='2'>Opens {props.workDay['opens_at']}</p>
            <p tabIndex='2'>Closes {props.workDay['closes_at']}</p>
        </div>
    )
}
