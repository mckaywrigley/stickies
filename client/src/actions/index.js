import axios from "axios";
import { GET_STICKIES, CHANGE_STICKY } from "./types";

const url = "https://mckay-stickies.herokuapp.com";

export const getStickies = () => dispatch => {
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

export const createSticky = sticky => dispatch => {
  axios
    .post(`${url}/api/stickies`, sticky)
    .then(res => {
      dispatch({
        type: CHANGE_STICKY,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response.data.error));
};

export const updateSticky = (id, sticky) => dispatch => {
  axios
    .put(`${url}/api/stickies/${id}`, sticky)
    .then(res => {
      dispatch({
        type: CHANGE_STICKY,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response.data.error));
};

export const deleteSticky = id => dispatch => {
  axios
    .delete(`${url}/api/stickies/${id}`, id)
    .then(res => {
      dispatch({
        type: CHANGE_STICKY,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response.data.error));
};
