import React from 'react'
import { useStateStore } from '../../Store'

export default function departmentData() {
    const departmentState = useStateStore((state) => state.division)
    const divisionResults = useStateStore((state) => state.divisionResults)

    const handleSubmit = (e) =>{
      console.log(divisionResults)
    } 
  return (
    <>
      {/* {divisionResults.map((divisionResult) => {
        return(
          <div>{divisionResult.prNumber}</div>
        )
      }
      )
      
      } */}
      <div>
        <button onClick={handleSubmit}> Test here</button>
      </div>
    </>
  )
}
