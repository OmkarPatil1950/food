import React, { useState } from "react";
import UserService from "../Service/UserService";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact_num: "",
    email: "",
    gender: "",
    address: "",
    password: "",
    plan_Id: "",
    points: "",
    plan_Startdate: "",
    plan_endDate: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters long";
    }

    // Add more validations for other fields here

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      UserService.saveUser(formData)
        .then((response) => {
          if (response.status === 201) {
            // User created successfully
            alert("Registered Successfully");
          } else if (response.status === 409) {
            // User already exists, extract the error message
            response.json().then((data) => {
              alert(`Registration Failed: ${data}`);
            });
          } else  if(response.status ===208){
            // Handle other status codes as needed
            alert("Email already registered");
          }
        })
        .catch((error) => {
          // Handle other errors (e.g., network issues)
          console.error(error);
          alert("Email already registered");
        });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact_num">
            Contact Number
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.contact_num ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="contact_num"
            type="text"
            placeholder="Contact Number"
            value={formData.contact_num}
            onChange={handleChange}
          />
          {errors.contact_num && (
            <p className="text-red-500 text-xs italic">{errors.contact_num}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            className={`shadow appearance-none border ${
              errors.gender ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.address ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plan_Id">
            Plan ID
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.plan_Id ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="plan_Id"
            type="text"
            placeholder="Plan ID"
            value={formData.plan_Id}
            onChange={handleChange}
          />
          {errors.plan_Id && <p className="text-red-500 text-xs italic">{errors.plan_Id}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="points">
            Points
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.points ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="points"
            type="text"
            placeholder="Points"
            value={formData.points}
            onChange={handleChange}
          />
          {errors.points && <p className="text-red-500 text-xs italic">{errors.points}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plan_Startdate">
            Plan Start Date
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.plan_Startdate ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="plan_Startdate"
            type="date"
            value={formData.plan_Startdate}
            onChange={handleChange}
          />
          {errors.plan_Startdate && (
            <p className="text-red-500 text-xs italic">{errors.plan_Startdate}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plan_endDate">
            Plan End Date
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.plan_endDate ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="plan_endDate"
            type="date"
            value={formData.plan_endDate}
            onChange={handleChange}
          />
          {errors.plan_endDate && (
            <p className="text-red-500 text-xs italic">{errors.plan_endDate}</p>
          )}
        </div> */}

        <div className="flex items-center justify-between">
          <button
            className="bg-emerald-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
