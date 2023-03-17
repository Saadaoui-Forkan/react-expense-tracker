import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import AddNewTransaction from "./components/AddNewTransaction";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [dummyTransactions,setDummyTransactions] = useState([])
  const [text,setText] = useState("")
  const [amount,setAmount] = useState("")
  const [validate,setValidate] = useState(false)
  const [errorText,setErrorText] = useState("")
  const [errorAmount,setErrorAmount] = useState("")

// Add New Transaction
const addNewTransaction = () => {
  if (text === "" && amount === "") {
    setErrorText("Please Enter A text")
    setErrorAmount("Please enter An Amount")
    setValidate(true)
  } else {
    setDummyTransactions([...dummyTransactions,{id: new Date(), text: text, amount: +amount}])
    setAmount('')
    setText('')
    setValidate(false)
  }
}
// const addNewTransaction = () => {
//   if (text.length === 0 && amount.length === 0) {
//     setErrorText("Please Enter A text")
//     setErrorAmount("Please enter An Amount")
//     setValidate(true)
//   } else if(amount.length === 0 && text.length !== 0 ) {
//     setErrorAmount("Please enter An Amount")
//     setValidate(true)
//   } else if(text.length !== 0 && amount.length === 0) {
//     setErrorText("Please Enter A text")
//     setValidate(true)
//   } else {
//     setDummyTransactions([...dummyTransactions,{id: new Date(), text: text, amount: +amount}])
//     setAmount('')
//     setText('')
//     setValidate(false)
//   }
// }

// Remove A Transaction
const removeTransaction = (id) => {
  const isRemoved = dummyTransactions.filter(item => item.id !== id)
  setDummyTransactions(isRemoved)
}

const amounts = dummyTransactions.map(item => item.amount)
let income = amounts.filter(item => item > 0)
  .reduce((acc,item) => (acc +=item),0)
  .toFixed(2)
let expense = amounts.filter(item => item < 0)
  .reduce((acc,item) => (acc +=item),0)
  .toFixed(2)
                    
  return (
    <div className="container">
      <Header 
        income = {income}
        expense = {expense}
      />
      <IncomeExpense 
        income = {income}
        expense = {expense}
      />
      <History
        dummyTransactions = {dummyTransactions}
        removeTransaction = {removeTransaction}
      />
      <AddNewTransaction
        addNewTransaction = {addNewTransaction}
        amount = {amount}
        text = {text}
        setAmount = {setAmount}
        setText = {setText}
      />
      {
        validate && 
        <Alert 
          errorText = {errorText}
          errorAmount = {errorAmount}
        />
      }
    </div>
  );
}

export default App;
