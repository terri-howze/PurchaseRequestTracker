import '../css/Center_box.css'
import { useStateStore } from '../Store'
import Pr_Create from './Pr_Create'
import Pagination from './Pagination'
import Flexbox from './Flexbox'
import Graph from './Top 3 Boxes/Graph'
import Date from './Top 3 Boxes/Date'
import Createpr from './Top 3 Boxes/Createpr'
import { Container } from '@mui/material'

export default function Center_box() {
  const isPrCreateMounted = useStateStore((state) => state.isPrCreateMounted)
  const divresultsarr = useStateStore((state) => state.divresultsarr)
  const pageLimit = 6


  return (
    <>

      <div className='center_box_flex'>
        {/* {isPrCreateMounted ? (
          <Pr_Create />
        ) : (
          ""
        )} */}
        <div className='flex_component_div'>
          <container class="flex-grid">
            <div class="col"><Createpr /></div>
            <div class="col"><Graph /></div>
            <div class="col"><Date /></div>
          </container>
          </div>
          <Pagination />




        

      </div>
      {/* <div className='center_box_flex'>
        {isDashboardMounted ? (
          <Dashboard />
        ) : (
          ""
        )}


      </div> */}


    </>
  )
}
