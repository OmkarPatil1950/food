import React, { useEffect, useState } from 'react'
import planService from './Service/planService';
import { useNavigate } from 'react-router-dom';

export default function Editplan() {
  const [plan, setPlan] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [endDate, setEndDate] = useState(""); // State to store the end date
  const navigate = useNavigate();
  const plan_id=sessionStorage.getItem('plan_id');
  // Function to add days to a date
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);

    // Calculate the endDate by adding 30 days to the selected date
    const newEndDate = addDays(new Date(newDate), 30);
    setEndDate(newEndDate.toISOString().slice(0, 10));
  };

  useEffect(() => {
    planService.getAllPlan().then((response) => {
      const statusCode = response.status;
      console.log(statusCode);
      if (statusCode >= 200 && statusCode < 205) {
        console.log(
          `Request was successful (status code ${statusCode}):`,
          response.data
        );
        setPlan(response.data);
      } else {
        console.error(`Request failed with status code ${statusCode}`);
      }
    });
  }, []);

  const user_id = sessionStorage.getItem("id");

  const handleCardClick = (item) => {
    console.log(item);
    console.log(selectedDate);
    console.log(endDate);
    const email = sessionStorage.getItem("email");
    if (email) {
      if (selectedDate) {
        navigate("/menucheckout", { state: {selectedDate,endDate,item } });
      } else {
        alert("Please select a date");
      }
    } else {
      alert("Please login");
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {plan.slice(0, 3).map((item, index) => (
        <div key={index} className="max-w-xs m-10">
          <div className="bg-white border rounded-lg shadow">
            <img
              src={item.image_url}
              alt={item.plan_name}
              className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.plan_name}
              </h2>
              <p className="text-gray-600">{item.description}</p>
              <div className="flex items-center mt-4 text-gray-800">
                <span className="text-red-500 text-xl font-semibold mr-1">
                  ₹
                </span>
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
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
              />
              <button className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2 ml-20" onClick={() => handleCardClick(item)}>
                Choose
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full flex flex-wrap justify-center">
        {plan.slice(3, 5).map((item, index) => (
          <div key={index} className="max-w-xs m-10">
            <div className="bg-white border rounded-lg shadow">
              <img
                src={item.image_url}
                alt={item.plan_name}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.plan_name}
                </h2>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex items-center mt-4 text-gray-800">
                  <span className="text-red-500 text-xl font-semibold mr-1">
                    ₹
                  </span>
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
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                />
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2 ml-20" onClick={() => handleCardClick(item)}>
                  Choose
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
