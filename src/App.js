import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DisplayStats from './components/DisplayStats';
import axios from 'axios';
import { links } from './components/testLocationComponents/APILinks'

import './App.css';
import DisplayTestSites from './components/DisplayTestSites';
import DisplayLocationDetails from './components/DisplayLocationDetails';
import ScrollToTop from './components/effects/ScrollToTop';
import HomePage from './components/HomePage';
import About from './components/about/about';

class App extends Component {
  state = {
    stats: [],
    currentStats: {},
    locationLinks: links,
    locations: [],
    displayDownButton: false,
    displayUpButton: false,
    scrollPosition:0
  }

  // saveStateToLocalStorage() {
  //   try {
  //       for(let key in this.state){
  //         localStorage.setItem(key, JSON.stringify(this.state[key]))
  //       }
  //   } catch(e) {
  //       console.log(e);
  //   }
  // }

  componentDidMount() {
    //Statistical API
    axios.get('https://api.covid19api.com/total/country/united-states')
    .then(res => this.setState({
      stats: res.data,
      currentStats: res.data[res.data.length - 1]
    }));
    
    //Testing Sites API
    let links = []
    Object.values(this.state.locationLinks).forEach((value) => {
      links = [...links, axios.get(value)]
    })

    axios.all(links)
    .then(axios.spread((...res) => {
      let locations = []
      res.forEach(a => {
        locations = [...locations, a.data]
      })
      return locations
    }))
    .then(res => {
      let locationsArray = []
      res.forEach((a, b) => {
        locationsArray = [...locationsArray, {[Object.keys(this.state.locationLinks)[b]]: a}]
      })
      return locationsArray
    })
    .then(res => this.setState({
      locations: res
    }))

    // window.removeEventListener(
    //   "beforeunload",
    //   this.saveStateToLocalStorage.bind(this)
    // );
  }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );
  //   this.saveStateToLocalStorage();
  // }

  changeDate = (id) => {
    this.setState({currentStats: this.state.stats[id]})
  }

  chooseLocation = (id, name) => {
    localStorage.setItem('currentLocation', JSON.stringify(this.state.locations[id]))
    localStorage.setItem('currentLocationName', name)
    this.setState({
      currentLocation: this.state.locations[id],
      currentLocationName: name
    })
  }

  render() {
    return (
      <Router>
        <div className='eachStat'>
          <Route exact path='/' component={ HomePage } />

          <Route exact path='/about' component={ About } />

          <Route exact path='/displayStats' render={props => (
            <DisplayStats 
              changeDate={ this.changeDate } 
              currentStats={ this.state.currentStats } 
              stats={ this.state.stats } 
            />
          )} />

          <Route exact 
            path='/displayTestSites' 
            render={(props) => 
              <DisplayTestSites 
                chooseLocation={ this.chooseLocation } 
                locations={ this.state.locations } 
              />
            } 
          />

          <ScrollToTop />
          <Route exact 
            path='/displayLocationDetails' 
            render={(props) => 
              <DisplayLocationDetails 
                currentLocation={ (this.state.currentLocation) ? this.state.currentLocation[this.state.currentLocationName] : JSON.parse(localStorage.getItem('currentLocation'))[localStorage.getItem('currentLocationName')] } 
                currentLocationName={ (this.state.currentLocationName) ? this.state.currentLocationName : localStorage.getItem('currentLocationName') }
                title={ `displayLocationDetails` } 
              />
            } 
          />
        </div>
      </Router>
    )
  }
}

export default App;
