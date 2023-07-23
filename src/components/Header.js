import React from 'react'

function Header({totalIncome}) {
  return (
    <div>
        <h1>Income Tracker</h1>
        <div className='total-income'>{totalIncome} TL</div>
    </div>
  )
}

export default Header
