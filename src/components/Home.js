import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file
import ExpertGemini from "./ExpertGemini"; // Adjust the path as necessary


const Home = () => {
  return (
    <div>
      <header>
        <div className="logo">FarmPulse</div>
        <div className="welcome-message">
          Welcome back, <span id="user-name">User</span>! Here's today's farming insights.
        </div>
        <input type="text" placeholder="Search..." className="search-bar" />
      </header>

      <main>
        <section className="banner">
          <img src="banner-image.jpg" alt="Thriving Farm" className="banner-image" />
          <h1>Empowering Farmers with Smart Insights</h1>
        </section>

        <section className="features">
          <h2>Key Features</h2>
          <div className="feature-card">
            <h3>Interactive Map</h3>
            <p>Get your needs with this map</p>
            <Link to="/interactivemap" className="feature-link">Explore Map</Link>
          </div>
          <div className="feature-card">
            <h3>Market Prices</h3>
            <p>Updated crop prices at your fingertips.</p>
            <Link to="/market-prices" className="feature-link">Explore Prices</Link>
          </div>
          <div className="feature-card">
            <h3>Farming Tips</h3>
            <p>Personalized tips for better yields.</p>
            <Link to="/resources" className="feature-link">Get Tips</Link>
          </div>
          <div className="feature-card">
            <h3>Community Support</h3>
            <p>Join our community for expert advice.</p>
            <Link to="/community" className="feature-link">Join Now</Link>
          </div>
        </section>
        <section className="chatbot-section">
  <h2>Chat with Expert Gemini</h2>
  <p>Get instant answers to your farming questions and connect with experts!</p>
  <ExpertGemini />
  
</section>


        <section className="call-to-action">
          <button onClick={() => alert("Check Crop Status")}>Check Crop Status</button>
          <button onClick={() => alert("Get Weather Alerts")}>Get Weather Alerts</button>
          <button onClick={() => alert("Explore Market Trends")}>Explore Market Trends</button>
        </section>
      </main>

      <footer>
        <div className="footer-links">
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Settings</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;