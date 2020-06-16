import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export function fetchQueue() {
  return client.get("/rest/queue");
}

export function postQueue(params) {
  return client.post("/rest/queue", params);
}
