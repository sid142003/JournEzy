import React from 'react'
import "../Styles/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div>
        <div className='foot_container'>
            <div className='content_b'>
                <div className='c_c'>
                    <p>Cancellation Policy And T&Cs</p>
                </div>
                <div className='c_c'>
                    <p>Privacy Policy</p>
                </div>
                <div className='c_c'>
                    <p>Contact Us</p>
                </div>
                <div className='c_c'>
                    <p> Careers</p>
                </div>
                <div className='c_c'>
                    <p>Trip Payment</p>
                </div>
            </div>

            <div className='content_a'>
                <div className='c'>
                    <p>Ladakh</p>
                </div>
                <div className='c'>
                    <p>Spiti Valley</p>
                </div>
                <div className='c'>
                    <p>Maldives</p>
                </div>
                <div className='c'>
                    <p>Dubai</p>
                </div>
                <div className='c'>
                    <p>Singapore</p>
                </div>
            </div>

            <div className='icons'>
                <div className='i'><FacebookIcon/></div>
                <div className='i'><TwitterIcon/></div>
                <div className='i'><InstagramIcon/></div>
                <div className='i'><YouTubeIcon/></div>
            </div>

            <div className='foot_line'></div>

            <div className='foot_end'>
                <div><CopyrightIcon/> Journezy</div>
            </div>
        </div>
    </div>
  )
}

export default Footer