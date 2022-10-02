import React from 'react'
import Greeting from "../components/Greeting";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./css/home.css";
import ResponsiveSlider from '../components/ResponsiveSlider';

export default function Home() {
  return (
    <div className="landing-page" id="Home-Page">
    <div id="home">
      <div className="landing-text">
        <Greeting />
      </div>
    </div>

    <main className="main-container">
      <div className="section-container localFavorite">
        <div className="section-header-container">
          <div className="section-header-content">
            <h1>Most Favorite Event Recently</h1>
            {/* <Link className="section-header-link" to="/trails/map"> */}
              <strong>view all</strong>
              <FaArrowCircleRight className="section-header-icon"></FaArrowCircleRight>
            {/* </Link> */}
          </div>
        </div>

        {/* <ResponsiveSlider list={trails}></ResponsiveSlider> */}
        {/* <EventCardSliding></EventCardSliding>
        <EventCardSliding></EventCardSliding>
        <EventCardSliding></EventCardSliding>
        <EventCardSliding></EventCardSliding> */}

        <ResponsiveSlider></ResponsiveSlider>
      </div>

      

    </main>
  </div>
  )
}
