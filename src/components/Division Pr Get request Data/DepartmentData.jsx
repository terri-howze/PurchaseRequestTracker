import React from 'react'
import { useStateStore } from '../../Store'

export default function departmentData() {
    const departmentState = useStateStore((state) => state.division)
    const divisionResults = useStateStore((state) => state.divisionResults)
  return (
    <div>
        {divisionResults.map((divisionResults, index) =>{
            <div key={index}>{divisionResults.id}, {divisionResults.prNumber}</div>
        })}
    </div>
  )
}
