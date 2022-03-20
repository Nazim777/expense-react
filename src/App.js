import React,{useState} from 'react'
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";


let dummy__expense =[
 
]


const App = () => {
  const[expense, setexpense]= useState( dummy__expense)
 

 const parentdata =(importparentdata)=>{
   const updateddata =[importparentdata,...expense];
   setexpense(updateddata);
 };
  return (
     <div>
          <NewExpense parentdata1 = {parentdata}/>
       <Expense item={expense} />
     </div>
     
   
  )
}

export default App
