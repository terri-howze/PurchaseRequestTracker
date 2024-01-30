import { useState } from 'react'
import axios from 'axios'
import '../css/Center_box.css'

export default function Center_box() {
const [prNumber, setprNumber] = useState('0')
const [department, setdepartment] = useState('0')
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


  return (
    <>
      <div className='center_box_flex'>
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
    </>
  )
}
