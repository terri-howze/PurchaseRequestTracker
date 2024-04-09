import { useState } from 'react'
// import { FormControl } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import '../css/Pr_Update.css'
import { InputLabel } from '@mui/material'
import { useStateStore } from '../Store'
import axios from 'axios'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { formatDate } from 'date-fns'


function Pr_Update(props) {
  //initiating state variables for creating purchase request. These are saved as an object we submit is clicked and sent as post request.
  const formatDate = props.data.datePurchaseRequest.slice(0, 10)
  const [prNumber, setprNumber] = useState(props.data.prNumber)
  const [department, setdepartment] = useState(props.data.dep_num)
  const cardType = "Amex";
  const [purchaseRequestAmount, setAmount] = useState(props.data.purchaseRequestAmount)
  const [cardNumber, setCardNumber] = useState(props.data.cardNumber)
  const [date, setDate] = useState(formatDate)
  const [chrisApproval, setChris] = useState(props.data.chrisApproval)
  const [jasonApproval, setJason] = useState(props.data.jasonApproval)
  const [tonyaApproval, setTonya] = useState(props.data.tonyaApproval)
  const id = props.data.id
  const poNumber = props.data.poNumber
  const divresultsarr = useStateStore((state) => state.divresultsarr)
  const addDivisionData = useStateStore((state) => state.addDivisionData)


  //Text thats shows Approved or not Approved for each approver
  //const [chrisApproveText, setChrisApproved] = useState("")

  let chrisApprovedText = ""
  let jasonApprovedText = ""
  let tonyaApprovedText = ""
  //set initial state of the approve texts
  if (chrisApproval === true) {
    chrisApprovedText = "Approved"
  } else {
    chrisApprovedText = "Not Approved"
  }

  if (jasonApproval === true) {
    jasonApprovedText = "Approved"
  } else {
    jasonApprovedText = "Not Approved"

  } if (tonyaApproval === true) {
    tonyaApprovedText = "Approved"
  } else {
    tonyaApprovedText = "Not Approved"
  }
  //approveText()

  // const mountSatte = useStateStore((state) => state.isMounted)
  // const falseMount = useStateStore((state) => state.flagFalse)
  // const divisionResults = useStateStore((state) => state.divisionResults)
  //Functions to handle submitting PR

  const onChrisApprove = (e) => {
    if (chrisApproval === true) {
      setChris(false)
    } else {
      setChris(true)
    }

  }

  const onJasonApprove = () => {
    if (jasonApproval === true) {
      setJason(false)
    } else {
      setJason(true)
    }

  }

  const onTonyaApprove = () => {
    if (tonyaApproval === true) {
      setTonya(false)
    } else {
      setTonya(true)
    }

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

  // const onNewDatePurchase = e => {
  //   setDate(e.target.value);
  // }

  //Function to change purchaase request amount to new input state
  const onNewPurchaseRequestAmount = e => {
    setAmount(e.target.value);
  }

  // Function to handle submittal of Pr and save it
  const handleSubmit = async (e) => {

    const datePurchaseRequest = dayjs(date).format('MM-DD-YYYY')
    //setDate(date)
    console.log(divresultsarr)
    const data = {
      id,
      prNumber,
      department,
      cardType,
      purchaseRequestAmount,
      datePurchaseRequest,
      cardNumber,
      chrisApproval,
      jasonApproval,
      tonyaApproval,
      poNumber
    };
    await axios.post('http://localhost:8080/PR/updatePR', data,)

      .then(props.setDisplay(false))

  }

  return (
    <>
      <div className='popup'>
        <div className='popup-inner'>
          <div className='form_box_flex'>
            <p>
              Form Submittal
            </p>
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={onNewPR} value={prNumber}></input>
              <label for="Department">Purchase Request</label>
              <InputLabel id="department-label">Department</InputLabel>
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
              </Select>
              <label for="Department">Purchase Request Amount</label>
              <input type="text" onChange={onNewPurchaseRequestAmount} value={purchaseRequestAmount}></input>
              <label for="Department">Card Number</label>
              <input type="text" onChange={onNewCardNumber} value={cardNumber}></input>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={dayjs(formatDate)}
                  onChange={(newValue) => {
                    setDate(newValue)
                  }} />
              </LocalizationProvider>
              <div>
                Chris: {chrisApprovedText}
                <button type="button" id='chrisSwitch' onClick={onChrisApprove}>Change</button>
              </div>
              <div>
                Jason: {jasonApprovedText}
                <button type="button" id='jasonSwitch' onClick={onJasonApprove}>Change</button>
              </div>
              <div>
                Tonya: {tonyaApprovedText}
                <button type="button" id='tonyaSwitch' onClick={onTonyaApprove}>Change</button>
              </div>
            </form>
            <button onClick={handleSubmit}>Submit</button>
            <button className='close-btn' onClick={() => props.setDisplay(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}




export default Pr_Update