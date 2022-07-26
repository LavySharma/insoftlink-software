import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import BannerContent from "./BannerContent";

export default function Banner() {
  return (
    <React.Fragment>
      <div class="carousel-styling">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={1500}
          stopOnHover={true}
          transitionTime={10}
          showArrows={true}
          showThumbs={false}
        >
          <BannerContent>
            <h1>Innovation Design and Development</h1>
            <p class="para">
              InSoftLink Software is continuously growing by expanding our
              approaches for software design and development with the adaption
              of new technologies. Working within the timeframe under the expert
              guidance, the development is done in a cost- effective manner
              which helps us to grow and expand exponentially.
            </p>
          </BannerContent>

          <BannerContent>
            <h1> Mobile App Development</h1>
            <p class="para">
              InSoftLink Software holds the expertise for creating the
              functional, reliable, interactive and creative IOS and Android
              applications. Our team of best developers works efficiently by
              understanding the client’s requirements closely, putting their
              comprehensive technical knowledge to build out the efficient
              Mobile App applications.
            </p>
          </BannerContent>

          <BannerContent>
            <h1>Software Development</h1>
            <p class="para">
              If you are looking for the prominent software development
              companies, then InSoftLink Software can serve you the best. The
              software development process consists of a wide range of processes
              that need to be carried out with several approaches
            </p>
          </BannerContent>
        </Carousel>
      </div>
    </React.Fragment>
  );
}
