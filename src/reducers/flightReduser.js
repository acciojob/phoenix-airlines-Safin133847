import { SET_SEARCH_CRITERIA, SET_BOOKING_DETAILS } from '../actions/flightActions';

const initialState = {
  searchCriteria: {},
  bookingDetails: {}
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_CRITERIA:
      return { ...state, searchCriteria: action.payload };
    case SET_BOOKING_DETAILS:
      return { ...state, bookingDetails: action.payload };
    default:
      return state;
  }
};

export default flightReducer;

