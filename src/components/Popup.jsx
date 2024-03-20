import React from 'react'
import '../css/Popup.css'

export default function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'></div>
            <button className='close-btn'></button>
    </div>
  ): "";
}
