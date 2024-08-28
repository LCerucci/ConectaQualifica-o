import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


const AboutPage = () => (
  <Router>
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  </Router>
);

export default AboutPage;
