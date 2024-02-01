import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import Right_side_bar from './components/Right_side_bar'
import Center_box from './components/Center_box'
import Left_side_bar from './components/Left_Side_Bar'
import Flexbox from './components/Flexbox';
import Header from './components/Header';


function App() {
  return (
    <>
    <Header />
    <Flexbox>
      <Left_side_bar />
      <Center_box />
      <Right_side_bar />
    </Flexbox>
    
    </>
  )
}

export default App
