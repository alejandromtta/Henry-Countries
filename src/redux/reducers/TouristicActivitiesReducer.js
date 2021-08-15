import { POST_ACTIVITY, GET_COUNTRIES } from "../actions/TouristicActivities"

const initialState = {
  countries: [],
  countryDetail: {},
  activities: [],
  ord: null,
  asc: true,
};

const activity_reducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_COUNTRIES: {
          return {
            ...state,
            countries: action.payload,
          };
      }
        default: {
          return state
        }
  }  
}