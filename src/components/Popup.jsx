import '../css/Popup.css'
import Pr_Update from './PR_Update'
import { useState } from 'react'
import axios from 'axios'
export default function Popup(props) {
  const [display_update, setUpdate] = useState(false)
  const handleUpdate = () => {
    setUpdate(true)
  }
  const handleDelete = async () => {
    await axios.delete('http://localhost:8080/PR/deletePR', { params: { data: props.data.id } })
  }

  return (props.trigger) ? (
    <>
      {display_update ? <Pr_Update display={display_update} setDisplay={setUpdate} data={props.data} /> :
        <div className='popup'>
          <div className='popup-inner'>
            PR Number: {props.data.prNumber}<br />
            Department: {props.data.dep_num}<br />
            Card Number: {props.data.cardNumber}<br />
            PR Amount: {props.data.purchaseRequestAmount}<br />
            Date of Purchase Request: {props.data.datePurchaseRequest}<br />
            Last Updated: {props.data.updatedAt}<br />
            Chris Approval: {props.data.chrisApproval}<br />
            Jason Approval: {props.data.jasonApproval}<br />
            Tonya Approval: {props.data.tonyaApproval}<br />
            <button className='update-btn' onClick={handleUpdate}>Update</button>
            <button className='delete-btn' onClick={handleDelete}>Delete</button>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
          </div>
        </div>
      }
      <div>

      </div>
    </>

  ) : "";
}
