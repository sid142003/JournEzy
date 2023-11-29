import React from 'react'
import "../Styles/PickupPoint.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';

function PickupPoint() {
  return (
    <div className='Pickup_mainDiv'>
         <div className='Pick_head'>
                <h1>Pickup Point</h1>
            </div>
            <div className='pick_container'>
                <p> <LocationOnIcon style={{fill:"red"}}/>Bagdogra Airport, Siliguri, West Bengal, India</p>

            </div>
    </div>
  )
}

export default PickupPoint