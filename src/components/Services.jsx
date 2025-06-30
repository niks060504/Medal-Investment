import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Financial from '../assets/Financial.png';
import sip from '../assets/alternate.png';
import alternate from '../assets/alternate1.png';
import point1 from '../assets/point1.png';
import point2 from '../assets/point2.jpg';
import point3 from '../assets/point3.jpg';
import point4 from '../assets/point4.jpg';

import partner1 from '../assets/icici.jpg';
import partner2 from '../assets/hdfc.jpg';
import partner3 from '../assets/nippon.jpg';
import partner4 from '../assets/paragparikh.jpeg';
import partner5 from '../assets/sbi.jpg';
import partner6 from '../assets/kotak.jpg';
import partner7 from '../assets/franklin.jpg';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { src: partner1, name: '' },
  { src: partner2, name: '' },
  { src: partner3, name: '' },
  { src: partner4, name: '' },
  { src: partner5, name: '' },
  { src: partner6, name: '' },
  { src: partner7, name: '' },
];

const financialPoints = [
  {
    text: 'Our objective is to firstly understand your financial spending, financial portfolio, family background. Get a full picture of what the current situation is. Then we look into what you want to financially plan for.',
    image: point1,
  },
  {
    text: 'Don’t let uncertainty dictate how your family deals with losing an earning family. Plan accordingly to set them up for a stable income monthly even when you are not around to guide.',
    image: point2,
  },
  {
    text: 'Your business is very important to us. What we can help you do is plan out your cash flow spends, where banks don’t provide interest on the hard money you hold with them, we provide solutions for you to plan your short term cash flow spends and let your capitol earn interest and dispense it at your discretion.',
    image: point3,
  },
  {
    text: 'We plan your long term capex spends where you can secure your capitol, plan your seasonal inventory purchases or for machinery for your manufacturing expansion. We help you set aside capitol and deploy on your command.',
    image: point4,
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.about-item');

    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Partner logo scroll animation
    gsap.to('.partner-scroll', {
      xPercent: -50,
      duration: 30,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <div
  className="section text-center"
  ref={sectionRef}
  style={{
    fontFamily: "'Playfair Display', Georgia, serif",
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    color: 'white',
    padding: '60px 20px',
  }}
   >

      <h2 className="text-golden mb-4 about-item" style={{ fontSize: '3rem' }}>Our Services</h2>

      <div className="d-flex justify-content-around flex-wrap mb-5">
        {[{ img: Financial, label: 'Financial Planning' },
          { img: sip, label: 'SIP/SWP Planning' },
          { img: alternate, label: 'Alternate Investments' }
        ].map((item, idx) => (
          <div
            key={idx}
            className="about-item text-center mx-3 mb-4"
          >
            <img
              src={item.img}
              alt={item.label}
              width="160"
              height="160"
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
                border: '4px solid #d4af37',
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
              }}
              className="hover-scale"
            />
            <p className="mt-2 fw-bold">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="container mt-5">
        {financialPoints.map((point, idx) => (
          <div
            key={idx}
            className={`about-item d-flex flex-column flex-md-row ${idx % 2 !== 0 ? 'flex-md-row-reverse' : ''} align-items-center mb-5`}
          >
            <div className="col-md-6 text-start px-3">
              <p style={{ fontSize: '1.15rem', lineHeight: '1.85' }}>{point.text}</p>
            </div>
            <div className="col-md-6 px-3 text-center">
              <img
                src={point.image}
                alt={`Point ${idx + 1}`}
                style={{
                  width: '220px',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid #d4af37',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
                className="hover-scale"
              />
            </div>
          </div>
        ))}
      </div>
            <hr className="my-4" />
      <h4 className="text-golden mb-3 about-item">Empanelled Partners</h4>

      <div className="partner-scroll-wrapper overflow-hidden py-3 about-item">
        <div className="partner-scroll d-flex" style={{ width: 'max-content', gap: '4rem' }}>
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="text-center">
              <img
                src={partner.src}
                alt={partner.name}
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid #d4af37',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              />
              <p className="mt-2">{partner.name}</p>
            </div>
          ))}
        </div>
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
  );
};

export default Services;
