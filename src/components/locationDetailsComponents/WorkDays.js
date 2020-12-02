import React from 'react'
import SingleWorkDayHours from './SingleWorkDayHours';

export function WorkDays(props) {
    const days = {'1': 'Sunday', '2': 'Monday', '3': 'Tuesday', '4': 'Wednesday', '5': 'Thursday', '6': 'Friday', '7': 'Saturday'}

    return props.regular_schedule.map((workDay, index) => (
        <SingleWorkDayHours key={ index } workDay={ workDay } />
    ))
}

export default WorkDays;