import React from 'react'
import '../css/Dashboard.css'
import { Card } from '@mui/material'

export default function Dashboard() {

    const divisiontewntydata = () => {
        
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
