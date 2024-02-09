import React from 'react'
import '../css/Header.css'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'

export default function Header() {
  const [search_value, setsearch_value] = ""

  const onNewSearch = e =>{
    setsearch_value(e.target.value)
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
              <Button variant="outlined" size='small'>Primary</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
