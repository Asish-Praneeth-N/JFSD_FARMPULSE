import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <div className="community-container">
      <h1>Farming Community</h1>
      <div className="community-section">
        <h2>Discussion Forums</h2>
        <ul className="forum-list">
          <li>Sustainable Farming Practices</li>
          <li>Crop Management Techniques</li>
          <li>Agricultural Technology Innovations</li>
          <li>Market Trends and Pricing</li>
        </ul>
      </div>
      <div className="community-section">
        <h2>Upcoming Events</h2>
        <ul className="event-list">
          <li>Annual Farmers' Conference - July 15, 2023</li>
          <li>Organic Farming Workshop - August 5, 2023</li>
          <li>Agricultural Tech Expo - September 10, 2023</li>
        </ul>
      </div>
      <div className="community-section">
        <h2>Success Stories</h2>
        <div className="story-card">
          <h3>John Doe's Innovative Irrigation System</h3>
          <p>John implemented a smart irrigation system that reduced water usage by 30% while increasing crop yield...</p>
        </div>
      </div>
    </div>
  );
};

export default Community;