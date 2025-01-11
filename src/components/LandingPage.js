import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flight-booking">
      <h1>Welcome to Phoenix Airlines</h1>
      <Link to="/flight-search">Start Your Flight Search</Link>
    </div>
  );
}

export default LandingPage;
