import React from 'react'
import { useStateStore } from '../../Store'

export default function departmentData(props) {
    const departmentState = useStateStore((state) => state.division)
    const divisionResults = useStateStore((state) => state.divisionResults)

    const handleSubmit = (e) =>{
      console.log(props.data)
      console.log(departmentState)
    } 
  return (
    <>
      {props.data.map((i) => {
        return(
          <div>{i.prNumber}</div>
        )
      }
      )
      
      }
      <div>
        <button onClick={handleSubmit}> Test here</button>
      </div>
    </>
  )
}
