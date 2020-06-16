import * as api from "../api";

import { connectionError } from "./error";

export function fetchQueue() {
  return dispatch => {
    api
      .fetchQueue()
      .then(resp => {
        dispatch(fetchQueueSucceeded(resp.data));
      })
      .catch(error => {
        dispatch(connectionError(error));
      });
  };
}

export function postQueue(params) {
  console.log(params);
  return dispatch => {
    api
      .postQueue(params)
      .then(resp => {
        dispatch(fetchQueueSucceeded(resp.data));
      })
      .catch(error => {
        dispatch(connectionError(error));
      });
  };
}

export function fetchQueueSucceeded(data) {
  return {
    type: "FETCH_QUEUE_SUCCEEDED",
    payload: {
      queue: data
    }
  };
}
