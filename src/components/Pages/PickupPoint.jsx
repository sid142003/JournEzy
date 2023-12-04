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
                <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d114075.420247483!2d88.2431047197982!3d26.68505932414187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d26.6849933!2d88.3254219!5e0!3m2!1sen!2sin!4v1701718237407!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Map'></iframe>
            </div>
    </div>
  )
}

export default PickupPoint