import React from 'react'
import '../css/Header.css'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useStateStore } from '../Store'
import axios from 'axios'
import Popup from './Popup'
import { set } from 'date-fns'

export default function Header() {
  const [search_value, setsearch_value] = useState("")
  const [searchdata, getData] = useState({})
  const Loading = useStateStore((state) => state.loading)
  const isLoading = useStateStore((state) => state.flagLoadingTrue)
  const isNotLoading = useStateStore((state) => state.flagLoadingFalse)
  const [trigger, setTrigger] = useState(false)
  const [divdata, getDivData] = useState({
    cardNumber: 0,
    cardType: "",
    createdAt: "",
    datePurchaseRequest: "",
    dep_num: 0,
    id: 0,
    poNumber: "",
    prNumber: "",
    purchaseRequestAmount: 0,
    updatedAt: ""

  })

  const onNewSearch = e => {
    setsearch_value(e.target.value)
  }

  const handleSubmit = async () => {
    isLoading()
    try {
      const axrequest = await axios.get('http://localhost:8080/PR/searchBar', { params: { data: search_value } }, { timeout: 5000 })
      getDivData({
        ...divdata,
        cardNumber: axrequest.data.cardNumber,
        cardType: axrequest.data.cardType,
        createdAt: axrequest.data.createdAt,
        datePurchaseRequest: axrequest.data.datePurchaseRequest,
        dep_num: axrequest.data.dep_num,
        id: axrequest.data.id,
        poNumber: axrequest.data.poNumber,
        prNumber: axrequest.data.prNumber,
        purchaseRequestAmount: axrequest.data.purchaseRequestAmount,
        updatedAt: axrequest.data.updatedAt
      })
      isNotLoading()
      setTrigger(true)
    } catch (err) {
      console.log("Error detected")
      isNotLoading()
    }
  }

  return (
    <>

      <div className='header_bg'>
        <div className='header_flexbox'>
          <p className='company_name'>Sherpa Inc</p>
          <div className='search_icon_div'>
            <Search></Search>
          </div>
          <div className='form_div'>
            <form>
              <input type='search' placeholder={"Search Pos, Prs, or IDs"} name="query" onChange={onNewSearch} />
              <Button variant="outlined" size='small' onClick={handleSubmit}>Primary</Button>
            </form>
          </div>
        </div>
      </div>
      {trigger ? <Popup trigger={trigger} setTrigger={setTrigger} data={divdata} /> :
        ""
      }
    </>
  )
}
