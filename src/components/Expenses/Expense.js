import React from 'react'
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from '../UI/Card';

const Expense = (props) => {
  return (

    <Card className='Expense'>
   {
     props.item.map((e)=>(
       <ExpenseItem
       key = {e.id}
       date = {e.date}
       title = {e.title}
       amount = {e.amount}
       
       />

  ))
   },








       
    </Card>
  )
}

export default Expense
