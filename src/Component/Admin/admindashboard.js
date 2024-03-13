import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Plan from "./Plan";

export default function Admindashboard() {
  const [totalUser, setTotalUser] = useState();
  const [todayOrder, setTodayOrder] = useState();
  const navigate= useNavigate();

  useEffect(() => {
    const gettotalUsers = () => {
      const response = axios
        .get("http://localhost:8080/admin/total")
        .then((response) => {
          setTotalUser(response.data);
        });
    };

    const getTodayOrder = async (date) => {
      try {
        const today = new Date().toISOString().split("T")[0];

        // Make a POST request with the date parameter
        const response = await axios.get(`http://localhost:8080/admin/orders/today?date=${today}`);

        // Handle the response
        console.log("Response:", response.data);
        setTodayOrder(response.data)
        return response.data; // You can return or handle the data as needed
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
        throw error; // You can handle the error as needed
      }
    };

    gettotalUsers();
    getTodayOrder();
  }, []);

  const handleuser=()=>{
    navigate('/allusers')
  }
  const handleorder=()=>{
    navigate('/orderToday')
  }
  return (
    <>
     

      <div class="p-4 sm:ml-4">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 cursor:pointer" onClick={handleuser}>
              <p class="text-2xl text-black-400 dark:text-black-500" >
                Total users: <b>{totalUser}</b>
              </p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800" onClick={handleorder}>
              <p class="text-2xl text-black-400 dark:text-black-500">
                Todays Attendance for meal <b>{todayOrder}</b>
              </p>
            </div>
           
          </div>
        <Plan/>
        
         
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
