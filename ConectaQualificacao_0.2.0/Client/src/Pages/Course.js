import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


const CoursePage = () => (
  <Router>
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  </Router>
);

export default CoursePage;
