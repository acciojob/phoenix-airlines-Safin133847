import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookingDetails } from '../actions/flightActions';

const FlightBookingPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleBooking = () => {
    const details = { name, email, contact };
    dispatch(setBookingDetails(details));
  }

  return (
    <div className="book-flight">
      <h1>Flight Booking</h1>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Contact Number" 
        value={contact} 
        onChange={(e) => setContact(e.target.value)} 
      />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}

export default FlightBookingPage;
