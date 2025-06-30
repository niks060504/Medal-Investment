import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import missionImg from '../assets/mission.jpg';
import visionImg from '../assets/vision.jpg';
import founderImg from '../assets/founder.jpeg';
import faqLogo from '../assets/faq1.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
  }, []);

  return (
    <div className="section container-fluid" ref={sectionRef} style={{fontFamily: `'Playfair Display', Georgia, serif` ,background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',color: 'white',padding: '2rem'}}>
      {/* Heading */}
      <h2 className="text-golden about-item mb-4" style={{ fontSize: '3rem' }}>About Company</h2>
      <p className="about-item" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
        We are a financial distribution firm committed to making investment opportunities accessible to all. Whether you're an individual, a family, or a business, our mission is to empower you with the financial confidence needed to plan for the future and seize new opportunities.
        Through a combination of strategic solutions, in-depth market insight, and personalized planning, we tailor our approach to meet your unique goals and circumstances. We believe that financial growth should be built on a foundation of trust, transparency, and long-term relationships.
        With a client-first mind-set, we strive to simplify the complexities of investing—guiding you every step of the way so you can make informed decisions and achieve lasting success.

      </p>

      {/* Mission */}
      <div className="about-item d-flex flex-column flex-md-row align-items-center mt-5">
        <img
          src={missionImg}
          alt="Mission"
          style={{width: '220px',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid #d4af37',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',}}
          className="mb-3 mb-md-0 me-md-4"
        />
        <div>
          
          <p style={{ fontSize: '1.2rem' }}>
            To empower our clients and their families to achieve financial independence and maximize the utility
            of their wealth, enabling them to live with confidence, purpose, and peace of mind. We strive to be a
            trusted partner in every stage of life, offering clear guidance, personalized strategies, and unwavering
            support.
          </p>
        </div>
      </div>

      {/* Vision - reverse layout */}
      <div className="about-item d-flex flex-column flex-md-row align-items-center mt-5">
        <div className="order-md-2 ms-md-4 mb-3 mb-md-0">
          <img
            src={visionImg}
            alt="Vision"
            style={{ width: '220px',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid #d4af37',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)', }}
          />
        </div>
        <div className="order-md-1">
          <p style={{ fontSize: '1.2rem' }}>
            Our vision is to empower society at large to achieve financial independence through accessible,
            reliable, and personalized financial support and education.
          </p>
        </div>
      </div>

      {/* From the Founder */}
      <div className="about-item d-flex flex-column flex-md-row align-items-center mt-5">
        <img
          src={founderImg}
          alt="Founder"
          style={{
            width: '350px',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '4px solid #d4af37',
          }}
          className="mb-3 mb-md-0 me-md-4"
        />
        <div>
          <h4 className="text-golden mb-2" style={{ fontSize: '2rem' }}>From the Founder</h4>
          <p style={{ fontSize: '1.2rem' }}>
            "We believe in a better future through finance. Everyone should have the opportunity
            to understand and control their financial destiny. That belief is the heart of everything we do."
          </p>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="about-item mt-5 pt-5">
        <div className="text-center mb-4">
          <img
            src={faqLogo}
            alt="FAQ Logo"
            style={{ width: '260px', height: '200px' }}
          />
        </div>

        {/* Accordion */}
        <div className="accordion" id="faqAccordion">
        <style>
          {`
            .accordion-button {
              background-color: #2c5364;
              color: white;
            }
            .accordion-button:not(.collapsed) {
              background-color: #203a43;
              color: white;
            }
            .accordion-body {
              background-color: #1b2b36;
              color: white;
            }
          `}
        </style>
          {[
            { q: "What is a mutual fund?", a: "A mutual fund is a financial instrument that pools capital from multiple investors to invest in a diversified portfolio of securities such as equities, debt instruments, or a mix of both. These funds are professionally managed by qualified fund managers appointed by Asset Management Companies (AMCs)." },
            { q: "What is the role of a mutual fund distributor?", a: "A mutual fund distributor acts as an intermediary between investors and mutual fund companies. The distributor assists investors in selecting suitable mutual fund schemes based on their financial goals, risk tolerance, and investment horizon. Additionally, the distributor facilitates the investment process, provides regular updates, and offers ongoing service support." },
            { q: "Is it mandatory to invest through a distributor?", a: "No, it is not mandatory. Investors may choose to invest directly with AMCs or through distributors. However, investing through a qualified distributor can provide guidance, convenience, and personalized service, especially for those who are new to mutual funds or require portfolio assistance." },
            { q: "Are there any charges for investing through a distributor?", a: "Mutual fund distributors typically receive commissions from AMCs, and there are no additional charges levied on the investor for availing the distributor's services. However, distributors are required to disclose any commissions or incentives received. " },
            { q: "Is my investment safe if I invest through a distributor?", a: "Mutual fund distributors registered with the Association of Mutual Funds in India (AMFI) and possessing a valid ARN (AMFI Registration Number) operate under guidelines issued by SEBI. Investors should verify the distributor’s credentials to ensure they are dealing with an authorised professional." },
            { q: "What documents are required to invest in mutual funds?",
              a: (
                <>
                 <p>The following documents are typically required:</p>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '1.1rem' }}>
                    <li>PAN Card</li>
                    <li>Aadhaar Card (for KYC compliance)</li>
                    <li>Bank Account Details (cancelled cheque)</li>
                    <li>A completed and signed application form (physical or digital)</li>
                  </ul>
                 <p>Completion of KYC (Know Your Customer) is mandatory prior to investing.</p>
                </>
                 )
             },
             { q: "How can I track my mutual fund investments?", a: "Investors may track their investments through our client facing app." },
          ].map((item, index) => (
            <div className="accordion-item mb-3" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  <strong>{item.q}</strong>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body" style={{ fontWeight: 'normal', fontSize: '1.1rem' }}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
