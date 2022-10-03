import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import "./css/EventCardSliding.css";
import event_pic1 from './images/event_pic3.png'

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
              <strong>SAP auf dem Logistics Summit 2022</strong>
              
            </p>
            
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

          <div className="card-description">
            <span>Location</span>
            <span> • </span>
            <span>Online</span>
          </div>
        </div>
        {/* </a> */}
      {/* </Link> */}
    </div>
    
  )
}
