import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";

const AddPlanForm = () => {
  const [plan, setPlan] = useState({
    plan_name: "",
    description: "",
    price: 0,
    points: 0,
    no_of_days: 30,
    image_url: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlan((prevPlan) => ({ ...prevPlan, [name]: value }));
  };

  

  const handleSubmit = async (event) => {

    event.preventDefault();

    setPlan((prevPlan) => ({ ...prevPlan, ['total_points']: plan.no_of_days*plan.points }));


   
console.log(plan);
    try {
      await axios.post("http://localhost:8080/admin/plans", plan);
      console.log("Plan added successfully!");
      toast.success("Plan added successfully!");
      setTimeout(() => {
        Navigate('/admindashboard')
      }, 1000);
    } catch (error) {
      console.error("Error adding plan:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Plan Name:
          </label>
          <input
            type="text"
            name="plan_name"
            value={plan.plan_name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            name="description"
            value={plan.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={plan.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Points:
          </label>
          <input
            type="number"
            name="points"
            value={plan.points}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Add similar styling for other input fields */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            name="image_url"
            value={plan.image_url}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Plan
        </button>
      </form>
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
  );
};

export default AddPlanForm;
