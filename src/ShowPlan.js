// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import planService from "./Service/planService";
// import UserService from "./Service/UserService";
// import { Button } from "react-bootstrap";

// // A fake API function

// export default function ActionAreaCard() {
//   const [plan, setPlan] = useState([]);
//   const [onePLan,SetOnePlan]=useState([]);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [endDate, setEndDate] = useState(""); // State to store the end date
//   const navigate = useNavigate();
//   const plan_id = sessionStorage.getItem("plan_id");

//   // Function to add days to a date
//   const addDays = (date, days) => {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
//   };

//   const handleDateChange = (newDate) => {
//     setSelectedDate(newDate);

//     // Calculate the endDate by adding 30 days to the selected date
//     const newEndDate = addDays(new Date(newDate), 30);
//     setEndDate(newEndDate.toISOString().slice(0, 10));
//   };

//   useEffect(() => {
//     if (plan_id) {
//       // If plan_id is present, simulate a fake API call
//       planService.planByplanId(plan_id).then((response) => {
//         setPlan(response.data);
//         if (response.status === 200) {
//         } else {
//           // Handle other status codes here
//           console.error("Error fetching profile data.");
//           // You can set an error message state here to display an error message to the user.
//         }
//       });
//     } else {
//       // If plan_id is not present, call the actual API
//       planService.getAllPlan().then((response) => {
//         const statusCode = response.status;
//         console.log(statusCode);
//         if (statusCode >= 200 && statusCode < 205) {
//           console.log(
//             `Request was successful (status code ${statusCode}):`,
//             response.data
//           );
//           setPlan(response.data);
//         } else {
//           console.error(`Request failed with status code ${statusCode}`);
//         }
//       });
//     }
//   }, [plan_id]);

//   const user_id = sessionStorage.getItem("id");

//   const handleCardClick = (item) => {
//     console.log(item);
//     console.log(selectedDate);
//     console.log(endDate);
//     const email = sessionStorage.getItem("email");
//     if (email) {
//       if (selectedDate) {
//         planService
//           .updateUserPlan(
//             user_id,
//             item.plan_id,
//             selectedDate,
//             endDate,
//             item.points
//           )
//           .then((response) => {
//             const statusCode = response.status;
//             if (statusCode >= 200 || statusCode <= 205) {
//               alert("Your plan has been added successfully");
//             } else {
//               alert("Failed to add plan");
//             }
//           });
//       } else {
//         alert("Please select a date");
//       }
//     } else {
//       alert("Please login");
//       navigate("/login");
//     }
//   };

//   return (

//     <div className="flex flex-wrap justify-center">
//       {plan && plan.length > 0 ? (
//       {plan.slice(0, 3).map((item, index) => (
//         <div key={index} className="max-w-xs m-10">
//           <div className="bg-white border rounded-lg shadow">
//             <img
//               src={item.image_url}
//               alt={item.plan_name}
//               className="h-48 w-full object-cover rounded-t-lg"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {item.plan_name}
//               </h2>
//               <p className="text-gray-600">{item.description}</p>
//               <div className="flex items-center mt-4 text-gray-800">
//                 <span className="text-red-500 text-xl font-semibold mr-1">
//                   ₹
//                 </span>
//                 {item.price}{" "}
//                 <span
//                   role="img"
//                   aria-label="calendar"
//                   className="text-xl font-semibold mx-1"
//                 >
//                   📅
//                 </span>
//                 <span className="text-black font-semibold">Days:</span>{" "}
//                 {item.no_of_days}{" "}
//                 <span className="text-red-500 font-semibold">Points :</span>
//                 {item.price}
//               </div>
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => handleDateChange(e.target.value)}
//               />
//               <button
//                 className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2 ml-20"
//                 onClick={() => handleCardClick(item)}
//               >
//                 Choose
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="w-full flex flex-wrap justify-center">
//         {plan.slice(3, 5).map((item, index) => (
//           <div key={index} className="max-w-xs m-10">
//             <div className="bg-white border rounded-lg shadow">
//               <img
//                 src={item.image_url}
//                 alt={item.plan_name}
//                 className="h-48 w-full object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   {item.plan_name}
//                 </h2>
//                 <p className="text-gray-600">{item.description}</p>
//                 <div className="flex items-center mt-4 text-gray-800">
//                   <span className="text-red-500 text-xl font-semibold mr-1">
//                     ₹
//                   </span>
//                   {item.price}{" "}
//                   <span
//                     role="img"
//                     aria-label="calendar"
//                     className="text-xl font-semibold mx-1"
//                   >
//                     📅
//                   </span>
//                   <span className="text-black font-semibold">Days:</span>{" "}
//                   {item.no_of_days}{" "}
//                   <span className="text-red-500 font-semibold">Points :</span>
//                   {item.price}
//                 </div>
//                 <input
//                   type="date"
//                   value={selectedDate}
//                   onChange={(e) => handleDateChange(e.target.value)}
//                 />
//                 <button
//                   className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2 ml-20"
//                   onClick={() => handleCardClick(item)}
//                 >
//                   Choose
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import planService from "./Service/planService";
import UserService from "./Service/UserService";

