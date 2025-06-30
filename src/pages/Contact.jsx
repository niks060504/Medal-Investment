import React, { useState } from 'react';
import qrCode from '../assets/whatsapp.png';
import whatsapplogo from '../assets/whatsapplogo.webp';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can process or send the data here

    // Clear the form fields
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-section text-white">
      <div className="container text-center">
        <h2 className="section-title mb-4">Contact Us</h2>
        
        <form className="contact-form mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-golden mt-2">Submit</button>
        </form>

        <div className="mt-5 contact-info">
          <h4 className="info-title">WhatsApp</h4>
          <div className="whatsapp-block d-flex align-items-center justify-content-center gap-2">
            <img src={whatsapplogo} alt="WhatsApp" className="whatsapp-icon" />
            <span className="fs-5">+91 82776 08357</span>
          </div>

          <div className="qr-container mt-4">
            <img src={qrCode} alt="WhatsApp QR Code" className="qr-code" />
          </div>

          <h4 className="info-title mt-5">Address</h4>
          <p className="address-text">#238 Old Tharagupete, Bengaluru</p>
        </div>
              <div className="container mt-5 px-3 about-item">
        <h4 className="text-golden mb-3">Disclaimer</h4>
        <p style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
        Mutual Fund investments are subject to market risks, read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes. The Mutual Fund is not guaranteeing or assuring any dividend under any of the schemes and the same is subject to the availability and adequacy of distributable surplus. Investors are requested to review the prospectus carefully and obtain expert professional advice with regard to specific legal, tax and financial implications of the investment/participation in the scheme.
        </p>
      </div>

      <style jsx="true">{`
        .hover-scale:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      </div>
    </div>
  );
};

export default Contact;
