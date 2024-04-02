import { useState } from 'react'
import '../css/Left_side_bar.css'
import { LeaderboardOutlined, AddCircleOutline} from '@mui/icons-material'
import { useStateStore } from '../Store'
import {Command} from "@tauri-apps/api/shell"

function Left_side_bar() {
  const mountSatte = useStateStore((state) => state.isMounted)
  const trueMount = useStateStore((state) => state.flagTrue)

  const spawnserver = async () =>{
    const command = Command.sidecar('binaries/server')
    const output = await command.execute()
    console.log("success")
  }
  return (
    <>
    <div className='sidebar_setup'>
        <div className='left_sidebar_flex_div'>
          <div className='icon_text_flex'>
            <p> <LeaderboardOutlined /></p>
            <p  className='textwith_icon'>Dashboard</p>
          </div> 
          <div className='icon_text_flex'>
          <p> <AddCircleOutline /></p>
          <p onClick={trueMount}>Creatre PR</p>   
        </div>
        <div className='icon_text_flex'>
          <p onClick={spawnserver}>Spawn</p>   
        </div>
        
      </div>
   
    </div>
    
    </>
  )
}

export default Left_side_bar