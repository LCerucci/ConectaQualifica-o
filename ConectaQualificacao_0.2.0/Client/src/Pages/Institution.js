import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


const InstitutionPage = () => (
  <Router>
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  </Router>
);

export default InstitutionPage;
