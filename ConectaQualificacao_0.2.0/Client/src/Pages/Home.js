import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


const homePage = () => (
  <Router>
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  </Router>
);

export default homePage;
