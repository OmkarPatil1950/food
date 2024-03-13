import axios from 'axios';

import BASE_REST_API_URL from './ParentUrl'; // Import the base URL from the config file

export default class MenuService {
  static saveMenu(payload) {
    console.log('inside post of the MenuService the payload is ', payload);
    return axios.post(`${BASE_REST_API_URL}/dishes`, payload); // Use the correct endpoint for saving the Menu
  }

  static getMenu(id) {
    return axios.get(`${BASE_REST_API_URL}/dishes/${id}`);
  }

  static updateMenu(id, payload) {
    console.log('inside put method of id ', id, 'payload is', payload);
    return axios.put(`${BASE_REST_API_URL}/api/doctors/addressMenuregistration/updateMenu/${id}`, payload);
  }

  static updateDocument(id, payload) {
    console.log('inside put method of document ', id, 'payload is', payload);
    return axios.put(`${BASE_REST_API_URL}/api/doctors/addressMenuregistration/${id}/update-documents`, payload);
  }

  static getAllMenu(id) {
    return axios.get(`${BASE_REST_API_URL}/dishes`);
  }
  
  static getMenuByMode(mode) {
    return axios.get(`${BASE_REST_API_URL}/dishes/byType?type=${mode}`);
  }



  
}
