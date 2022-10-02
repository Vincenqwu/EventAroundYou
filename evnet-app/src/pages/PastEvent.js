import React from 'react'
import EventCard from '../components/EventCard';
import Filter from '../components/Filter';
import Page from '../components/Page';


export default function PastEvent() {
  return (
    <div className="landing-page" id="Home-Page">
      <div id="home">
        <div className="landing-text"></div>
      </div>

      <main className="future-main-container">
        <div className="future-header">
          <h1>Passed Events</h1>
        </div>
        <div>
          <Filter />
        </div>
        <div>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </main>
      <div className="pagination-container">
      <div className="pagination-child"><Page/></div>
      
      </div>

    </div>
  );
}
