import React from 'react'

const PixelTable = ({ pixels, months }) => (
  <div className='divTable container'>
    <div className='divTableHeading'>
      <div className='divTableRow'>
        <div className='divTableCell'></div>
        {months.map(date => <div className='divTableCell' key={`header-${date.date}`} style={{ 'border': date.chosen ? '#39ff14 2px solid' : '' }}>{date.formatted}</div>)}
      </div>
    </div>
    <div className='divTableBody'>
      {pixels.map(item =>
        <div className='divTableRow' key={`row-${item.day}`}>
          <div className='divTableCell' style={{ 'border': item.chosen ? '#39ff14 2px solid' : '' }}>{item.day}</div>
          {item.colours.map(colour => <div className='divTableCell divTableBodyCell' key={`cell-${item.day}-${colour.month}`} style={{ 'backgroundColor': colour.colour }}>{colour.chosen ? '*' : ''}</div>)}
        </div>
      )}
    </div>
  </div>
)

export default PixelTable