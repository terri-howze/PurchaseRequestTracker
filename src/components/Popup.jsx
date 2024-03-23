import React from 'react'
import '../css/Popup.css'
import Pr_Update from './PR_Update'
import { useState } from 'react'

export default function Popup(props) {
  const[display_update, setUpdate] = useState(false)
  const handleUpdate = () =>{
    setUpdate(true)
  }

  return (props.trigger) ? (
    <>
    {display_update ? <Pr_Update display={display_update} setDisplay={setUpdate} data={props.data}/>:
    <div className='popup'>
      <div className='popup-inner'>
        PR Number: {props.data.prNumber}<br />
        Department: {props.data.dep_num}<br />
        Card Number: {props.data.cardNumber}<br />
        PR Amount: {props.data.purchaseRequestAmount}<br />
        Date of Purchase Request: {props.data.datePurchaseRequest}<br />
        Last Updated: {props.data.updatedAt}
        <button className='update-btn' onClick={handleUpdate}>Update</button>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
      </div>
    </div>
}
    <div>

    </div>
    </>
    
  ) : "";
}
