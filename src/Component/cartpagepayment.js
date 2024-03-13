import React from "react";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';

export default function CartPayment() {
  const { code } = useParams([]);
  const cartid =[code];
console.log(cartid)
// const currentDate = new Date().toISOString().split('T')[0];
  const navigate =useNavigate('');

  
  const successAlert = () => {
    Swal.fire({
      title: `Payment done Successfully..!!`,
      icon: 'success'
    });
   navigate("/bill/" + code);
    // const currentDate = new Date().toISOString().split('T')[0]; // Get current date in ISO format
  
    // const promises = cartid.map((id) => {
    //   console.log("id is the ")
    //   console.log(id);
    //   const data = {
    //     order_Date: currentDate,
    //     order_Total: 0,
    //     cart_Id_fk: {
    //       cart_Id_fk:id
    //     }
    //   };
  
    //   return fetch(`http://localhost:8080/api/addorders/${id}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });
    
    // });
  
    // Promise.all(promises)
    //   .then(() => {
    //     console.log('All items added to cart successfully');
       
    //   })
    //   .catch((error) => {
    //     console.error('Failed to add items to cart:', error);
    //     // Handle error or display error message to the user
    //   });
  };
  

 
    return (
    <div className="flex justify-center">
      <div className="w-80 md:w-96 lg:w-1/2 xl:w-1/3">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-3xl font-bold mb-4 text-center">Payment</h1>
          <p className="font-bold">Saved card:</p>
          <div className="flex items-center my-2">
            <img
              className="w-8 h-8 mr-2"
              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              alt="Mastercard"
            />
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
            />
            <div className="flex-fill mx-3">
              <div className="form-outline">
                <label>Card Number</label>
                <input
                  id="form1"
                  type="text"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                  placeholder="**** **** **** 1626"
                />
              </div>
            </div>
            {/* <a href="#!" className="text-blue-500 underline">
              Remove card
            </a> */}
          </div>

          <p className="font-bold mt-4">Add new card:</p>
          <label>Cardholder's Name</label>
          <input
            id="form3"
            type="text"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            placeholder="**************"
          />
          <div className="flex my-4">
            <div className="w-7/12">
              <label>Card Number</label>
              <input
                id="form4"
                type="text"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                placeholder="**** **** **** ****"
              />
            </div>
            <div className="w-3/12 ml-4">
              <label>Expire</label>
              <input
                id="form5"
                type="password"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                placeholder="MM/YYYY"
              />
            </div>
            <div className="w-2/12 ml-4">
              <label>CVV</label>
              <input
                id="form6"
                type="password"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                placeholder="CVV"
              />
            </div>
          </div>
          <button
            className="bg-green-500 text-white text-lg py-2 px-4 rounded-lg w-full"
            onClick={successAlert}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
