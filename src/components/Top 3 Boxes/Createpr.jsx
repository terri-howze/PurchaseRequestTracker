import React from 'react'
import '../../css/Createpr.css'
import { useState } from 'react'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import { InputLabel } from '@mui/material'
import { useStateStore } from '../../Store'
import axios from 'axios'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'


export default function Createpr() {
    //initiating state variables for creating purchase request. These are saved as an object we submit is clicked and sent as post request.
  const [prNumber, setprNumber] = useState()
  const [department, setdepartment] = useState('0')
  const [file, setFile] = useState()
  const cardType = "Amex";
  const [purchaseRequestAmount, setAmount] = useState('0')
  const [cardNumber, setCardNumber] = useState('0')
  const [date, setDate] = useState("")
  const divisionResults = useStateStore((state) => state.divisionResults)
  const createPrFalseMount = useStateStore((state) => state.flagFalse)
//   const [chrisApproval, setChris] = useState(false)
//   const [jasonApproval, setJason] = useState(false)
//   const [tonyaApproval, setTonya] = useState(false)
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}

  function handlefile(event) {
    setFile(event.target.files[0])
  }

  //Function to change prNumber state to new prNumber input
  const onNewPR = e => {
    setprNumber(e.target.value);
  };

  // Function to change department state to new department input
  const onNewDepartment = e => {
    setdepartment(e.target.value);
  };

  // Function to change card number state to new card number input. will come back to handle encrypting(maybe)
  const onNewCardNumber = e => {
    setCardNumber(e.target.value);
  }

  //Function to change purchaase request amount to new input state
  const onNewPurchaseRequestAmount = e => {
    setAmount(e.target.value);
  }

  // Function to handle submittal of Pr and save it
  const handleSubmit = async () => {
    const datePurchaseRequest = dayjs(date).format('MM-DD-YYYY')
    //setDate(date)
    console.log(divisionResults)
    const data = {
      prNumber,
      department,
      cardType,
      purchaseRequestAmount,
      datePurchaseRequest,
      cardNumber,
      file

    };
    await axios.post('http://localhost:8080/PR/addPR', data, config)

    createPrFalseMount()
  }

  return (
    <>
    <div className='createpr_inner_box'>
      <form onSubmit={handleSubmit}>
        <label for="Department">Purchase Request</label>
        <input type="text" onChange={onNewPR}></input>
        
        <br /><label>Department</label>
        <Select
          id="department-label"
          defaultValue=''
          value={department}
          label="Department"
          onChange={onNewDepartment}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={51}>51</MenuItem>
          <MenuItem value={52}>52</MenuItem>
          <MenuItem value={53}>53</MenuItem>
        </Select><br />
        <label for="Department">Purchase Request Amount</label>
        <input type="text" onChange={onNewPurchaseRequestAmount}></input>
        <br /><label for="Department">Card Number</label>
        <input type="text" onChange={onNewCardNumber}></input>
        <br /><label>PR Document</label>
        <input type='file' onChange={handlefile}></input><br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(newValue) => {
              setDate(newValue)
            }} />
        </LocalizationProvider>
      </form>
      <button id='myform' type='submit' onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}
