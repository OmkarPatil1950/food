import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import planService from "../../Service/planService";
import axios from "axios";

export default function Plan() {
  const [plan, setPlan] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    planService.getAllPlan().then((response) => {
      const statusCode = response.status;
      if (statusCode >= 200 && statusCode < 205) {
        setPlan(response.data);
      } else {
        console.error(`Request failed with status code ${statusCode}`);
      }
    });
  }, []);

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const handlePlan = () => {
    navigate("/addplan");
  };

  const handledeltePlan = (planId) => {
    const response = axios
      .delete(`http://localhost:8080/admin/plans/${planId}`)
      .then((response) => {
        toast.success("Plan deleted successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  };

  const renderPlanItems = (start, end) => {
    return plan.slice(start, end).map((item, index) => (
      <div key={index} className="max-w-xs m-10">
        <div className="bg-white border rounded-lg shadow flex flex-col">
          <img
            src={item.image_url}
            alt={item.plan_name}
            className="h-48 w-full object-cover rounded-t-lg"
          />
          <div className="p-4 flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {item.plan_name}
            </h2>
            <p className="text-gray-600">{item.description}</p>
            <div className="flex items-center mt-4 text-gray-800">
              <span className="text-red-500 text-xl font-semibold mr-1">₹</span>
              {item.price}{" "}
              <span
                role="img"
                aria-label="calendar"
                className="text-xl font-semibold mx-1"
              >
                📅
              </span>
              <span className="text-black font-semibold">Days:</span>{" "}
              {item.no_of_days}{" "}
              <span className="text-red-500 font-semibold">Points :</span>
              {item.price}
            </div>
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-5 mx-auto"
            onClick={() => handledeltePlan(item.plan_id)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-wrap justify-center">
      <>
        <div className="flex flex-col text-gray-800 items-center mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
            onClick={handlePlan}
          >
            Add new Plan
          </button>
        </div>
      </>
      <>
        {Array.from({ length: Math.ceil(plan.length / 3) }).map(
          (_, rowIndex) => (
            <div
              key={rowIndex}
              className="w-full flex flex-wrap justify-center"
            >
              {renderPlanItems(rowIndex * 3, (rowIndex + 1) * 3)}
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          )
        )}
      </>
    </div>
  );
}
