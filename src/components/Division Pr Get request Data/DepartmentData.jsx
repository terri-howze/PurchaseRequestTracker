import { useStateStore } from '../../Store'
import '../../css/DepartmentData.css'
import { bouncy } from 'ldrs'
import { useState } from 'react'
import Popup from '../Popup'
import Pagination from '../Pagination'
bouncy.register()

// Default values shown 


export default function DepartmentData(props) {
  const departmentState = useStateStore((state) => state.division)
  const divresultsarr = useStateStore((state) => state.divresultsarr)
  const [trigger, setTrigger] = useState(false)
  const setPurchaseRequest = useStateStore((state) => state.setPurchaseRequest)
  const pageLimit = 2

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
    updatedAt: "",
    admin1Approval: false,
    admin2Approval: false,
    admin3Approval: false

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
      updatedAt: i.updatedAt,
      admin1Approval: i.admin1Approval,
      admin2Approval: i.admin2Approval,
      admin3Approval: i.admin3Approval
    })
    setTrigger(true)
  }
  return (
    <>
      {/* {divresultsarr.map((i) => {
        return (
          <div className='div_container'>
            <div key={i.id} className='records_div' onClick={() => handleSubmit(i)}>PR Number:{i.prNumber}</div>
          </div>



        )
      }
      )

      } */}
      <div>
        {trigger ? <Popup trigger={trigger} setTrigger={setTrigger} data={divdata} />
          : ""
        }
      </div>
    </>
  )
}
