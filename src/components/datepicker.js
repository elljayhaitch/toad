import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { firstDay, lastDay } from '../data/months'

const Picker = ({ handlePickerChange, picked }) => {
  return (
    <div className='container'>
      <DatePicker
        selected={picked}
        onChange={handlePickerChange}
        dateFormat='dd/MM/yyyy'
        minDate={firstDay}
        maxDate={lastDay}
      />
    </div>
  )
}

export default Picker