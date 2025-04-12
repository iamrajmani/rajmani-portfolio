import { useState } from 'react';
import { FaCalendarAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Get In Touch</h1>
      
      <div className="contact-container">
        {/* Schedule a Call Box */}
        <div className="contact-box schedule-box">
          <div className="box-header">
            <FaCalendarAlt className="box-icon" />
            <h2>Schedule a Call</h2>
          </div>
          <div className="contact-methods">
            <div className="contact-method">
              <FaPhone className="method-icon" />
              <div>
                <h3>Mobile</h3>
                <p>+91-8789333132</p>
              </div>
            </div>
            <div className="contact-method">
              <FaMapMarkerAlt className="method-icon" />
              <div>
                <h3>Location</h3>
                <p>Bihar,India</p>
              </div>
            </div>
          </div>
          <a 
            href="https://calendly.com/your-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="schedule-button"
          >
            Book a Meeting
          </a>
        </div>

        {/* Write to Me Box */}
        <div className="contact-box form-box">
          <div className="box-header">
            <FaEnvelope className="box-icon" />
            <h2>Write to Me</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;