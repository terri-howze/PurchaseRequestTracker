import '../css/Popup.css'
import Pr_Update from './PR_Update'
import { useState } from 'react'
import axios from 'axios'
import { useStateStore } from '../Store'

export default function Popup(props) {
  const [display_update, setUpdate] = useState(false)
  const purchaseRequest = useStateStore((state) => state.purchaseRequest)
  const handleUpdate = () => {
    setUpdate(true)
  }
  const handleDelete = async () => {
    await axios.delete('http://localhost:8080/PR/deletePR', { params: { data: props.data.id } })
  }

  return (props.trigger) ? (
    <>
      {display_update ? <Pr_Update display={display_update} setDisplay={setUpdate}/> :
        <div className='popup'>
          <div className='popup-inner'>
            PR Number: {purchaseRequest.prNumber}<br />
            Department: {purchaseRequest.dep_num}<br />
            Card Number: {purchaseRequest.cardNumber}<br />
            PR Amount: {purchaseRequest.purchaseRequestAmount}<br />
            Date of Purchase Request: {purchaseRequest.datePurchaseRequest}<br />
            Last Updated: {purchaseRequest.updatedAt}<br />
            Chris Approval: {JSON.stringify(purchaseRequest.chrisApproval)}<br />
            Jason Approval: {JSON.stringify(purchaseRequest.jasonApproval)}<br />
            Tonya Approval: {JSON.stringify(purchaseRequest.tonyaApproval)}<br />
            Purchase Order Number: {purchaseRequest.poNumber}
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
