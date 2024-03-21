import React from 'react'
import '../css/Popup.css'

export default function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        PR Number: {props.data.prNumber},<br />
        Department: {props.data.dep_num},<br />
        Card Number: {props.data.cardNumber},<br />
        PR Amount: {props.data.purchaseRequestAmount},<br />
        Date of Purchase Request: {props.data.datePurchaseRequest},<br />
        Last Updated: {props.data.updatedAt}


        <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
      </div>

    </div>
  ) : "";
}
