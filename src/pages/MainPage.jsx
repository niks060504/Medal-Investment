import React from 'react';
import HomePage from './Home';
import AboutUs from './About';
import ContactUs from './Contact';

const MainPage = () => {
  return (
    <div>
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default MainPage;
