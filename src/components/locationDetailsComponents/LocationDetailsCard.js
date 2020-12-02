import React from 'react'
import Address from './Address';
import Phone from './Phone';
import WorkDays from './WorkDays';

export function LocationDetailsCard(props) {
    const { description, name, phones, physical_address, regular_schedule } = props.locationInfo;

    function checkForAddress(){
        if(physical_address.length !== 0){
            return <Address physical_address={physical_address} />
        }
    }

    function checkForPhone(){
        if(phones.length !== 0){
            return <Phone phones={phones} />
        }
    }

    function checkWorkHours(){
        if(regular_schedule.length !== 0){
            return <WorkDays numberOfDays={regular_schedule.length} regular_schedule={regular_schedule} />
        }
    }
    
    return (
        <div className='singleLocationDetails'>
            <h2 className='nameOfState' tabIndex='2'>{ name }</h2>
            <div className='description' tabIndex='2'>
                { description }
            </div>

            <div className='addressAndPhone'>
                {checkForAddress()}
                {checkForPhone()}
            </div>
            
            <div className='workHours'>
                {checkWorkHours()}
            </div>
        </div>
    )
}

export default LocationDetailsCard;