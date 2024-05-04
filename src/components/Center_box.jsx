import '../css/Center_box.css'
import { useStateStore } from '../Store'
import Pagination from './Pagination'
import Graph from './Top 3 Boxes/Graph'
import Createpr from './Top 3 Boxes/Createpr'
import Piegraph from './Top 3 Boxes/PieGraph'

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
         
          {isPrCreateMounted ? (
        <div class="col"><Createpr /></div>
        ) : (
          <container class="flex-grid">
            <div class="col"><Graph /></div>
            <div class="col"><Piegraph /> </div>
          </container>
        )}
     
            
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
