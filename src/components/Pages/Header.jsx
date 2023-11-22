import React from "react";
import "../Styles/Header.css";
import Logo from "../../assets/logo.png";
const Header = () => { 
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="hi" />
                
            </div>
           
            <div className="center-content">
                <div className="search-text">
                    <a href="#">Apply Visa </a>
                </div>
                <div className="departure-text search-text ">
                    <a href="#" >Explore</a>
                </div>
                <div className="destination-text search-text">
                    <a href="#">About Us</a>
                </div>
            

               
                 <div className="login">
                    <button className="login-button">Login</button>
                   
                </div>
                
            {/* <Cardto/> */}
            </div>
        </div>
    );
};

export default Header;
