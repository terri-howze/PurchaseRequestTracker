import React from 'react'
import '../css/Header.css'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useStateStore } from '../Store'
import axios from 'axios'

export default function Header() {
  const [search_value, setsearch_value] = useState("")
  const [searchdata, getData] = useState({})
  const Loading = useStateStore((state) => state.loading)
  const isLoading = useStateStore((state) => state.flagLoadingTrue)
  const isNotLoading = useStateStore((state) => state.flagLoadingFalse)

  const onNewSearch = e =>{ 
    setsearch_value(e.target.value)
  }

  const handleSubmit = async() =>{
    isLoading()
    const axrequest = await axios.get('http://localhost:8080/PR/searchBar', {params: {data: search_value}})
    getData(axrequest.data)
    isNotLoading()
    console.log(axrequest.data)
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
              <input type='search' placeholder={"Search Pos, Prs, or IDs"} name="query" onChange={onNewSearch}/>
              <Button variant="outlined" size='small' onClick={handleSubmit}>Primary</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
