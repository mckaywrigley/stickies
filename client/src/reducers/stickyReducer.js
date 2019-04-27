import { GET_STICKIES, CHANGE_STICKY } from "../actions/types";

const initialState = {
  stickies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STICKIES:
      return {
        ...state,
        stickies: action.payload
      };
    case CHANGE_STICKY:
      return {
        ...state
      };
    default:
      return state;
  }
}
