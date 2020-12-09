import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Card from './displayStatsComponents/Card';
import NavbarStats from './navbars/NavbarStats';
import ScrollButton from './effects/ScrollButton';

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
                <div className='statsHeader2'>
                    <div className="navbar-content2">
                        <div className="content-details2">
                            <h1 id="covid-title2" tabIndex='1'>COVID-19 Stats</h1>
                        </div>
                        <NavbarStats/>
                    </div>
                </div>
                
                <Card 
                    allStats={ this.props.stats } 
                    changeDate={ this.props.changeDate }
                    country={ Country }
                    date={ d.toLocaleDateString("en-US", options) } 
                    stats={ stats } 
                />

                <footer>
                    <p><span tabIndex='0'>This web app was created as a project for class.</span> <br/> <b tabIndex='0'>All COVID-19 related statistics were sourced from the <a target="_blank" href="https://covid19api.com">COVID19 API</a></b>.</p>
                </footer>

                <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
            </div>
        )
    }
}

//PropTypes
DisplayStats.propTypes = {
    stats: PropTypes.array.isRequired
}

export default DisplayStats;