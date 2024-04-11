import '../css/Dashboard.css'
import { useState } from 'react'
import { Card } from '@mui/material'
import axios from 'axios'
import { useStateStore } from '../Store'
import DepartmentData from './Division Pr Get request Data/DepartmentData'
import DivisionList from './DivisionList'


export default function Dashboard() {
  const [divdata, getData] = useState([])
  const divresultsarr = useStateStore((state) => state.divresultsarr)
  const setdepartmentState = useStateStore((state) => state.setDepartmentStore)
  const departmentState = useStateStore((state) => state.division)
  const addDivisionData = useStateStore((state) => state.addDivisionData)
  const clearDivisionData = useStateStore((state) => state.clearDivisionData)
  const Loading = useStateStore((state) => state.loading)
  const isLoading = useStateStore((state) => state.flagLoadingTrue)
  const isNotLoading = useStateStore((state) => state.flagLoadingFalse)

  ///////////////Division 20 pull requests /////////////////////////
  const getTwentyData = async () => {
    clearDivisionData()
    const division = 20
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    //divdata.push(...axrequest.data)
    addDivisionData([...useStateStore.getState().divresultsarr, ...axrequest.data])

    isNotLoading()
    setdepartmentState(division)
    console.log(divresultsarr)

  }

  ///////////////Division 50 pull requests /////////////////////////
  const getFiftyData = async () => {
    clearDivisionData()
    const division = 50
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    //divdata.push(...axrequest.data)
    addDivisionData([...useStateStore.getState().divresultsarr, ...axrequest.data])

    isNotLoading()
    console.log(divresultsarr)
    setdepartmentState(division)

  }

  ///////////////Division 51 pull requests /////////////////////////
  const getFiftyOneData = async () => {
    clearDivisionData()
    const division = 51
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    //divdata.push(...axrequest.data)
    addDivisionData([...useStateStore.getState().divresultsarr, ...axrequest.data])

    isNotLoading()
    setdepartmentState(division)
  }

  ///////////////Division 52 pull requests /////////////////////////
  const getFiftyTwoData = async () => {
    clearDivisionData()
    const division = 52
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    //divdata.push(...axrequest.data)
    addDivisionData([...useStateStore.getState().divresultsarr, ...axrequest.data])

    isNotLoading()
    setdepartmentState(division)
  }
  ///////////////Division 53 pull requests /////////////////////////
  const getFiftyThreeData = async () => {
    clearDivisionData()
    const division = 53
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/get20', { params: { data: division } })
    //divdata.push(...axrequest.data)
    addDivisionData([...useStateStore.getState().divresultsarr, ...axrequest.data])

    isNotLoading()
    setdepartmentState(division)
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
        {Loading ? <p>Loading...</p>
          : <DepartmentData data={divdata} />
        }
        {/* {divdata.map((i) =>{
          <p>{i.prNumber}</p>
        })} */}
      </div>
    </>
  )
}

