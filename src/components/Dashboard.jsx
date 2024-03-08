import React from 'react'
import '../css/Dashboard.css'
import { Card } from '@mui/material'
import axios from 'axios'

export default function Dashboard() {

    const divisiontewntydata = async () => {
        const dep20data = await axios.get('http://localhost:8080/PR/get20')
        console.log(dep20data)
    }

  return (
    <>
      <div className='dep_flex_div'>
        <div className='dep_div' onClick={divisiontewntydata}>
          20
        </div>
        <div className='dep_div'>
          51
        </div>
        <div className='dep_div'>
          52
        </div>
        <div className='dep_div'>
          53
        </div>
      </div>
    </>
  )
}
