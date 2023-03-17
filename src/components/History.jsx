import React from 'react'

function History({dummyTransactions, removeTransaction}) {
  return (
    <>
        <h3>History</h3>
        <ul className="list">
            {
                dummyTransactions.map(transaction =>(
                    <li  
                      key={transaction.id} 
                      className={transaction.amount < 0 ? "minus" : "plus"}
                    >
                      {transaction.text} <span>{transaction.amount}</span>
                      <button 
                        className="delete-btn"
                        onClick={()=>removeTransaction(transaction.id)}
                      >
                      x</button>
                    </li> 
                ))
            }
        </ul>
    </>
  )
}

export default History
