import React from 'react'
import { useState } from 'react'
// import { FormControl } from '@mui/material'
// import Select from '@mui/material'
import '../css/Pr_Create.css'
import { useStateStore } from '../Store'

function Pr_Create() {
    //initiating state variables for creating purchase request. These are saved as an object we submit is clicked and sent as post request.
    const [prNumber, setprNumber] = useState('0')
    const [department, setdepartment] = useState('0')
    const [cardType, setCardType] = useState("")
    const [purchaseRequestAmount, setAmount] = useState('0')
    const [cardNumber, setCardNumber] = useState('0')
    const mountSatte = useStateStore((state) => state.isMounted)
    //Functions to handle submitting PR

    // Function to change prNumber state to new prNumber input
    const onNewPR = e =>{
    setprNumber(e.target.value);
    };
    // Function to change department state to new department input
    const onNewDepartment = e =>{
    setdepartment(e.target.value);
    };

    // Function to change card number state to new card number input. will come back to handle encrypting(maybe)
    const onNewCardNumber = e =>{
        setCardNumber(e.target.value);
    }

    //Function to change purchaase request amount to new input state
    const onNewPurchaseRequestAmount = e =>{
        setAmount(e.target.value);
    }
  
    // Function to handle submittal of Pr and save it
    const handleSubmit = e => {
    const data = {
       prNumber,
       department,
       cardType,
       purchaseRequestAmount,
       cardNumber
        };



        
        axios.post('http://localhost:8080/PR/addPR', data)

    }
    return (
      <div className='form_box_flex'>
        <p>
          Form Submittal
        </p>
      <form onSubmit={handleSubmit}>
        <label for ="PR Number">Pr Number</label>
        <input type="text" onChange = {onNewPR}></input>
        <label for ="Department">Department</label>
        <input type="text" onChange = {onNewDepartment}></input> 
      </form>
      <button onClick={handleSubmit}>Submit</button>
      </div>
  )
}

export default Pr_Create