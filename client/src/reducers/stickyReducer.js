import { GET_STICKIES } from "../actions/types";

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
    default:
      return state;
  }
}
