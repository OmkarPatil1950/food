import React, { Component } from "react";
import BASE_REST_API_URL from "./ParentUrl";
import axios from "axios";
export default class OrderService {
  static orderDetails(item) {
    console.log("inside post of order details ", item);
    return axios.post(`${BASE_REST_API_URL}/orders/create-with-items`, item);
  }

  static AddOrder(item) {
    console.log("inside post of order details ", item);
    return axios.post(`${BASE_REST_API_URL}/orders/AddOrder`, item);
  }


  static getorderDetails(user_id) {
    console.log("inside get of order details ", user_id);
    return axios.get(`${BASE_REST_API_URL}/orders/orders?userId=${user_id}`);
  }


  static getorderbyDate(date) {
    console.log("inside get of order details ", date);
    return axios.get(`${BASE_REST_API_URL}/orders/by-date?date=${date}`);
  }
}
