import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchCriteria } from '../actions/flightActions';
import { Link } from 'react-router-dom';

const FlightSearchPage = () => {
  const dispatch = useDispatch();
  const [flightType, setFlightType] = useState('one-way');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    const criteria = { flightType, source, destination, date };
    dispatch(setSearchCriteria(criteria));
  }

  return (
    <div className="flight-search">
      <h1>Flight Search</h1>
      <select onChange={(e) => setFlightType(e.target.value)} value={flightType}>
        <option value="one-way">One-Way</option>
        <option value="round-trip">Round Trip</option>
      </select>
      <input 
        type="text" 
        placeholder="Source City" 
        value={source} 
        onChange={(e) => setSource(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Destination City" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)} 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <button onClick={handleSearch} className="book-flight">Search Flights</button>
      <Link to="/flight-booking">Proceed to Booking</Link>
    </div>
  );
}

export default FlightSearchPage;
