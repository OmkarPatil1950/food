import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from './images/fruits_vegetables.png'

const CarouselComponent = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
    >
      <a href="/">
        <div>
          <img src={image} alt="Carousel Image 3" />
        </div>
      </a>
      <a href="/">
        <div>
          <img
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            alt="Carous el Image 1"
          />
        </div>
      </a>

      <a href="/">
        <div>
          <img
            src="https://www.foodapp.in/images/opportuneFullWidth/01_opportune.jpg"
            alt="Carousel Image 2"
          />
        </div>
      </a>
      <a href="/">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2crUu4J2JWafAtVXJEVF4_UkEo26wT0fWA&usqp=CAU"
            alt="Carousel Image 3"
          />
        </div>
      </a>
    </Carousel>
  );
};

export default CarouselComponent;
