import '../css/Center_box.css'
import { useStateStore } from '../Store'
import Pr_Create from './Pr_Create'
import Dashboard from './Dashboard'
import Table from './Table'
import Pagination from './Pagination'

export default function Center_box() {
  const isPrCreateMounted = useStateStore((state) => state.isPrCreateMounted)
  const divresultsarr = useStateStore((state) => state.divresultsarr)
    const pageLimit = 4


  return (
    <>
      <div className='center_box_flex'>
        {isPrCreateMounted ? (
          <Pr_Create />
        ) : (
          ""
        )}


      </div>
      {/* <div className='center_box_flex'>
        {isDashboardMounted ? (
          <Dashboard />
        ) : (
          ""
        )}


      </div> */}
    
        <Pagination
          data={divresultsarr}
          itemsPerPage={pageLimit}
                />

    </>
  )
}
