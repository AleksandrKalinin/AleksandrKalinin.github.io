import _ from "lodash";
import { FETCH_WEATHER, DEFAULT_WEATHER} from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  
    case DEFAULT_WEATHER:
      return [action.payload.data, ...state];
  
  }    
  return state;
}
