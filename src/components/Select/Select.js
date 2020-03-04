import React, { Component } from 'react';
import './Select.scss';


const Select = ({ handleSelectChange }) => (

    <select onChange={handleSelectChange} className='select'>
        <option value=''>
            Select
      </option>
        <option value='highest'>
            Highest to lowest
      </option>
        <option value='lowest'>
            Lowest to highhest
      </option>
    </select>
)

export default Select;