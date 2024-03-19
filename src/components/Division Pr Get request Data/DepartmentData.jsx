import React from 'react'
import { useStateStore } from '../../Store'
import '../../css/DepartmentData.css'
import { bouncy } from 'ldrs'

bouncy.register()

// Default values shown


export default function DepartmentData(props) {
    const departmentState = useStateStore((state) => state.division)
    const divisionResults = useStateStore((state) => state.divisionResults)

    const handleSubmit = (i) =>{
      console.log(i)
    } 
  return (
    <>
      {props.data.map((i) => {
        return(
          <div className='div_container'>
            <div key={i.id} className='records_div' onClick={() => handleSubmit(i)}>PR Number:{i.prNumber}</div>
          </div>
          
        )
      }
      )
      
      }
      <div className='loading_animation'>
      </div>
    </>
  )
}
