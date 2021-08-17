import {
  GET_COUNTRIES,
  GET_COUNTRIES_ID,
  SET_ASC_DES,
  SET_ORDER,
} from "../actions/TouristicActivities";


const initialState = {
  countries: [],
  countryName: [],
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
    case SET_ORDER: {
      return {
        ...state,
        ord: action.payload,
      };
    }
    case SET_ASC_DES: {
      return {
        ...state,
        asc: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
