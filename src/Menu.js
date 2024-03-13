// import React, { useEffect, useState } from "react";
// import MenuService from "./Service/MenuService";

// // const menuItems = [
// //   {
// //     name: "CHICKEN TIKKA MASALA",
// //     price: "$12.00",
// //     description: "Spiced chicken served in a creamy tomato sauce.",
// //   },
// //   {
// //     name: "PALAK CHICKEN SAAG",
// //     price: "$10.00",
// //     description: "Chicken cooked with spinach and Indian spices.",
// //   },
// //   {
// //     name: "CHANA MASALA CURRY",
// //     price: "$12.00",
// //     description: "Chickpeas cooked in a spicy tomato-based gravy.",
// //   },
// //   {
// //     name: "PALAK PANEER SAAG",
// //     price: "$8.00",
// //     description: "Paneer (Indian cheese) cooked with spinach and spices.",
// //   },
// //   {
// //     name: "SAMOSA CHAAT PLATE",
// //     price: "$10.00",
// //     description: "Crispy samosas topped with chutney and spices.",
// //   },
// //   {
// //     name: "CHICKEN KORMA CURRY",
// //     price: "$12.00",
// //     description: "Chicken cooked in a rich and creamy curry sauce.",
// //   },
// //   {
// //     name: "ROGAN JOSH KEBAB",
// //     price: "$10.00",
// //     description: "Tender kebabs with aromatic spices and herbs.",
// //   },
// //   {
// //     name: "MASALA DOSA CREPE",
// //     price: "$8.00",
// //     description: "Thin rice crepe filled with spiced potatoes.",
// //   },
// //   {
// //     name: "BIRYANI RICE BOWL",
// //     price: "$12.00",
// //     description: "Aromatic rice dish with your choice of protein and spices.",
// //   },
// //   {
// //     name: "MALAI KOFTA CURRY",
// //     price: "$10.00",
// //     description: "Fried vegetable balls in a creamy tomato gravy.",
// //   },
// // ];

// const RestaurantMenu = () => {
//   const headingStyle = {
//     textAlign: "center",
//     color: "black", // Dark black color
//     fontWeight: "bold",
//     marginBottom: "30px",
//   };

//   const boldStyle = {
//     fontWeight: "bold",
//   };

//   const [menuItems, setmenuItems] = useState([]);

//   useEffect(() => {
//     MenuService.getAllMenu().then((response) => {
//       const statusCode = response.status;
//       console.log(statusCode)
//       if (statusCode >= 200 && statusCode < 205) {
//         console.log(
//           `Request was successful (status code ${statusCode}):`,
//           response.data
//         );
//         setmenuItems(response.data);
//       } else {
//         console.error(`Request failed with status code ${statusCode}`);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <h1 style={headingStyle}>Menu of the Restaurant</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           gap: "350px",
//         }}
//       >
//         <div style={{ width: "50%", marginLeft: "80px" }}>
//           {menuItems.slice(0, 5).map((item, index) => (
//             <div key={index}>
//               <p style={{ color: "orange" }}>
//                 <span style={boldStyle}>{item.price}</span> -{" "}
//                 <span style={boldStyle}>{item.dishName}</span>
//               </p>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//         <div style={{ width: "50%", marginLeft: "80px" }}>
//           {menuItems.slice(5).map((item, index) => (
//             <div key={index}>
//               <p style={{ color: "orange" }}>
//                 <span style={boldStyle}>{item.price}</span> -{" "}
//                 <span style={boldStyle}>{item.dishName}</span>
//               </p>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuService from "./Service/MenuService";
// import menuImg from "../images/Menu/veg/PaneerTikka.jpg";

