import React from 'react'

function AddNewTransaction({addNewTransaction, amount, setAmount, text, setText}) {
  return (
    <>
        <h3>Add new transaction</h3>
        <form id="form">
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input 
              type="text" id="text" placeholder="Enter text..." 
              value={text}
              onChange = {(e)=>setText(e.target.value)}
            />
            </div>
            <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input 
              type="number" id="amount" placeholder="Enter amount..." 
              value = {amount}
              onChange = {(e)=>setAmount(e.target.value)}
            />
            </div>
            <button type="button" className="btn" onClick={addNewTransaction}>Add transaction</button>
        </form>
    </>
  )
}

export default AddNewTransaction
