import React, { useState } from 'react'
import '../css/Left_side_bar.css'
import { Leaderboard, LeaderboardOutlined, Margin } from '@mui/icons-material'
import { useStateStore } from '../Store'

function Left_side_bar() {
  const mountSatte = useStateStore((state) => state.isMounted)
  const trueMount = useStateStore((state) => state.flagTrue)
  return (
    <>
    <div className='sidebar_setup'>
        <div className='left_sidebar_flex_div'>
          <p> <LeaderboardOutlined /> </p>
          <p  className='textwith_icon'>Dashboard</p>
        </div>
        <div onClick={trueMount}>
          <p> Creatre PR</p>
        </div>
      </div>
   
    
    
    </>
  )
}

export default Left_side_bar