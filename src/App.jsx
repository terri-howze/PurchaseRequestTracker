import React from 'react'
import './App.css'
import Right_side_bar from './components/Right_side_bar'
import Center_box from './components/Center_box'
import Left_side_bar from './components/Left_Side_Bar'
import Flexbox from './components/Flexbox';
import Header from './components/Header';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function App() {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Header />
    <Flexbox>
      <Left_side_bar />
      <Center_box />
      <Right_side_bar />
    </Flexbox>
    </LocalizationProvider>
    </>
  )
}

export default App
