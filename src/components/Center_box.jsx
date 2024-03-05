import { useState } from 'react'
import axios from 'axios'
import '../css/Center_box.css'
import { lazy } from 'react'
import { useStateStore } from '../Store'
import Pr_Create from './Pr_Create'
import Dashboard from './Dashboard'

export default function Center_box() {
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

// Function to handle submittal of Pr and save it
const handleSubmit = e => {
  e.preventDefault();
  const data = {
     prNumber,
     department
  };

  axios.post('http://localhost:8080/PR/addPR', data)

}

//End of functions to handle submitting pr

  const testZustand = () => {
    //const mountSatte = 'John'
    console.log(mountSatte);
  }
  return (
    <>
    <div className='center_box_flex'>
    {mountSatte ? (
        <Pr_Create />
      ) : (
        <Dashboard />
      )}
    </div>
    </>
  )
}
