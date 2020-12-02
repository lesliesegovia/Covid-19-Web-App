import React from 'react'
import Stat from './Stat'

export function AllStats(props) {
    return props.stats.map((stat, k) => (
        <Stat key={k} stat1={stat[0]} stat2={stat[1]} />
    ))
}

export default AllStats;