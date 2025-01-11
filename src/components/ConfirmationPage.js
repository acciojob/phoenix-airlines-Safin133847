import React from 'react';
import { useSelector } from 'react-redux';

const ConfirmationPage = () => {
  const { searchCriteria, bookingDetails } = useSelector(state => state.flight);

  return (
    <div className="confirmation">
      <h1>Booking Confirmation</h1>
      <p>Your flight from {searchCriteria.source} to {searchCriteria.destination} on {searchCriteria.date} has been booked successfully.</p>
      <p>Booking Details:</p>
      <p>Name: {bookingDetails.name}</p>
      <p>Email: {bookingDetails.email}</p>
      <p>Contact: {bookingDetails.contact}</p>
    </div>
  );
}

export default ConfirmationPage;
