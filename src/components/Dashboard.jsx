import React from 'react'
import '../css/Dashboard.css'
import { useState } from 'react'
import { Card } from '@mui/material'
import axios from 'axios'
import { useStateStore } from '../Store'
//import DepartmentData from './Division Pr Get request Data/departmentData'

export default function Dashboard() {
  const [divdata, getData] = useState('')
    const setdepartmentState = useStateStore((state) => state.setDepartmentStore)
    const departmentState = useStateStore((state) =>state.division)
    const setdivisionResults = useStateStore((state) => state.setdivisionResults)
    const divisionResults = useStateStore(state => state.divisionResults)

///////////////Division 20 pull requests /////////////////////////
    const getTwentyData = async () => {
      const division = 20
      const axrequest = await axios.get('http://localhost:8080/PR/get20', {params: {data: division}})
      console.log(axrequest.data)
      setdepartmentState(division)
    }

///////////////Division 50 pull requests /////////////////////////
    const getFiftyData = async () => {
      const division = 50
        const axrequest = await axios.get('http://localhost:8080/PR/get20', {params: {data: division}})
        const divisionData = axrequest.data
      setdivisionResults(divisionData)
      setdepartmentState(division)
      console.log(divisionResults)     
    }

///////////////Division 51 pull requests /////////////////////////
const getFiftyOneData = async () => {
  const division = 51
  const divisionData = await axios.get('http://localhost:8080/PR/get20', {params: {data: division}})
  setdepartmentState(division)
  console.log(divisionData.data)        
}

///////////////Division 52 pull requests /////////////////////////
const getFiftyTwoData = async () => {
  const division = 52
  const divisionData = await axios.get('http://localhost:8080/PR/get20', {params: {data: division}})
  setdepartmentState(division)
  console.log(divisionData.data)       
}

///////////////Division 53 pull requests /////////////////////////
const getFiftyThreeData = async () => {
  const division = 53
  const divisionData = await axios.get('http://localhost:8080/PR/get20', {params: {data: division}})
  setdepartmentState(division)
  console.log(divisionData.data)       
}

  return (
    <>
      <div className='dep_flex_div'>
        <div className='dep_div' id='20' onClick={getTwentyData}>
          20
        </div>
        <div className='dep_div' id='50' onClick={getFiftyData}>
          50
        </div>
        <div className='dep_div' id='51' onClick={getFiftyOneData}>
          51
        </div>
        <div className='dep_div' id='52' onClick={getFiftyTwoData}>
          52
        </div>
        <div className='dep_div' id='53' onClick={getFiftyThreeData}>
          53
        </div>
      </div>
      <div>
        
        {departmentState === 0 ? (
          'data here'
        ):(
            'stuff'
        )}
        {/* {divdata.map((i) =>{
          <p>{i.prNumber}</p>
        })} */}
      </div>
    </>
  )
}
