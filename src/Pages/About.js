import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About FarmPulse</h1>
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>FarmPulse is dedicated to raising awareness about the importance of farming and providing valuable resources to support farmers. We aim to bridge the gap between agricultural communities and various sectors, fostering sustainable practices and enhancing farmers' livelihoods.</p>
      </div>
      <div className="about-section">
        <h2>What We Do</h2>
        <ul>
          <li>Provide educational resources on sustainable farming practices</li>
          <li>Connect farmers with experts and industry professionals</li>
          <li>Offer a platform for community engagement and knowledge sharing</li>
          <li>Promote innovative agricultural technologies and techniques</li>
          <li>Support farmers in accessing financial resources and market opportunities</li>
        </ul>
      </div>
      <div className="about-section">
        <h2>Our Team</h2>
        <p>FarmPulse is powered by a diverse team of agricultural experts, technology specialists, and passionate individuals committed to supporting the farming community. Together, we work towards creating a more sustainable and prosperous future for agriculture.</p>
      </div>
    </div>
  );
};

export default About;