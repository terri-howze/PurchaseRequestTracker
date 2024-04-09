import '../css/Center_box.css'
import { useStateStore } from '../Store'
import Pr_Create from './Pr_Create'
import Dashboard from './Dashboard'


export default function Center_box() {
  const isPrCreateMounted = useStateStore((state) => state.isPrCreateMounted)
  const isDashboardMounted = useStateStore((state) => state.isDashboardMounted)


  return (
    <>
      <div className='center_box_flex'>
        {isPrCreateMounted ? (
          <Pr_Create />
        ) : (
          ""
        )}


      </div>
      <div className='center_box_flex'>
        {isDashboardMounted ? (
          <Dashboard />
        ) : (
          ""
        )}


      </div>
    </>
  )
}
