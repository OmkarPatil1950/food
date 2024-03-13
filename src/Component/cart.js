// import React, { useState, useEffect } from 'react';
// import { Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import FormDialog from './dialogform';
// import Login from './Login';
// import Payment from './Razorpay'
// export default function Cart() {
//   const [data, setData] = useState([]);
//   const email_id = sessionStorage.getItem('email');
//   const [customer, setCustomer] = useState({});
//   const navigate = useNavigate();
//   const [cartid,setCartid]= useState(0);
//   const [Amount,setAmount]=useState(0);

//   let extractedElements=0;
// let totalPrice=0;;
//   let num=0;
//   useEffect(() => {
//     fetch(`http://localhost:8080/api/getbyemail/${email_id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCustomer(data[0].customer_Id);
//         console.log("customer", data);
//       })
//       .catch((err) => console.log(err));
//   }, [email_id]);

//   useEffect(() => {
//     if (customer) {
//       fetch(`http://localhost:8080/api/get/${customer}`)
//         .then((res) => res.json())
//         .then((result) => {
//           setData(result);
//           console.log("cart details", result);
//           setCartid(result[0][7])
//            extractedElements = result.map((array) => ((array[3] * array[5])-(array[3] * array[5])));
//           //  console.log(extractedElements)
//           // setAmount(extractedElements)
//           // console.log("--------")
//           // console.log(Amount)
//           // Amount.map((n)=>num=num+n)
//           // console.log("num")
//           // console.log(num)
//           // console.log(cartid)
//           console.log("---------")
//           console.log(totalPrice)
//           console.log(result[0][7])
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, [customer]);

//   // const handleBuyNow = () => {
//     // if (sessionStorage.getItem('email')) {
//     //   const cartId = data.map(item => item[7]); // Get an array of cart IDs
//     //   const params = cartId.join(','); // Convert the array to a comma-separated string
//     //   const totalPrice = data.reduce((total, item) => total + ((item[5] * item[3]) - (item[5] * item[3]) * 0.1), 0);
//     //   sessionStorage.setItem('total', totalPrice.toFixed(2)); // Store the discounted price in session storage
//     //   navigate(`/cartpayment/${params}`);///passing the product id 
//     // }
//   // };
//   const handleBuyNow = () => {
//     if (sessionStorage.getItem('email')) {
//       const cartId = data.map(item => item[7]); // Get an array of cart IDs
//       const params = cartId.join(','); // Convert the array to a comma-separated string
//        totalPrice = data.reduce((total, item) => total + ((item[5] * item[3]) - (item[5] * item[3]) * 0.1), 0);
//       sessionStorage.setItem('total', totalPrice.toFixed(2)); // Store the discounted price in session storage
//       navigate(`/razorpay/${params}`);///passing the product id 
//     }
//   };
  

//   const handleLogin = () => {
//     if (!sessionStorage.getItem('email')) {
//       navigate('/login');
//     }
//   };

//   const handleDelete = (cartId) => {
//     fetch(`http://localhost:8080/api/deleteCart/${cartId}`, {
//       method: 'DELETE',
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data); // Item deleted from the cart successfully.
//         // Perform any necessary actions after successful deletion

//       })
//       .catch((error) => {
//         console.error(error); // Failed to delete item from the cart.
//         // Handle error or display error message to the user
//       });
//     window.location.reload();
//   };

//   return (
//     <div className="container mx-auto my-8">
//       {data.length > 0 ? (
//         data.map((item, index) => (
//           <div key={index} className="border border-gray-300 rounded-md p-4 mb-6">
//             <div className="flex">
//               <div className="w-1/3">
//                 <Card className="border-none">
//                   <Card.Img variant="top" className="h-64" src={item[1]} />
//                 </Card>
//               </div>
//               <div className="w-2/3 pl-4">
//                 <Card.Body>
//                   <Card.Title className="text-xl font-bold mb-4">
//                     <h3>{item[2]}</h3>
//                   </Card.Title>
//                   <Card.Text>
//                     <b>Price:</b> &#8377;{item[3]}
//                     <br />
//                     <b>Discount:</b> 10%
//                     <br />
//                     <b>Total Cost:</b> {item[5] * item[3]}
//                     <br />
//                     <b>Discounted Price:</b> &#8377;{((item[5] * item[3]) - (item[5] * item[3]) * 0.1).toFixed(2)}
//                     <br />
//                     <Card.Text>
//                       <b>Product Description:</b> {item[8]}
//                     </Card.Text>
//                   </Card.Text>
//                   <button
//                     className="bg-red-600 hover:bg-red-900-700 text-white font-bold py-2 px-4 rounded"
//                     onClick={() => handleDelete(item[7])}
//                   >
//                     Remove
//                   </button>
//                 </Card.Body>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="text-center">
//           <Card.Img
//             variant="top"
//             className="mx-auto my-4"
//             style={{ maxWidth: "25%", height: "25%" }}
//             src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
//           />
//           <Card.Text className="mb-5">
//             <h4>
//               <b>Your cart is empty</b>
//             </h4>
//           </Card.Text>
//           <FormDialog
//                         prop={<Login/>}
//                         className='rounded-md bg-emerald-500 text-white px-3 py-2 ml-2 text-sm font-medium hover:bg-green-600'
//                         style="sm"
//                         buttonTitle="Login"
//                       />
//         </div>
//       )}

//       {data.length > 0 && (
//         <div className="flex justify-center mt-1">
//           <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2 mb-4" onClick={handleBuyNow}>
//             checkout
//           </button>
//         </div>
//       )}
  
//     </div>
//   );
// }
