import axios from "axios";

import BASE_REST_API_URL from "./ParentUrl"; // Import the base URL from the config file

export default class planService {
  static savePlan(payload) {
    console.log("inside post of the UserService the payload is ", payload);
    return axios.post(`${BASE_REST_API_URL}/users/createUser`, payload); // Use the correct endpoint for saving the User
  }

  //   static getUser(email) {
  //     return axios.get(`${BASE_REST_API_URL}/users/getUserByEmail?email=${email}`);
  //   }

  static updateUserPlan(
    userId,
    newPlanId,
    selectedDate,
    endDate,
    points,
    total_points
  ) {
    console.log(
      "inside put method of id ",
      userId,
      "payload is",
      newPlanId,
      selectedDate,
      endDate,points
    );
    return axios.put(
      `${BASE_REST_API_URL}/users/updatePlanId/${userId}?newPlanId=${newPlanId}&selectedDate=${selectedDate}&endDate=${endDate}&points=${points}&total_points=${points*30}`
    );
  }

  //   static deleteUser(id, payload) {
  //     console.log("inside put method of document ", id, "payload is", payload);
  //     return axios.delete(`${BASE_REST_API_URL}/users/${id}`);
  //   }

  static getAllPlan() {
    return axios.get(`${BASE_REST_API_URL}/plans`);
  }

  static planByplanId(planId) {
    console.log("inside put method of id ", planId);
    return axios.get(`${BASE_REST_API_URL}/plans/${planId}`);
  }
}
