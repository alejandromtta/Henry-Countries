import { POST_ACTIVITY } from "../actions/TouristicActivities"

const default_activity = {
    countrie:'',
    name: '',
    dificult: '',
    duration: '',
    season: ''
}

const activity_reducer = (state = default_activity, action) => {
  switch (action.type) {
      case POST_ACTIVITY: {
          return 
      }
        default: return state
  }  
}