import React from 'react'
import '../css/Left_side_bar.css'
import { Leaderboard, LeaderboardOutlined, Margin } from '@mui/icons-material'

function Left_side_bar() {
  return (
    <>
    <div className='sidebar_setup'>
        <div className='left_sidebar_flex_div'>
          <p> <LeaderboardOutlined /> </p>
          <p  className='textwith_icon'>Dashboard</p>
        </div>
      </div>
   
    
    
    </>
  )
}

export default Left_side_bar