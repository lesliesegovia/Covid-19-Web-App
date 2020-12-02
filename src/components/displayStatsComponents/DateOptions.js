import React from 'react'

export function DateOptions(props) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return props.allStats.map((singleStat, k) => (
        <option key={k} value={k}>{new Date(singleStat.Date).toLocaleDateString("en-US", options)}</option>
    ))
}

export default DateOptions;