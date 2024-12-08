import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>Farming Resources</h1>
      <div className="resource-section">
        <h2>Educational Materials</h2>
        <ul className="resource-list">
          <li>
            <h3>Sustainable Farming Guide</h3>
            <p>Learn about eco-friendly farming practices and their benefits.</p>
          </li>
          <li>
            <h3>Crop Rotation Techniques</h3>
            <p>Maximize your yield with effective crop rotation strategies.</p>
          </li>
        </ul>
      </div>
      <div className="resource-section">
        <h2>Tools and Technology</h2>
        <ul className="resource-list">
          <li>
            <h3>Smart Irrigation Systems</h3>
            <p>Explore water-saving technologies for efficient irrigation.</p>
          </li>
          <li>
            <h3>Precision Agriculture Software</h3>
            <p>Discover tools for data-driven farming decisions.</p>
          </li>
        </ul>
      </div>
      <div className="resource-section">
        <h2>Financial Resources</h2>
        <ul className="resource-list">
          <li>
            <h3>Agricultural Grants</h3>
            <p>Find information on available grants for farmers.</p>
          </li>
          <li>
            <h3>Farm Loan Programs</h3>
            <p>Learn about low-interest loans for farm improvements.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;