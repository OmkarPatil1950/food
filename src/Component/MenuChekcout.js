import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import planService from "../Service/planService";

export default function MenuCheckout() {
  const location = useLocation();
  const  navigate = useNavigate();
  const [registred, setRegistred] = useState("guest");
  const { selectedDate, endDate,item } = location.state;
  const plan_id = sessionStorage.getItem("plan_id");
  const email = sessionStorage.getItem("email");
  const user_id = sessionStorage.getItem("id");
  const user_name = sessionStorage.getItem("user_name");
 const amount= item.price;
 const totalAmount=item.price;
 console.log(amount);
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to the month since it is 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  useEffect(() => {
    const loadRazorpay = async () => {
      const scriptLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!scriptLoaded) {
        alert("Failed to load Razorpay script");
        return;
      }
      displayRazorPay(amount);
    };
  
    loadRazorpay();
  }, [amount]);
  

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };
  

  const displayRazorPay = async (amount) => {
    // const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    // if (!res) {
    //   alert("You are offline ");
    //   return;
    // }

    const options = {
      key: "rzp_test_YNrvezC4YR0qwI",
      currency: "INR",
      amount: Math.round(amount * 100), // Convert amount to paise and round it to an integer
      name: "Welcome to Food App",
      description: "Thanks for ordering",
      image:
        "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
      modal: {
        // Use modal popup instead of iframe
        ondismiss: function () {
          alert("Payment cancelled");
        },
      },
      prefill: {
        name: "omkar",
        email: "demo@gmail.com",
        contact: "9359364008",
      },
      notes: {
        address: "onestop.pvt.ltd",
      },
      theme: {
        color: "#3399cc",
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
        if (response.razorpay_payment_id) {
          console.log("db call");
          if (email) {
            if (selectedDate) {
              planService.updateUserPlan(user_id, item.plan_id, selectedDate, endDate,item.points).then((response) => {
                const statusCode = response.status;
                if (statusCode >= 200 || statusCode <= 205) {
                  alert("Your plan has been added successfully");
                  sessionStorage.setItem("plan_id", item.plan_id);
                  setTimeout(() => {
                    navigate('/showPlan')
                  }, 1000);
                } else {
                  alert("Failed to add plan");
                }
              });
            } else {
              alert("Please select a date");
            }
          } else {
            alert("Please login");
            navigate("/login");
          }
        }
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return <div>Payment page</div>;
}
