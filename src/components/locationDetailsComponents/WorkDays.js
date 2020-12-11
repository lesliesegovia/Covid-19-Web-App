import React from 'react'
import SingleWorkDayHours from './SingleWorkDayHours';

export function WorkDays(props) {
    return props.regular_schedule.map((workDay, index) => (
        <SingleWorkDayHours key={ index } workDay={ workDay } />
    ))
}

export default WorkDays;