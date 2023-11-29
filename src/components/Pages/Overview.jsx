
import React from 'react';
import "../Styles/Overview.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Overview = () => {
  return (
    <div>
      <div id="overview" class="section tour-description-section">
      <div class="section-title">
            <div class="over_heading">
                Overview
            </div>
    </div>

      <div class="content">
        <h2>About Bhutan Bike Trip:</h2>

        <p>The Bike trip to Bhutan starts at <strong>Siliguri</strong> and continues to Bhutan going through <strong>Phuentsholing,&nbsp;Thimpu, Punakha, Paro&nbsp;</strong>and concludes again back in Siliguri. Located at the eastern edge of the Himalayas, Bhutan is known not only for its dramatic landscapes that range from subtropical plains to steep mountains and valleys but also for its monasteries and fortresses (or Dzongs). It has a culture that is very unique and different from that of its&nbsp;neighboring&nbsp;countries. The traditions&nbsp;practiced&nbsp;here are preserved and inculcates the teachings of the Vajrayana Buddhist tradition which is maintained throughout and has a strong impact on the lives of the people. Bhutan is famous for being the happiest country as&nbsp;emphasis&nbsp;is given towards a more holistic approach. This is a Buddhist kingdom and has visitors coming in from all over the world every year to explore the last “Shangrila”. With a majority of the country covered mainly in&nbsp;mountains, the roads here go through varying altitudes making it a biker’s paradise. On a<strong>&nbsp;</strong>Bhutan Bike Trip, discover the unique beauty of this country for yourself while going through these roads and finding out more about the Buddhist culture&nbsp;practiced&nbsp;here. Visit a number of places like the city of Phuentsholing where you will notice how this country is significantly different from the others, various monasteries and also visit the world’s biggest &nbsp;Buddhist statues and many more beautiful locations, all this while riding through roads with views of the beautiful mountains and valleys.</p>

        <p>Bhutan, a Buddhist kingdom on the Himalayas’ eastern edge, is known for its monasteries, fortresses (or dzongs) and dramatic landscapes that range from subtropical plains to steep mountains and valleys.&nbsp;</p>

        <p>We present an amazing Bike Tour which includes:</p>

        <ul>
    <li>Royal Enfield 350CC Bikes</li>
	<li>Fuel along the way</li>
	<li>2 Meals Daily</li>
	<li>Top Quality Accommodation</li>
	<li>All permit charges, tour guides and back up vehicles.</li>
    </ul><p>Visit the beautiful Paro Taktsang Monastery which is also known as Tiger's Nest which clings to cliffs above the Paro Valley.</p>
      </div>
      <div className='line'></div>
      <div class="trip-line-items">
        <span class="line-item trip-duration">
            <span className='time'><AccessTimeIcon  style={{fill:"red"}}/> </span> 
            6 Nights 7 Days</span>

          <span class="line-item trip-availability"> <CalendarMonthIcon style={{fill:"red"}}/>07 Dec, 14 Dec, 21 Dec, and more</span>

          <span class="line-item trip-location"><LocationOnIcon style={{fill:"red"}}/>Siliguri, West Bengal</span>
      </div>
      <div className='line'></div>
    </div>
    </div>
  );
};

export default Overview;
