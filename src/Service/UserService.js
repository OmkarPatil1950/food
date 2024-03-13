import axios from "axios";

import BASE_REST_API_URL from "./ParentUrl"; // Import the base URL from the config file

export default class UserService {
  static saveUser(payload) {
    console.log("inside post of the UserService the payload is ", payload);
    return axios.post(`${BASE_REST_API_URL}/users/createUser`, payload); // Use the correct endpoint for saving the User
  }

  static getUser(email) {
    return axios.get(
      `${BASE_REST_API_URL}/users/getUserByEmail?email=${email}`
    );
  }

  static updateUser(id, payload) {
    console.log("inside put method of id ", id, "payload is", payload);
    return axios.put(`${BASE_REST_API_URL}/users/${id}`, payload);
  }

  static deleteUser(id, payload) {
    console.log("inside put method of document ", id, "payload is", payload);
    return axios.delete(`${BASE_REST_API_URL}/users/${id}`);
  }

  static getAllUser() {
    return axios.get(`${BASE_REST_API_URL}/users`);
  }

  static loginUser(payload) {
    console.log("inside put method of id ", payload);
    return axios.put(`${BASE_REST_API_URL}/users/login`, payload);
  }

  static updateTotalPoints(id, points) {
    console.log("inside put of update points", id, points);
    return axios.put(
      `${BASE_REST_API_URL}/users/${id}/decreaseTotalPoints?pointsToDecrease=${points}`
    );
  }

  
}
