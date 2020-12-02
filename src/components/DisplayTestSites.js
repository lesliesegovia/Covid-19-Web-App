import StateAndLocations from './testLocationComponents/StateAndLocations'

export function DisplayTestSites(props) {
    return (
        <div className='testSites'>
            <StateAndLocations locations={ props.locations } chooseLocation={ props.chooseLocation } />
        </div>
    )
}

export default DisplayTestSites;
