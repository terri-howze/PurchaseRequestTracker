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



function Pr_Update(props) {
  //initiating state variables for creating purchase request. These are saved as an object we submit is clicked and sent as post request.
  const purchaseRequest = useStateStore((state) => state.purchaseRequest)
  const setPurchaseRequest = useStateStore((state) => state.setPurchaseRequest)
  const formatDate = purchaseRequest.datePurchaseRequest.slice(0, 10)
  const [prNumber, setprNumber] = useState(purchaseRequest.prNumber)
  const [department, setdepartment] = useState(purchaseRequest.dep_num)
  const cardType = "Amex";
  const [purchaseRequestAmount, setAmount] = useState(purchaseRequest.purchaseRequestAmount)
  const [cardNumber, setCardNumber] = useState(purchaseRequest.cardNumber)
  const [date, setDate] = useState(formatDate)
  const [admin1Approval, setadmin1] = useState(purchaseRequest.admin1Approval)
  const [admin2Approval, setadmin2] = useState(purchaseRequest.admin2Approval)
  const [admin3Approval, setadmin3] = useState(purchaseRequest.admin3Approval)
  const id = purchaseRequest.id
  const poNumber = purchaseRequest.poNumber
  const departmentState = useStateStore((state) => state.division)
  const divresultsarr = useStateStore((state) => state.divresultsarr)
  const addDivisionData = useStateStore((state) => state.addDivisionData)
  const clearDivisionData = useStateStore((state) => state.clearDivisionData)



  //Text thats shows Approved or not Approved for each approver
  //const [admin1ApproveText, setadmin1Approved] = useState("")

  let admin1ApprovedText = ""
  let admin2ApprovedText = ""
  let admin3ApprovedText = ""
  //set initial state of the approve texts
  if (admin1Approval === true) {
    admin1ApprovedText = "Approved"
  } else {
    admin1ApprovedText = "Not Approved"
  }

  if (admin2Approval === true) {
    admin2ApprovedText = "Approved"
  } else {
    admin2ApprovedText = "Not Approved"

  } if (admin3Approval === true) {
    admin3ApprovedText = "Approved"
  } else {
    admin3ApprovedText = "Not Approved"
  }
  //approveText()

  // const mountSatte = useStateStore((state) => state.isMounted)
  // const falseMount = useStateStore((state) => state.flagFalse)
  // const divisionResults = useStateStore((state) => state.divisionResults)
  //Functions to handle submitting PR

  const onadmin1Approve = (e) => {
    if (admin1Approval === true) {
      setadmin1(false)
    } else {
      setadmin1(true)
    }

  }

  const onadmin2Approve = () => {
    if (admin2Approval === true) {
      setadmin2(false)
    } else {
      setadmin2(true)
    }

  }

  const onadmin3Approve = () => {
    if (admin3Approval === true) {
      setadmin3(false)
    } else {
      setadmin3(true)
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
    const data = {
      id,
      prNumber,
      department,
      cardType,
      purchaseRequestAmount,
      datePurchaseRequest,
      cardNumber,
      admin1Approval,
      admin2Approval,
      admin3Approval,
      poNumber
    };
    const updateResults = await axios.post('http://localhost:8080/PR/updatePR', data)
    const updatedDivResults = await axios.get('http://localhost:8080/PR/departmentPr', { params: { data: departmentState } })
    try {
      setPurchaseRequest({
        ...purchaseRequest,
        cardNumber: updateResults.data.cardNumber,
        cardType: updateResults.data.cardType,
        createdAt: updateResults.data.createdAt,
        datePurchaseRequest: updateResults.data.datePurchaseRequest,
        dep_num: updateResults.data.dep_num,
        id: updateResults.data.id,
        poNumber: updateResults.data.poNumber,
        prNumber: updateResults.data.prNumber,
        purchaseRequestAmount: updateResults.data.purchaseRequestAmount,
        updatedAt: updateResults.data.updatedAt,
        admin1Approval: updateResults.data.admin1Approval,
        admin2Approval: updateResults.data.admin2Approval,
        admin3Approval: updateResults.data.admin3Approval
      })
      clearDivisionData()
      addDivisionData([...useStateStore.getState().divresultsarr, ...updatedDivResults.data])
    } catch (err) {
      console.log(err)
    }
    props.setDisplay(false)

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
                admin1: {admin1ApprovedText}
                <button type="button" id='admin1Switch' onClick={onadmin1Approve}>Change</button>
              </div>
              <div>
                admin2: {admin2ApprovedText}
                <button type="button" id='admin2Switch' onClick={onadmin2Approve}>Change</button>
              </div>
              <div>
                admin3: {admin3ApprovedText}
                <button type="button" id='admin3Switch' onClick={onadmin3Approve}>Change</button>
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