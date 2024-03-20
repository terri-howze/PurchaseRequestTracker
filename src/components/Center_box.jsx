import { useState } from 'react'
import axios from 'axios'
import '../css/Center_box.css'
import { lazy } from 'react'
import { useStateStore } from '../Store'
import Pr_Create from './Pr_Create'
import Dashboard from './Dashboard'

export default function Center_box() {
const mountSatte = useStateStore((state) => state.isMounted)


  return (
    <>
    <div className='center_box_flex'>
    {mountSatte ? (
        <Pr_Create />
      ) : (
        <Dashboard />
      )}

      
    </div>
    </>
  )
}
