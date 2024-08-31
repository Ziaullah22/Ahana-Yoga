import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import './Events.css'; // Assuming you'll add custom CSS in this file

const Events = () => {
  return (
    <div className="events-container">
      {/* Logo */}
      <center><img src="/images/logo-icon.png.webp" alt="Logo" className="classes-logo" /></center>

      {/* Heading and Paragraph */}
      <h1 className="events-heading">UPCOMING EVENTS</h1>
      <p className="events-paragraph">
        Discover the latest and most exciting events happening around you. Stay tuned for updates and make sure to mark your calendars!
      </p>

      {/* Events Row */}
      <div className="events-row">
        {/* First Column: YouTube Video */}
        <div className="events-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vgv-hzTl5FA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Second Column: Event Details */}
        <div className="events-details">
          {/* Row 1 */}
          <div className="event-row">
            <div className="event-image">
              <img src="\images\event1.jpg.webp" alt="Event Thumbnail" />
            </div>
            <div className="event-content">
              <a href="#" className="event-heading">
                Lole White Yoga
              </a>
              <p>
                <FaUser/> Kelly Alexander
              </p>
              <p>
                <FaCalendarAlt/> 15 January, 2019
              </p>
              <p>
                <FaMapMarkerAlt/> 184 Main Collins Street
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="event-row">
            <div className="event-image">
              <img src="\images\event2.jpg" alt="Event Thumbnail" />
            </div>
            <div className="event-content">
              {/* Repeat the same structure or adjust as needed */}
              <a href="#" className="event-heading">
                    Free Yoga Madrid
              </a>
              <p>
                <FaUser/> Kelly Alexander
              </p>
              <p>
                <FaCalendarAlt/> 15 January, 2019
              </p>
              <p>
                <FaMapMarkerAlt/> 184 Main Collins Street
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="event-row">
            <div className="event-image">
              <img src="\images\event3.jpg.webp" alt="Event Thumbnail" />
            </div>
            <div className="event-content">
              {/* Repeat the same structure or adjust as needed */}
              <a href="#" className="event-heading">
                 One Love Dallas
              </a>
              <p>
                <FaUser/> Kelly Alexander
              </p>
              <p>
                <FaCalendarAlt/> 15 January, 2019
              </p>
              <p>
                <FaMapMarkerAlt/> 184 Main Collins Street
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
