import React , {useState} from 'react';

import "../Styles/Bhutanbiketrip.css"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PaidIcon from '@mui/icons-material/Paid';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Modalsearchbar from './Modalsearchbar';
import "bootstrap/dist/css/bootstrap.min.css";





const  Bhutanbiketrip= ()=> {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleYoutubeIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>

<div className="bbt_container">


<div className="bbt_container_upper">

<div className="bbt_container_upper_left">
  <span> <CallIcon/> Call Us  <ArrowDropDownIcon/> </span>
  <span> <EmailIcon/> Email Us   <ArrowDropDownIcon/></span>

</div>


<div className="bbt_container_upper_right">
  <span> <PaidIcon/> INR  <ArrowDropDownIcon/> </span>

</div>
<div className='hr' >
  {/* <hr />   */}
</div>
</div>

<div className="bbt_container_middle">

<div className="bbt_container_middle_left">

<p  className='bbt_headertext' >DIVER</p> 
 

</div>
<div className="bbt_container_middle_right">


  <span>  option  <ArrowDropDownIcon/> </span>
  <span>  option  <ArrowDropDownIcon/> </span>
  <span>  option  <ArrowDropDownIcon/> </span>
  <span>  option  <ArrowDropDownIcon/> </span>
   <span> <YoutubeSearchedForIcon  className='yts' onClick={handleYoutubeIconClick}  /></span>



    
    
</div>
<div className='hr2' >
  {/* <hr /> */}
</div>

</div>
<div className="bbt_container_lower">

<div className="bbt_container_lower_left">
  <h2>Bhutan Trip</h2>
  </div>

  <div className="bbt_container_lower_right">
    

  <span> <p> <AccessTimeIcon/>  7 Days</p></span>
 
  <span> <p> <LocationOnIcon/>  Bhutan</p></span>


  </div>






  <div className='btt_container_lowest underline-on-hover' >

<div className="header_options_row underline-on-hover">
  Overview
</div>
<div className="header_options_row underline-on-hover">
  Inclusion
</div>
<div className="header_options_row underline-on-hover">
  Itinerary
</div>
<div className="header_options_row underline-on-hover">
  Price
</div>
<div className="header_options_row underline-on-hover">
  FAQ
</div>


</div>


</div>


  </div>
{isModalOpen && <Modalsearchbar onClose={handleCloseModal} />}










      
    </>
  )
}


export default Bhutanbiketrip
