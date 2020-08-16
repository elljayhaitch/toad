import React, { useState } from 'react';
import './App.css';
import { pixels } from './data/pixels'
import { firstDay, lastDay, months } from './data/months'
import Picker from './components/datepicker';
import PixelTable from './components/pixelTable';

// TODO blah, console, task list
const App = () => {
  let defaultPicked = firstDay
  const today = new Date()
  if (today >= firstDay && today <= lastDay) {
    defaultPicked = today
  }

  const [picked, setPicked] = useState(defaultPicked);

  const onPickerChange = (newPick) => {
    // remove existing chosen
    months.forEach(item => item.chosen = false)
    pixels.forEach(item => {
      item.chosen = false
      item.colours.forEach(colour => colour.chosen = false)
    })

    setPicked(newPick)
  }

  let firstOfMonth = new Date(picked.setHours(0, 0, 0, 0))
  firstOfMonth = new Date(firstOfMonth.setDate(1))

  const monthIndex = months.findIndex(item => item.date.getTime() === firstOfMonth.getTime())
  months[monthIndex].chosen = true

  const dayIndex = pixels.findIndex(item => item.day === picked.getDate())
  pixels[dayIndex].chosen = true

  pixels[dayIndex].colours[monthIndex].chosen = true

  return (
    <div>
      <Picker picked={picked} handlePickerChange={(newPick) => onPickerChange(newPick)} />
      <PixelTable pixels={pixels} months={months} />
    </div>
  )
}

export default App;