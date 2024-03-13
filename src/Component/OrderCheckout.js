import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import OrderService from "../Service/OrderService";

export default function OrderCheckout() {
  const location = useLocation();
  const [registred, setRegistred] = useState("guest");
  const { address, dish, quantity, totalAmount } = location.state;
  const plan_id = sessionStorage.getItem("plan_id");
  const email = sessionStorage.getItem("email");
  const user_id = sessionStorage.getItem("id");
  const user_name = sessionStorage.getItem("user_name");
  console.log(address, dish);
  const finalAddress = address;
  const amount = totalAmount;
  const totalquantity = quantity;
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
      amount: totalAmount * 100,
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
        email: "omkarpatil5607@gmail.com",
        contact: "8767627575",
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
          if (plan_id) {
            setRegistred("registred");
          }
          const data = {
            order: {
              userId: user_id,
              userType: registred, // Assuming "registered" is a string here
              date: formattedDate,
            },
            orderItems: [
              {
                dishName: dish.dishName,
                quantity: totalquantity,
                price: totalAmount,
                orderAddress: address,
                orderStatus: "Completed",
                paymentType: "Card",
                userNameOrGuestName: user_name,
              },
            ],
          };
          OrderService.AddOrder(data).then((response) => {
            console.log(response.date);
            alert("Order placed successfully");
          });
          alert("Payment successfully");
        }
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return <div>Payment page</div>;
}
