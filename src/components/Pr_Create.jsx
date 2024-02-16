import React from 'react'
import { useState } from 'react'
// import { FormControl } from '@mui/material'
// import Select from '@mui/material'
import '../css/Pr_Create.css'
import { useStateStore } from '../Store'
import axios from 'axios'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'

function Pr_Create() {
    const d = new Date();
    //initiating state variables for creating purchase request. These are saved as an object we submit is clicked and sent as post request.
    const [prNumber, setprNumber] = useState('0')
    const [department, setdepartment] = useState('0')
    const cardType = "Amex";
    const [purchaseRequestAmount, setAmount] = useState('0')
    const [cardNumber, setCardNumber] = useState('0')
    const [datePurchaseRequest, setDate] = useState(d)
    const mountSatte = useStateStore((state) => state.isMounted)
    const falseMount = useStateStore((state) => state.flagFalse)
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

    const onNewDatePurchase = e => {
      setDate(e.target.value);
      console.log(datePurchaseRequest)
    }

    //Function to change purchaase request amount to new input state
    const onNewPurchaseRequestAmount = e =>{
        setAmount(e.target.value);
    }
  
    // Function to handle submittal of Pr and save it
    const handleSubmit = async(e) => {
    const data = {
       department,
       cardType,
       purchaseRequestAmount,
       cardNumber,
       datePurchaseRequest
        };
    await 
    console.log(datePurchaseRequest.$d)
    //axios.post('http://localhost:8080/PR/addPR', data)
    falseMount()
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
        <label for ="Department">Purchase Request Amount</label>
        <input type="text" onChange = {onNewPurchaseRequestAmount}></input>
        <label for ="Department">Card Number</label>
        <input type="text" onChange = {onNewCardNumber}></input> 
        <label for ="Department">Date of Purchase</label>
        <input type="text" onChange = {onNewPurchaseRequestAmount}></input> 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        onChange={(newValue) => {
          setDate(newValue)
        }} />
        </LocalizationProvider>
      </form>
      <button onClick={handleSubmit}>Submit</button>
      </div>
  )
}

export default Pr_Create