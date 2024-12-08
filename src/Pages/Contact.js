import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry',
    newsletterEmail: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormData(formData);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', formData.newsletterEmail);
  };

  return (
    <div className="contact-page">
      <div className="contact-section">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>Any question or remarks? Just write us a message!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <p>Select Subject:</p>
            <label>
              <input
                type="radio"
                name="subject"
                value="General Inquiry"
                checked={formData.subject === "General Inquiry"}
                onChange={handleChange}
              />
              General Inquiry
            </label>
            <label>
              <input
                type="radio"
                name="subject"
                value="Technical Support"
                checked={formData.subject === "Technical Support"}
                onChange={handleChange}
              />
              Technical Support
            </label>
            <label>
              <input
                type="radio"
                name="subject"
                value="Billing Question"
                checked={formData.subject === "Billing Question"}
                onChange={handleChange}
              />
              Billing Question
            </label>
            <label>
              <input
                type="radio"
                name="subject"
                value="Other"
                checked={formData.subject === "Other"}
                onChange={handleChange}
              />
              Other
            </label>
            <textarea
              name="message"
              placeholder="Write your message."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="footer">
        <div className="footer-logo-container">
          <img 
            src={process.env.PUBLIC_URL + '/images/farmpulse.png'} 
            alt="FarmPulse Logo" 
            className="footer-logo"
          />
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h3>Reach us</h3>
            <p><i className="fas fa-phone"></i> +91 8520978972</p>
            <p><i className="fas fa-envelope"></i> nuthalapathiharshini@gmail.com</p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              K L Deemed to be University<br />
              Greenfields, Vaddeswaram, Guntur District
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About</a>
            <a href="#">Contact</a>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Services</a>
            <a href="#">Terms of Use</a>
          </div>
          
          <div className="footer-section newsletter">
            <h3>Join Our Newsletter</h3>
            <div className="newsletter-form">
              <input
                type="email"
                name="newsletterEmail"
                placeholder="Your email address"
                value={formData.newsletterEmail}
                onChange={handleChange}
              />
              <button onClick={handleNewsletterSubmit}>Subscribe</button>
            </div>
            <p className="newsletter-note">* Will send you weekly updates for your better tool management.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function sendFormData(data) {
  console.log('Form data:', data);
}

export default Contact;