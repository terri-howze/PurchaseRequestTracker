import '../css/Left_side_bar.css'
import { LeaderboardOutlined, AddCircleOutline } from '@mui/icons-material'
import { useStateStore } from '../Store'

function Left_side_bar() {

  const prCreateFlagTrue = useStateStore((state) => state.flagTrue)
  const prCreateFlagFalse = useStateStore((state) => state.flagFalse)
  const isDashboardMounted = useStateStore((state) => state.isDashboardMounted)
  const flagDashboardTrue = useStateStore((state) => state.flagDashboardTrue)
  const flagDashboardFalse = useStateStore((state) => state.flagDashboardFalse)
  const clearDivisionData = useStateStore((state) => state.clearDivisionData)
  const isPrCreateMounted = useStateStore((state) => state.isPrCreateMounted)

  const prCreateload = () => {
    flagDashboardFalse()
    if(isPrCreateMounted == false){
      prCreateFlagTrue()
    }else{
      prCreateFlagFalse()
    }
  
  }
  const dashboardLoad = () => {
    prCreateFlagFalse()
    if(isDashboardMounted == false){
      flagDashboardTrue()
    }else{
      flagDashboardFalse()
    }
    
  }

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