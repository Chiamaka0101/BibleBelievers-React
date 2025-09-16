import React from 'react';
import './ActivitiesContent.css';
import Pray from "../Assets/Praying.jpg"
import Worship from "../Assets/worship.jpg"
import Church from "../Assets/church.jpeg"


const ActivitiesComponent = () => {
  return (
    <div className="weekly-container">
      <h2>Weekly Activities</h2>
      <div className="activities">
        <div className="activity-card">
          <img src={Worship} alt="worship" className="banner" />
          <h3>Sunday Service</h3>
          <p>Worship with us every Sunday at 10:00 AM</p>
        </div>

        <div className="activity-card">
          <img src={Pray} alt="prayer" className="banner" />
          <h3>Friday Prayer Meetings</h3>
          <p>Join our prayer session every Friday at 10:00 PM </p>
        </div>

        <div className="activity-card">
          <img src={Church} alt="prayer" className="banner" />
          <h3>Bi-annual Conventions</h3>
          <p>Join our prayer session every Friday at 6:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesComponent;


