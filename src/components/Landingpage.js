// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <div className="overlay"></div>
        <div className="content">
          <h1>"Cultivating a Sustainable Future"</h1>
          <Link to="/signup">
            <button className="btn">Get Started</button>
          </Link>
          <p className="quote">
            The foundation of civilization is agriculture. Let's sustain the roots that nourish our world.
          </p>
        </div>
      </div>

      <div className="section light">
        <h2>Empowering Farmers, Educating the World</h2>
        <div className="cards">
          <div className="card">
            <img src="https://storage.googleapis.com/a1aa/image/TOTOJdosD36QHxsiMUPDD1XltFXIFgxtr0AvRQieh7kZtE4JA.jpg" alt="Farmer Resources" />
            <h3>Farmer Resources</h3>
            <p>Access a wealth of knowledge and tools to enhance your farming practices.</p>
          </div>
          <div className="card">
            <img src="https://storage.googleapis.com/a1aa/image/JrJKvCGqaGoxGJzEFfXCkNZgHpwlrJEyftnnSGfEfQtDrlAPB.jpg" alt="Community Engagement" />
            <h3>Community Engagement</h3>
            <p>Join a community of like-minded individuals dedicated to sustainable farming.</p>
          </div>
          <div className="card">
            <img src="https://storage.googleapis.com/a1aa/image/EP3IeYpI7UQlCqcRO8HbmeeeXS4FqKG9jXr0KJnQqL4pqlAPB.jpg" alt="Expert Guidance" />
            <h3>Expert Guidance</h3>
            <p>Receive advice and support from industry experts to improve your yield.</p>
          </div>
        </div>
      </div>

      <div className="section dark">
        <h2>Transforming Lives with Sustainable Farming</h2>
        <p>Hear real stories from farmers who improved their livelihoods through FarmPulse initiatives.</p>
        <img src="https://storage.googleapis.com/a1aa/image/cv4c01QptG6WN5G2m9Jltqq6eFTE5kUTz6Vh1DdGwhbZtE4JA.jpg" alt="Farmer on a tractor" />
      </div>

      <div className="footer">
        <h2>Why FarmPulse?</h2>
        <div className="features">
          <div className="feature">
            <img src="https://storage.googleapis.com/a1aa/image/fG4KQvJdqw23YSqOibpxwZtaeK9fj0U0fiqTmeeXg74brWC8E.jpg" alt="Community-Driven" />
            <h3>Community-Driven</h3>
            <p>FarmPulse connects farmers with expert guidance, sustainable practices, and valuable industry opportunities.</p>
          </div>
          <div className="feature">
            <img src="https://storage.googleapis.com/a1aa/image/xxmDDy2bL6b8AhatlTT2DKZAzdPWd5Wh8h2KU5iRidUqWC8E.jpg" alt="Comprehensive Resources" />
            <h3>Comprehensive Resources</h3>
            <p>Empowering them to grow efficiently in a collaborative community.</p>
          </div>
          <div className="feature">
            <img src="https://storage.googleapis.com/a1aa/image/o33eAAA6DXQWEyhHD6YQerF7l3TsYcmclVOLOLxfSARX1SgnA.jpg" alt="Expert Support" />
            <h3>Expert Support</h3>
            <p>Expert support to help farmers achieve their goals.</p>
          </div>
          <div className="feature">
            <img src="https://storage.googleapis.com/a1aa/image/8DBZnjaXheTNAq7EkbdaaTPYwyaIK7gZ6fie3eYI00xSrlAPB.jpg" alt="Sustainability Focused" />
            <h3>Sustainability Focused</h3>
            <p>Focused on sustainable farming practices.</p>
          </div>
          <div className="feature">
            <img src="https://storage.googleapis.com/a1aa/image/ioeIodPeM9pTI0VckCf8jy8SQ6LfM2RnRsre9RvhzeQfXtE4JA.jpg" alt="Sector Integration" />
            <h3>Sector Integration</h3>
            <p>Integrating various sectors to provide comprehensive support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
