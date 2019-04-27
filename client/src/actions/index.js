import axios from "axios";
import { GET_STICKIES } from "./types";

const url = "https://mckay-stickies.herokuapp.com";

export const getStickies = id => dispatch => {
  axios
    .get(`${url}/api/stickies`)
    .then(res => {
      dispatch({
        type: GET_STICKIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
