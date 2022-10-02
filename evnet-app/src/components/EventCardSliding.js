import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import "./css/EventCardSliding.css";
import event_pic1 from './images/event_pic1.jpg'

export default function EventCardSliding() {
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
              <strong>Event Title</strong>
            </p>
          </div>

          <div className="card-description">
            <span>
              <p>Event Detail</p>
            </span>
            <span> • </span>
            <span>111</span>
            <span> • </span>
            <FaStar color="#f5d24c" className="star"></FaStar>
          </div>

          <div className="card-description">
            <span>Location</span>
            <span> • </span>
            <span>Time</span>
          </div>
        </div>
        {/* </a> */}
      {/* </Link> */}
    </div>
  )
}
