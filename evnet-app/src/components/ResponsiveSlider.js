import React from 'react'
import Slider from "react-slick"
import EventCardSliding from './EventCardSliding';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./css/EventCardSliding.css";
import EventCardSliding1 from './EventCardSliding1';
import EventCardSliding2 from './EventCardSliding2';
import EventCardSliding4 from './EventCardSliding4';
import EventCardSliding5 from './EventCardSliding5';

export default function ResponsiveSlider() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="slider-wrapper">
        <Slider {...settings}>
            <EventCardSliding />
            <EventCardSliding1 />
            <EventCardSliding2 />
            <EventCardSliding4 />
            <EventCardSliding5 />
            <EventCardSliding />
            <EventCardSliding />
            <EventCardSliding />
        </Slider>
      </div>
    );
  }