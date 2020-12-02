import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Card from './displayStatsComponents/Card';

class DisplayStats extends Component {
    render(){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const currentStats = this.props.currentStats;
        const d = new Date(currentStats.Date);

        const {Active, Confirmed, Country, Deaths, Recovered} = currentStats;
        const nf = new Intl.NumberFormat();
        const r = {
            Active: nf.format(Active),
            Confirmed: nf.format(Confirmed),
            Deaths: nf.format(Deaths),
            Recovered: nf.format(Recovered)
        }
        const stats = Object.entries(r);
        
        return(
            <div className='parent'>
                <Card 
                    allStats={ this.props.stats } 
                    changeDate={ this.props.changeDate }
                    country={ Country }
                    date={ d.toLocaleDateString("en-US", options) } 
                    stats={ stats } 
                />
                <Link to='/displayTestSites' tabIndex='-1'>
                    <button className='locationBtn'><span>View Details</span></button>
                </Link>
            </div>
        )
    }
}

//PropTypes
DisplayStats.propTypes = {
    stats: PropTypes.array.isRequired
}

export default DisplayStats;