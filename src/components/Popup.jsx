import '../css/Popup.css'
import Pr_Update from './PR_Update'
import { useState } from 'react'
import axios from 'axios'
import { useStateStore } from '../Store'

export default function Popup(props) {
  const [display_update, setUpdate] = useState(false)
  const purchaseRequest = useStateStore((state) => state.purchaseRequest)
  const flagTriggerFalse = useStateStore((state) => state.flagTriggerFalse)
  const triggerState = useStateStore((state) => state.triggerState)
  const handleUpdate = () => {
    setUpdate(true)
  }
  const handleDelete = async () => {
    await axios.delete('http://localhost:8080/PR/deletePR', { params: { data: purchaseRequest.id } })
  }

  return (triggerState) ? (
    <>
      {display_update ? <Pr_Update display={display_update} setDisplay={setUpdate} /> :
        <div className='popup'>
          <div className='popup-inner'>
            PR Number: {purchaseRequest.prNumber}<br />
            Department: {purchaseRequest.dep_num}<br />
            Card Number: {purchaseRequest.cardNumber}<br />
            PR Amount: {purchaseRequest.purchaseRequestAmount}<br />
            Date of Purchase Request: {purchaseRequest.datePurchaseRequest.slice(0, 10)}<br />
            Last Updated: {purchaseRequest.updatedAt.slice(0, 10)}<br />
            admin1 Approval: {JSON.stringify(purchaseRequest.admin1Approval)}<br />
            admin2 Approval: {JSON.stringify(purchaseRequest.admin2Approval)}<br />
            admin3 Approval: {JSON.stringify(purchaseRequest.admin3Approval)}<br />
            Purchase Order Number: {purchaseRequest.poNumber}
            <button className='update-btn' onClick={handleUpdate}>Update</button>
            <button className='delete-btn' onClick={handleDelete}>Delete</button>
            <button className='close-btn' onClick={flagTriggerFalse}>Close</button>
          </div>
        </div>
      }
      <div>

      </div>
    </>

  ) : "";
}
