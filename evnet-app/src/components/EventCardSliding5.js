import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import "./css/EventCardSliding.css";
import event_pic1 from './images/event_pic5.jpg'

import SingleQuestion from "./Question"
import { useState } from "react";
import data from "./data"

export default function EventCardSliding() {
  const [questions, setQuestions] = useState(data)
  return (
<div className="card landingpage-card">
      {/* <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/event`}
      > */}
      {/* <a href='event'> */}
        <div className="card-body">
            <img
              src={event_pic1}
              alt="pic"
              className="card-img"
            ></img>

          <div className="card-title">
            <p>
              <strong>BTP Roadshow 2022 | Modernize Business Planning</strong>
            </p>
          </div>

          <div className="card-description">
          <p><strong>SAP Location:</strong> Paris</p>
            {/* <span>
              <p>Event Details</p>
            </span>
            <span> • </span>
            <span>Advanced technologies. </span>
            <span> • </span>
            <FaStar color="#f5d24c" className="star"></FaStar> */}
          </div>

          <div className="card-description">

<span>

  <p><a href="./event">Event Details</a></p>

</span>

<span> • </span>

<span>Advanced technologies. </span>

<span> • </span>

<FaStar color="#f5d24c" className="star"></FaStar>

</div>
        </div>
        {/* </a> */}
      {/* </Link> */}
    </div>
    
  )
}
