import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Corosol from "./CarouselComponent";
import TopOffers from "./Topoffers";
import Menu from "../Menu";
import planService from "../Service/planService";
import UserService from "../Service/UserService";
import OrderService from "../Service/OrderService";

export default function Home() {
  const navigate = useNavigate();
  const plan_id = sessionStorage.getItem("plan_id");
  const email = sessionStorage.getItem("email");
  const user_id = sessionStorage.getItem("id");
  const user_name = sessionStorage.getItem("user_name");
  const [isPickUpAvailable, setIsPickUpAvailable] = useState(false);
  const [plan, setPlan] = useState([]);
  const [totalPoints, setPoints] = useState(0);
  const [registred, setRegistred] = useState("guest");
  const [isPlaced, setisPlaced] = useState(false);
  const [order_id, setOrderId] = useState();
  sessionStorage.setItem("pick_status", false);
  // if (plan_id) {
  //   setRegistred("registred");
  // }
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to the month since it is 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const handleCardClick = (item) => {
    if (email) {
      const points = plan[0].points;
      if (plan_id) {
        const data = {
            order: {
                userId: user_id,
                userType: registred, // Assuming "registered" is a string here
                date: formattedDate,
            },
            orderItems: [
                {
                    dishName: item.plan_name,
                    quantity: 1,
                    price: item.price,
                    pointsDeducted: item.points,
                    orderStatus: "Completed",
                    paymentType: "Monthly",
                    userNameOrGuestName: user_name,
                    orderAddress:'Dine-In'
                },
            ],
        };
        OrderService.orderDetails(data).then((orderResponse) => {
            console.log(orderResponse.data);
            if (orderResponse.status >= 200 && orderResponse.status <= 205) {
                toast.success("Successfully placed order");
                console.log(orderResponse.data.orderId, "------------order");
                sessionStorage.setItem("order_id", orderResponse.data.orderId);
    
                // Now, make the UserService.updateTotalPoints API call
                UserService.updateTotalPoints(user_id, points).then((pointsResponse) => {
                    if (pointsResponse.status >= 200 && pointsResponse.status <= 205) {
                        // Handle success for the points update
                        // You can add additional logic here if needed
                        console.log("Points updated successfully");
                    } else {
                        // Handle failure for the points update
                        console.error("Failed to update points");
                    }
                }).catch((pointsError) => {
                    // Handle error for the points update
                    console.error("Error updating points:", pointsError);
                });
    
            } else if (orderResponse.status === 208) {
                toast.warning("Already picked");
                setIsPickUpAvailable(true);
            }
        }).catch((orderError) => {
            toast.warning("Already picked");
        });
    }
    
    } else {
      toast.warning("Please login");
      setTimeout(()=>{
        navigate("/login");
      },1000)
    }
  };

  useEffect(() => {
    if (plan_id) {
      setRegistred("registred");
    }
    // Fetch user data
    if (email) {
      UserService.getUser(email).then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setPoints(data.total_points);
        } else {
          console.error("Error fetching profile data.");
        }
      });
    }

    // Fetch plan data
    if (plan_id) {
      planService.planByplanId(plan_id).then((response) => {
        if (response.status >= 200 && response.status <= 205) {
          setPlan(response.data);
        } else {
          console.error("Error fetching plan data.");
        }
      });
    }

    OrderService.getorderDetails(user_id).then((response) => {
      if (response.status >= 200 && response.status <= 205) {
        console.log(response.data);
        setOrderId('' || response.data.orderId);
      } else {
        console.error("Error fetching plan data.");
      }
    });

    // OrderService.getorderbyDate(formattedDate).then((response) => {
    //   console.log(response.data, "----------by date ");
     
    //   const data = response.data;
    //   if (response.status >= 200 && response.status <= 205) {
    //     if (data != null) {
    //       console.log("inside if");
       
    //       console.log("inside get by date ", isPickUpAvailable);
    //     }
    //   } else {
    //     console.error("Error fetching plan data.");
    //   }
    // });
  }, [email, plan_id, isPickUpAvailable]);

  return (
    <div>
      <Corosol />
      {/* Virtual Try On button code remains the same */}
      {false ? (
        // Comment out or remove the loading indicator code
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>{" "}
        </div>
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
                        className="text-xl font-semibold mx-1 "
                      >
                        📅
                      </span>
                      <span className="text-red-500 font-semibold">
                        Points :
                      </span>
                      {totalPoints}
                    </div>

                    {totalPoints > 0 ? (
                      <button
                        className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-1 ml-20 mt-2"
                        onClick={() => handleCardClick(item)}
                      >
                        Pick
                      </button>
                    ) : totalPoints <= 0 ? (
                      <button
                        className="text-red-500 font-semibold mt-2 ml-20 cursor-pointer"
                        onClick={() => navigate("/Editplan")}
                      >
                        Please choose a plan
                      </button>
                    ): isPickUpAvailable ? (
                      <button>
                        alredy Picked
                      </button>
                    ):null}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <Menu />
          {/* <TopOffers></TopOffers> */}
        </>
      )}
    </div>
  );
}
