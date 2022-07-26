import React from "react";
import "./About.css";
import Button from "@mui/material/Button";
import photo from "../Assets/about-image.png";
export default function Aboutus() {
  return (
    <React.Fragment>
      <div class="container-about">
        <div class="row justify-content-start">
          <div class="col-2-1">
            <div class="about">
              <h1 className="h1">About Us</h1>
              <p className="p1">
                InSoftLink Software is a Web Development Company was established
                in January,2019 in Noida, India. The company is specialized in
                delivering distinctive software solutions related to software
                and technological advancements. InSoftLink Software seeks to
                bring out the best in providing you with web development, mobile
                applications development, and modern approaches to digital
                marketing solutions.
              </p>
              <Button variant="contained" className="abt-btn">
                Learn More
              </Button>
            </div>
          </div>
          <div class="col-2-2">
            <img src={photo} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
