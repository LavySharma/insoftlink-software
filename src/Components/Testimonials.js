import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import BannerContent from './BannerContent';
import './Testimonials.css';
import Button from '@mui/material/Button';
export default function Testimonial(){
    return(
        <>
        <div class = "heading">
            <h1>Testimonials</h1>
        </div>
        <div class = "testimonial-styling">
           <Carousel autoPlay = {true} infiniteLoop = {true} interval = {1500} stopOnHover={true} transitionTime ={10} showArrows={true} showThumbs={false} >
               <div class ="T-cont">
               <BannerContent>
               
              <p style = {{color:"white"}}> The company InSoftLink Software is one of the best company delivering
                                        excellent resources and IT services. The entire team is knowledgeable,
                                        courteous and, most important, available for any assistance. We are
                                        glad to extend our highest recommendation for InSoftLink Software.</p>
               </BannerContent>
            
           </div>
           <div class ="T-cont">
               <BannerContent>
             
              <p style = {{color:"whitesmoke"}}>
                                        InSoftLink Software found to be professional, responsive, and trustworthy.
                                        They understand the client’s requirement closely even for small
                                        business applications that have budget constraints.</p>
               </BannerContent>
           </div>
           <div class ="T-cont">
               <BannerContent>
               <p style = {{color:"whitesmoke"}}>InSoftLink Software suggested creative and cost-efficient solutions for our
                                        quick needs and requirements. We are thankful to the expert and
                                        dedicated team that work hard for the successful completion and on-
                                        time of our project.</p>
               </BannerContent>
           </div>
           </Carousel>
           </div>
           <div class = "benefit">
           <div class="cta-heading">
                <h2>Benefit Your Website</h2>
            </div>

            <div class="cta-box">
        <p>
            We have successfully completed a
            wide range of projects. Working on the modern technologies we are
            continuously upgrading ourselves. At InSoftLink Software, development of
            efficient software is the core competency. Delivering the proficient work
            from the scratch so that the work would be customizable as per the
            client’s requirement is the main target. We provide 24*7 supports that
            help us to reach our client better.
        </p>
        </div>
        <Button variant="contained">Get Started</Button>
           </div>
           
           
           
           
           
           
       
       
        </>
    )
}