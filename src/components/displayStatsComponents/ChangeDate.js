import React, { Component } from 'react'
import DateOptions from './DateOptions'

export class ChangeDate extends Component {
    onChange = (e) => {
        e.preventDefault();
        this.props.changeDate(e.target.value);
    }
    render() {
        return (
            <div className='changeDate'>
                <h3 tabIndex='3'>Select a date to view its stats:</h3>
                <select className='dateOptions' name='option' onChange={ this.onChange } defaultValue={'default'} tabIndex='4'>
                    <option value='default' disabled>Choose a date</option>
                    <DateOptions allStats={ this.props.allStats } />
                </select>
            </div>
        )
    }
}

export default ChangeDate;
