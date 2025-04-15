import React, { useState } from 'react';
import './Contact.css';
import { FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Only letters and spaces allowed';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (wordCount > 300) return 'Message cannot exceed 300 words';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'message') {
      const words = value.trim() === '' ? 0 : value.trim().split(/\s+/).length;
      setWordCount(words);
    }

    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (!Object.values(newErrors).some(error => error)) {
      // Form is valid, let the Formspree form submission proceed
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setWordCount(0);
      setTouched({ name: false, email: false, message: false });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left">
          <h1 className="contact-heading">
          Got ideas and want to turn them into a clean, user-friendly design?
          </h1>
          <p className="contact-subheading">
            Let's collaborate and bring your vision to life. I'm passionate about creating 
            intuitive and visually stunning user experiences.
          </p>
          
          <div className="contact-info">
            <div className="info-item">
              <MdEmail className="info-icon" />
              <span>iamrajmanisingh@gmail.com</span>
            </div>
            <div className="info-item">
              <MdLocationOn className="info-icon" />
              <span>Bihar , India</span>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rajmani-singh/" className="social-link"><FaLinkedin /></a>
            <a href="https://github.com/iamrajmani" className="social-link"><FaGithub /></a>
          </div>
        </div>
        
        <div className="contact-right">
          <form 
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xzzewyrq" 
            method="POST"
            className="contact-form"
          >
            <div className={`form-group ${touched.name && errors.name ? 'has-error' : ''}`}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                required
              />
              {touched.name && errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
            
            <div className={`form-group ${touched.email && errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                required
              />
              {touched.email && errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            
            <div className={`form-group ${touched.message && errors.message ? 'has-error' : ''}`}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                rows="5"
                required
              />
              <div className="message-counter">
                {wordCount}/300 words
                {touched.message && errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>
            </div>
            
            <button type="submit" className="submit-btn">
              <FaPaperPlane className="btn-icon" />
              Send Message
            </button>
            
            {isSubmitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
