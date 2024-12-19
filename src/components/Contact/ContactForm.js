import React, { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';
import call from '../../assets/images/icon-call.svg';
import mail from '../../assets/images/icon-mail.svg';
import location from '../../assets/images/icon-location.svg';

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',    // Changed from 'name'
    user_email: '',   // Changed from 'email'
    subject: '',
    message: ''
  });

  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        'service_klv989f',
        'template_186o0w4',
        form.current,
        'McE5fdlk4dWFppEQ9'
      )
      .then(
        (result) => {
          // Show success message
          setNotification({
            show: true,
            type: 'success',
            message: 'Message sent successfully!'
          });

          // Reset form
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
          });

          // Hide notification after 5 seconds
          setTimeout(() => {
            setNotification({ show: false, type: '', message: '' });
          }, 5000);
        },
        (error) => {
          // Show error message
          setNotification({
            show: true,
            type: 'error',
            message: 'Failed to send message. Please try again.'
          });

          // Hide notification after 5 seconds
          setTimeout(() => {
            setNotification({ show: false, type: '', message: '' });
          }, 5000);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      {/* Add notification display */}
      {notification.show && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      <div className="contact-content">
        <div className="contact-info">
          <h1>Find out how we can help you.</h1>
          <p className='contact-info-p'>Get in touch with one of our experts to get your question answered. We are ready to answer your message.</p>
          <div className="info-item">
            <div className="icon">
              <img src={call} alt="call"/>
            </div>
            <div className="info-details">
              <p>+00000000000</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <img src={mail} alt="mail"/>
            </div>
            <div className="info-details">
              <p>info@celestialempire.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <img src={location} alt="location"/>
            </div>
            <div className="info-details">
              <p>221B Baker Street, Marylebone, London, W1U 6RY, United Kingdom</p> 
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="user_name" // Changed to match EmailJS template variable
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="user_email" // Changed to match EmailJS template variable
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;