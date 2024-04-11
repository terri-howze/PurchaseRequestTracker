import { useState } from 'react'
import '../css/Left_side_bar.css'
import { LeaderboardOutlined, AddCircleOutline } from '@mui/icons-material'
import { useStateStore } from '../Store'
import { Command } from "@tauri-apps/api/shell"

function Left_side_bar() {

  const prCreateFlagTrue = useStateStore((state) => state.flagTrue)
  const prCreateFlagFalse = useStateStore((state) => state.flagFalse)

  const flagDashboardTrue = useStateStore((state) => state.flagDashboardTrue)
  const flagDashboardFalse = useStateStore((state) => state.flagDashboardFalse)
  const clearDivisionData = useStateStore((state) => state.clearDivisionData)

  const spawnserver = async () => {
    const command = Command.sidecar('binaries/server')
    const output = await command.execute()
    console.log("success")
  }

  const prCreateload = () => {
    clearDivisionData()
    flagDashboardFalse()
    prCreateFlagTrue()
  }
  const dashboardLoad = () => {
    clearDivisionData()
    prCreateFlagFalse()
    flagDashboardTrue()
  }
  spawnserver()
  return (
    <>
      <div className='sidebar_setup'>
        <div className='left_sidebar_flex_div'>
          <div className='icon_text_flex'>
            <p> <LeaderboardOutlined /></p>
            <p className='textwith_icon' onClick={dashboardLoad}>Dashboard</p>
          </div>
          <div className='icon_text_flex'>
            <p> <AddCircleOutline /></p>
            <p onClick={prCreateload}>Creatre PR</p>
          </div>

        </div>

      </div>

    </>
  )
}

export default Left_side_bar