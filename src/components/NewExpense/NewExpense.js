import React from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const exportdata= (importdata)=>{
        const importdata1 ={
            ...importdata,
            id: Math.random().toString()
        }
       
        props.parentdata1(importdata1);
    }
  return (
    <div className='new-expense'>
       <ExpenseForm saveexportdate={exportdata}/>
      
    </div>
  )
}

export default NewExpense
