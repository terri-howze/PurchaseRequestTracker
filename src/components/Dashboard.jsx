import '../css/Dashboard.css'
import { useState } from 'react'
import { Card } from '@mui/material'
import axios from 'axios'
import { useStateStore } from '../Store'
import DepartmentData from './Division Pr Get request Data/DepartmentData'
import DivisionList from './DivisionList'


export default function Dashboard() {
  const [divdata, getData] = useState([])
  const arr = []
  const setdepartmentState = useStateStore((state) => state.setDepartmentStore)
  const departmentState = useStateStore((state) => state.division)

  const Loading = useStateStore((state) => state.loading)
  const isLoading = useStateStore((state) => state.flagLoadingTrue)
  const isNotLoading = useStateStore((state) => state.flagLoadingFalse)

  ///////////////Division 20 pull requests /////////////////////////
  const getTwentyData = async () => {
    divdata.splice(0, divdata.length)
    const division = 20
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    divdata.push(...axrequest.data)
    isNotLoading()
    console.log(axrequest.data)
    setdepartmentState(division)

  }

  ///////////////Division 50 pull requests /////////////////////////
  const getFiftyData = async () => {
    divdata.splice(0, divdata.length)
    const division = 50
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    divdata.push(...axrequest.data)
    isNotLoading()
    setdepartmentState(division)
  }

  ///////////////Division 51 pull requests /////////////////////////
  const getFiftyOneData = async () => {
    divdata.splice(0, divdata.length)
    const division = 51
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    divdata.push(...axrequest.data)
    isNotLoading()
    setdepartmentState(division)
  }

  ///////////////Division 52 pull requests /////////////////////////
  const getFiftyTwoData = async () => {
    divdata.splice(0, divdata.length)
    const division = 52
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    divdata.push(...axrequest.data)
    isNotLoading()
    setdepartmentState(division)
  }

  ///////////////Division 53 pull requests /////////////////////////
  const getFiftyThreeData = async () => {
    divdata.splice(0, divdata.length)
    const division = 53
    isLoading()
    try{
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    divdata.push(...axrequest.data)
    isNotLoading()
    setdepartmentState(division)
    }catch(err){
      isNotLoading()
      console.log("Request not successfu;")
    }
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
        {Loading ? <l-bouncy size="150" speed="1.75" color="black"> </l-bouncy>
          : <DepartmentData data={divdata} />
        }
        {/* {divdata.map((i) =>{
          <p>{i.prNumber}</p>
        })} */}
      </div>
    </>
  )
}
