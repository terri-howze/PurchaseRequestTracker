import { useStateStore } from '../../Store'
import '../../css/DepartmentData.css'
import { bouncy } from 'ldrs'
import { useState } from 'react'
import Popup from '../Popup'
bouncy.register()

// Default values shown


export default function DepartmentData(props) {
  const departmentState = useStateStore((state) => state.division)
  const divisionResults = useStateStore((state) => state.divisionResults)
  const [trigger, setTrigger] = useState(false)
  const [divdata, getData] = useState({
    cardNumber: 0,
    cardType: "",
    createdAt: "",
    datePurchaseRequest: "",
    dep_num: 0,
    id: 0,
    poNumber: "",
    prNumber: "",
    purchaseRequestAmount: 0,
    updatedAt: ""

  })
  const handleSubmit = (i) => {
    console.log(i)
    getData({
      ...divdata,
      cardNumber: i.cardNumber,
      cardType: i.cardType,
      createdAt: i.createdAt,
      datePurchaseRequest: i.datePurchaseRequest,
      dep_num: i.dep_num,
      id: i.id,
      poNumber: i.poNumber,
      prNumber: i.prNumber,
      purchaseRequestAmount: i.purchaseRequestAmount,
      updatedAt: i.updatedAt
    })
    setTrigger(true)
  }
  return (
    <>
      {props.data.map((i) => {
        return (
          <div className='div_container'>
            <div key={i.id} className='records_div' onClick={() => handleSubmit(i)}>PR Number:{i.prNumber}</div>
          </div>



        )
      }
      )

      }
      <div>
        {trigger ? <Popup trigger={trigger} setTrigger={setTrigger} data={divdata} />
          : ""
        }
      </div>
    </>
  )
}
