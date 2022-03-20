import React, {useState} from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
   const [eantertitle, seteantertitle] =useState("");
   const [eanteramount, seteanteramount] = useState("");
   const [eanterdate, seteanterdate] = useState("")




    const titleChange = (event)=>{
        seteantertitle(event.target.value);
    

    };
    const amountChange = (event)=>{
        seteanteramount(event.target.value);
    };
    const dateChange = (event) =>{
        seteanterdate(event.target.value);
    };
    const formsubmit=(event)=>{
        event.preventDefault();
        const formData={
            title: eantertitle,
            amount : eanteramount,
            date: new Date(eanterdate)
        }
       
        props.saveexportdate(formData);
        seteantertitle(" ");
        seteanteramount(" ");
        seteanterdate(" ");

    }



  return (
    <div>
        <form action="" onSubmit={formsubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">title</label>
                    <input type="text" value={eantertitle} onChange={titleChange} />

                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">amount</label>
                    <input type="number" value={ eanteramount} onChange={amountChange} />

                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">date</label>
                    <input type="date" value={eanterdate} onChange={dateChange} />

                </div>

            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
      
    </div>
  )
}

export default ExpenseForm
