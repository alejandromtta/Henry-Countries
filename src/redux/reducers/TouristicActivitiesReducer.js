import { POST_ACTIVITY, GET_COUNTRIES, GET_COUNTRIES_ID } from "../actions/TouristicActivities"

const initialState = {
  countries: [],
  countryDetail: {},
  activities: [],
  ord: null,
  asc: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_COUNTRIES: {
          return {
            ...state,
            countries: action.payload,
          };
      }
      case GET_COUNTRIES_ID: {
          return {
            ...state,
            countryDetail: action.payload
          }
      }
        default: {
          return state
        }
  }  
}

export default reducer;