import React from 'react'

function Header({income, expense}) {
    const total = +income + +expense;
  return (
    <div>
      <h2>Expense Tracker</h2>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  )
}

export default Header
