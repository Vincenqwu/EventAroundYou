import React from "react";
import "./css/EventCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function EventCard() {
  return (

      <div className="future-container">
        <div className="future-description">
        <FontAwesomeIcon icon="fa-regular fa-calendar-clock" />
          <p>Event Marketing, Event Venues, Event Experience</p>
        </div>
        <div className="future-title">
          <h3>3 Strategies to Get You Ready for Technical Meeting in 2023</h3>
        </div>
        <div className="future-detail">
          <span>Location</span>
          <span>·</span>
          <span>Vancouver</span>
        </div>
        <div className="future-link">
          <a href="detail">View Event Detail </a>
        </div>
        <hr/>
      </div>
      

  );
}
