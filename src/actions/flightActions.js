export const SET_SEARCH_CRITERIA = 'SET_SEARCH_CRITERIA';
export const SET_BOOKING_DETAILS = 'SET_BOOKING_DETAILS';

export const setSearchCriteria = (criteria) => ({
  type: SET_SEARCH_CRITERIA,
  payload: criteria
});

export const setBookingDetails = (details) => ({
  type: SET_BOOKING_DETAILS,
  payload: details
});
