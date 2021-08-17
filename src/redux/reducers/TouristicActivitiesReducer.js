import {
  GET_COUNTRIES,
  SET_ASC_DES,
  SET_ORDER,
} from "../actions/TouristicActivities";


const initialState = {
  countries: [],
  countryDetail: {},
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