const OrderDialog = ({ dish, onClose, onContinue }) => {
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1); // Initial quantity is set to 1
  const [totalAmount, setTotalAmount] = useState(dish.price); // Initial total amount is the price of one dish
  
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotalAmount((prevTotalAmount) => prevTotalAmount + dish.price);
    console.log(totalAmount);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setTotalAmount((prevTotalAmount) => prevTotalAmount - dish.price);
    }
  };
  
  const handleContinue = () => {
    // Pass the updated quantity and total amount to onContinue
    onContinue(address, dish, quantity, totalAmount);
  };
  
  // Rest of your component...
  

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">{dish.dishName}</h2>
        <p className="mb-2">Price: Rs. {dish.price}</p>
        <p className="mb-4">Description: {dish.description}</p>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-2"
        />

        <form class="max-w-xs mx-auto">
          <label
            for="quantity-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choose quantity:
          </label>
          <div class="relative flex items-center max-w-[8rem]">
            <button
              type="button"
              id="decrement-button"
              onClick={handleDecrement}
              data-input-counter-decrement="quantity-input"
              class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                class="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              value={quantity}
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
              required
            />
            <button
              type="button"
              id="increment-button"
              onClick={handleIncrement}
              data-input-counter-increment="quantity-input"
              class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                class="w-3 h-3 text-gray-900 dark:text-white"
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
            </button>
          </div>
          <p
            id="helper-text-explanation"
            class="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Please select a 5 digit number from 0 to 9.
          </p>
        </form>

        <div className="flex justify-end">
          <button
            onClick={handleContinue}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Continue
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const AppointmentBox = () => {
  const navigate = useNavigate();
  const mode = useRef("Vegetarian");
  const [apiTrigger, setApiTrigger] = useState(false);
  const [consultationMode, setConsultationMode] = useState("");
  const [isLoadingProfile, setLoadingProfile] = useState(true);
  const [data, setData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      MenuService.getMenuByMode(mode.current).then((response) => {
        setData(response.data);
        console.log(response.data);
        setApiTrigger(false);
      });
    };

    fetchData();
  }, [apiTrigger]);

  const handleModeChange = (newMode) => {
    mode.current = newMode;
    setApiTrigger(true);
    setConsultationMode(newMode);
  };

  const handlePayment = (price, dish) => {
    setSelectedDish({
      dishName: dish.dishName,
      price: dish.price,
      description: dish.description,
    });
    setShowDialog(true);
  };
  function truncateDescription(description, maxWords) {
    const words = description.split(" ");
    const truncated = words.slice(0, maxWords).join(" ");

    if (words.length > maxWords) {
      return `${truncated} ...`;
    } else {
      return truncated;
    }
  }
  return (
    <div className="mt-4">
      <div className="text-center mb-5">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ml-3 border border-blue-500 hover:border-transparent rounded"
          onClick={() => handleModeChange("Vegetarian")}
        >
          Vegetarian
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ml-3 border border-blue-500 hover:border-transparent rounded"
          onClick={() => handleModeChange("Non-Vegetarian")}
        >
          Non-Vegetarian
        </button>
      </div>

      {data.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "start",
          }}
        >
          {data.map((dish, index) => (
            <div
              key={index}
              style={{
                marginRight: "10px",
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-full flex flex-col justify-between items-center">
                <img
                  className="w-full h-40 object-cover"
                  src={dish.imageUrl}
                  alt={dish.dishName}
                />
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2">{dish.dishName}</div>
                  <div className="text-gray-700 text-base">
                    <b>Rs.</b> {dish.price.toFixed(2)}
                  </div>
                  <p className="text-gray-700 text-base">
                    {truncateDescription(dish.description, 5)}
                  </p>
                </div>
                <button
                  className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-700 mb-4"
                  onClick={() => handlePayment(dish.price, dish)}
                >
                  Order Now
                </button>
              </div>
              {(index + 1) % 5 === 0 && <br />}
            </div>
          ))}
        </div>
      ) : (
        <div textAlign="center">Menu not available</div>
      )}

      {/* Dialog for Order */}
      {showDialog && (
        <OrderDialog
          dish={selectedDish}
          onClose={() => setShowDialog(false)}
          onContinue={(address, dish,quantity,totalAmount) => {
            console.log("Address entered:", address);
            // Additional actions, e.g., navigate to the next page
            navigate("/checkout", { state: { address, dish, quantity,totalAmount } });
          }}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
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

export default AppointmentBox;