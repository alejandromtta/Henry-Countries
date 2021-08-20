import {
  GET_COUNTRIES,
  GET_COUNTRIES_ID,
  SET_ASC_DES,
  GET_ACTIVITY,
  ORDER_CONTINENT
} from "../actions/TouristicActivities";


const initialState = {
  countries: [],
  countriesName: [],
  activities: [],
  ord: null,
  asc: true,
};


function reducer(state = initialState, action) {
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
        countriesName: action.payload,
      };
    }
    case ORDER_CONTINENT: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case SET_ASC_DES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case GET_ACTIVITY: {
      return {
        ...state,
        countries: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
