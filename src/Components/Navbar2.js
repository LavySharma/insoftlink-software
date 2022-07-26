import React from 'react';
import Button from '@mui/material/Button';


import './Navbar2.css';

export default function Navbar(){

    return(
       <nav >
           
            <div class="topnav">
                <div class = "nav-cont">
                 <a href="#home" class = "active">Home</a>
                 <a href="#news">About us</a>
                <a href="#contact">Services</a>
                 <a href="#about">Portfolio</a>
                 <Button variant="text" class="btn">Contact Us</Button>
                </div>
                </div>
            
        </nav>
       
    );
}


