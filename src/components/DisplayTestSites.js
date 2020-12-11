import NavbarTestSites from './navbars/NavbarTestSites';
import StateAndLocations from './testLocationComponents/StateAndLocations'
import ScrollButton from './effects/ScrollButton';

export function DisplayTestSites(props) {
    return (
        <div className='testSitesPage'>
            <div className='statsHeader2'>
                <div className="navbar-content2">
                    <div className="content-details2">
                        <h1 id="covid-title2" tabIndex='1'>COVID-19 Test Sites</h1>
                    </div>
                    <NavbarTestSites />
                </div>
            </div>
            
            <div className='testSites'>
                <StateAndLocations locations={ props.locations } chooseLocation={ props.chooseLocation } />
            </div>

            <footer>
                <p><span tabIndex='0'>This web app was created as a project for class.</span> <br/> <b tabIndex='0'>All test sites information was sourced from the <a target="_blank" href="https://documenter.getpostman.com/view/8854915/SzS7PR3t?version=latest">COVID-19 API Testing Locations API</a></b>.</p>
            </footer>

            <ScrollButton scrollStepInPx="100" delayInMs="2" />
        </div>
        
    )
}

export default DisplayTestSites;
