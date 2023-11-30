import React from 'react'
import "../Styles/InEx.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function InEx() {
  return (
    <>
    <div className='In_mainDiv'>
        <div className='In_head'>
            <h1>Inclusions/Exclusions</h1>
        </div>
        <div className='In_container'>
            <div className='contain_left'>
                <p className='te'>What is included in the tour</p>
                <div className='In_list'>
                    
                        <ul><CheckCircleIcon style={{fill:"green"}}/>Sightseeing and Excursions as per the itinerary</ul>
                        <ul><CheckCircleIcon style={{fill:"green"}}/>Sightseeing and Excursions as per the itinerary</ul>

                        <ul><CheckCircleIcon style={{fill:"green"}}/>Sightseeing and Excursions as per the itinerary</ul>
                        <ul><CheckCircleIcon style={{fill:"green"}}/>Sightseeing and Excursions as per the itinerary</ul>

                        <ul><CheckCircleIcon style={{fill:"green"}}/>Sightseeing and Excursions as per the itinerary</ul>
                        <ul><CheckCircleIcon style={{fill:"green"}}/>Sightseeing and Excursions as per the itinerary</ul>
                    
                </div>
            </div>
            <div className='contain_right'>
                <p className='te'>What is NOT included not in the tour</p>
                <div className='In_list'>
                    
                        <ul><RemoveCircleIcon style={{fill:"red"}}/> Sightseeing and Excursions as per the itinerary</ul>
                        <ul><RemoveCircleIcon style={{fill:"red"}}/>Sightseeing and Excursions as per the itinerary</ul>

                        <ul><RemoveCircleIcon style={{fill:"red"}}/>Sightseeing and Excursions as per the itinerary</ul>
                        <ul><RemoveCircleIcon style={{fill:"red"}}/>Sightseeing and Excursions as per the itinerary</ul>

                        <ul><RemoveCircleIcon style={{fill:"red"}}/>Sightseeing and Excursions as per the itinerary</ul>
                        <ul><RemoveCircleIcon style={{fill:"red"}}/>Sightseeing and Excursions as per the itinerary</ul>

                  </div>      
            </div>
        </div>
    </div>
    </>
  )
}

export default InEx