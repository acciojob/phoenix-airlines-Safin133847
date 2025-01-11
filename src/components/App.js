import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import FlightSearchPage from './FlightSearchPage';
import FlightBookingPage from './FlightBookingPage';
import ConfirmationPage from './ConfirmationPage';
import '../styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/flight-search" component={FlightSearchPage} />
          <Route path="/flight-booking" component={FlightBookingPage} />
          <Route path="/confirmation" component={ConfirmationPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
