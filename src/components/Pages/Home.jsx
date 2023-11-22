import  React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Pages/Header';
import Select from 'react-select';
import { FaWhatsapp  } from 'react-icons/fa';
import "../Styles/Home.css"
import bgvedio from "../../assets/bg_video.mp4"
import CardSlider from '../Pages/CardSlider';
import CardSlider2 from '../Pages/CardSlider2';
import CardSlider3 from '../Pages/CardSlider3';
import CardSlider4 from '../Pages/CardSlider4';
// import UpcomingTrips from '../Pages/upcomingTrips';



const Home = () => {
	const countryOptions = [
		{ value: 'dubai', label: 'Dubai' },
		{ value: 'usa', label: 'USA' },
		{ value: 'uk', label: 'UK' },
		{ value: 'malaysia', label: 'Malaysia' },
	  ];
	  const customStyles = {
		control: (styles) => ({
		  ...styles,
		  width: '40rem', // Adjust the width as needed
		  backgroundColor: 'white',
		  height: '3rem',
		  borderRadius: '25px',
		  border: '1px solid #ccc',
		  boxShadow: 'none',
		}),
		option: (styles, { isFocused }) => ({
		  ...styles,
		  backgroundColor: isFocused ? 'grey' : 'white',
		  color: isFocused ? 'white' : 'black',
		}),
	  };
	  const openWhatsApp = () => {
		window.open('https://wa.me/9310159640'); // Replace with your WhatsApp number
	  };
	return (
		<div className="home">
<div className="video-background">
      <video autoPlay loop muted className="video-background">
        <source src={bgvedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
			<Header/>
			<div className="body-content">
       
			<div className="body-content-left">
				<p className='bd_h'>Apply for Visa</p>
				<div className='mq'>
          	<marquee direction = "up" height="100px"><h1>Travelling To</h1> <br /> <h2>somewhere</h2></marquee>
				</div>
		  
          <div className="country-dropdown">
            <Select options={countryOptions} styles={customStyles} placeholder="Select Country"/>
          </div>
        </div>
  
		<div class="section__intro__footer">
      <div class="stats-item">
        <span class="stats-item__logo icon-intro-slider-tours"></span>
        <div class="stats-item__details">
          <div class="stats-item__details__title">24,000+</div>
          <div class="stats-item__details__caption">Travel Experiences</div>
        </div>
      </div>
      <div class="stats-item">
        <span class="stats-item__logo icon-globe"></span>
        <div class="stats-item__details">
          <div class="stats-item__details__title">55+</div>
          <div class="stats-item__details__caption">Countries</div>
        </div>
      </div>
      <div class="stats-item">
        <span class="stats-item__logo icon-savings"></span>
        <div class="stats-item__details">
          <div class="stats-item__details__title">Best Price</div>
          <div class="stats-item__details__caption">Guaranteed</div>
        </div>
      </div>
      <div class="stats-item">
        <span class="stats-item__logo icon-group"></span>
        <div class="stats-item__details">
          <div class="stats-item__details__title">84 Million+</div>
          <div class="stats-item__details__caption">Users Per Year</div>
        </div>
      </div>
    </div>
       
	<div className='cs'>
	  <CardSlider3 />
	  <CardSlider2 />
	
	  <CardSlider />
	</div>

        {/* <TestimonialSlider />
        <SContainer /> */}
        <div className="whatsapp-button" onClick={openWhatsApp}>
        <FaWhatsapp size={32} />
       
        </div>
      </div>
	  
	  </div>
	)
}

export default Home