export default function ActionAreaCard() {
  const [plan, setPlan] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();
  const plan_id = sessionStorage.getItem("plan_id");
  const email = sessionStorage.getItem("email");
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    const newEndDate = addDays(new Date(newDate), 30);
    setEndDate(newEndDate.toISOString().slice(0, 10));
  };

  useEffect(() => {
    UserService.getUser(email)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          const data = response.data;
          console.log(data);
          console.log("---------------------------------", data.user_id);
          console.log("----------------------------------", data.plan_id);
          sessionStorage.setItem("id", data.user_id);
          sessionStorage.setItem("plan_id", data.plan_Id);
        } else {
          // Handle other status codes here
          console.error("Error fetching profile data.");
          // You can set an error message state here to display an error message to the user.
        }
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
    if (plan_id) {
      planService.planByplanId(plan_id).then((response) => {
        if (response.status >= 200 && response.status <= 205) {
          console.log(response.data, "-------get plan by plan id");
          setPlan(response.data);
        } else {
          console.error("Error fetching profile data.");
        }
      });
    } else {
      planService.getAllPlan().then((response) => {
        const statusCode = response.status;
        console.log(statusCode);
        console.log(response.data, "the get all plan data");
        if (statusCode >= 200 && statusCode < 205) {
          setPlan(response.data);
        } else {
          console.error(`Request failed with status code ${statusCode}`);
        }
      });
    }
  }, [plan_id]);

  console.log(plan, "plan-----------");
  console.log(plan && plan.length, "--------plan length");
  const user_id = sessionStorage.getItem("id");

  const handleCardClick = (item) => {
    const email = sessionStorage.getItem("email");
    if (email) {
      if (selectedDate) {
        planService
          .updateUserPlan(
            user_id,
            item.plan_id,
            selectedDate,
            endDate,
            item.points,
            30
          )
          .then((response) => {
            const statusCode = response.status;
            if (statusCode >= 200 && statusCode <= 205) {
              alert("Your plan has been added successfully");
            } else {
              alert("Failed to add the plan");
            }
          });
      } else {
        alert("Please select a date");
      }
    } else {
      alert("Please login");
      navigate("/login");
    }
  };
  const handlePlan = () => {
    navigate("/Editplan");
  };

  return (
    <div className="flex flex-wrap justify-center">
      {plan.length === 0 ? (
        <>
          <div className="flex flex-col text-gray-800 items-center mt-10">
            <div>No plans available</div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
              onClick={handlePlan}
            >
              Choose Plan
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex flex-wrap justify-center">
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
                      <span className="text-red-500 font-semibold">
                        Points :
                      </span>
                      {item.price}
                    </div>
                  </div>
                  <button
                    className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2 ml-28"
                    onClick={handlePlan}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
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
                      <span className="text-red-500 font-semibold">
                        Points :
                      </span>
                      {item.price}
                    </div>
                    <input
                      type="date"
                      value={item.selectedDate}
                      onChange={(e) => handleDateChange(e.target.value)}
                    />
                    <button
                      className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2 ml-20"
                      onClick={() => handleCardClick(item)}
                    >
                      Choose
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
