// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { Form } from "react-bootstrap";
// import { useEffect } from "react";
// import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";
// export default function RazorPay() {
//   const [amount, setamount] = useState();
//   const { code } = useParams([]);
//   const cartid =[code];
// console.log(cartid)
//   let resBody = {
//     paymentId: "",
//     orderId: "",
//     signature: "",
//     amount: amount,
//     status: "",
//     userId: JSON.parse(sessionStorage.getItem("UserId")),
//   };

//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   useEffect(() => {
//     loadScript("https://checkout.razorpay.com/v1/checkout.js");
//   });

//   let changeHandle = (e) => {
//     setamount(e.target.value);
//   };

//   let PaymentRecord = async () => {
//     let url = "http://localhost:8080/order-payment";

//     console.log(resBody);
//     let res = await axios.post(url, resBody);

//     console.log(res.data);
//   };
//   useEffect(() => {
//     payNow(); // Call payNow when the component renders
//   }, []);
//   let payNow = async (e) => {
//     // e.preventDefault();
//     if (amount == "")
//       Swal.fire("Enter Valid Amount", "Total mount is not valid", "question");
//     else {
//       console.log("payment initiated");
//       let body = {
//         id: 1,
//         amount: 100,
//       };
//       let res = await axios.post("http://localhost:8080/api/create-order", body);
//       console.log(res.data.status);
//       if (true) {
//         let options = {
//           key: "rzp_test_Nn6ggglOV1iQpK",
//           currency: "INR",
//           amount: 1 * 100,
//           name: "Welcome to onestop",
//           description: "Test Wallet Transaction",
//           image:
//             "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
//         //   order_id:1,
//           handler: function (response) {
//             console.log(response.razorpay_payment_id);
//             // console.log(response.razorpay_order_id);
//             console.log(response.razorpay_signature);

//             resBody.signature = response.razorpay_signature;
//             resBody.paymentId = response.razorpay_payment_id;
//             resBody.orderId = response.razorpay_order_id;
//             resBody.status = "Success";
//             PaymentRecord();
//             alert("Payment succefull!!");
//           },
//           prefill: {
//             name: "omkar",
//             email: "omkarpatil5607@gmail.com",
//             contact: "8767627575",
//           },
//           notes: {
//             address: "onestop.pvt.ltd",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };
        
//         var rzp1 = new window.Razorpay(options);
//         rzp1.on("payment.failed", function (response) {
//           console.log(response.error.code);
//           console.log(response.error.description);
//           console.log(response.error.source);
//           console.log(response.error.step);
//           console.log(response.error.reason);
//           console.log(response.error.metadata.order_id);
//           console.log(response.error.metadata.payment_id);
//           resBody.status = "Failed";
//           PaymentRecord();
//         });
//       }
//         rzp1.open();
//       }
    
//   };

//   return (
//     <div className="container h-100">

// {/* <button className='hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'onClick={payNow}>
//   Submit
// </button>         */}
//       </div>
    
//     );
// }




import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useParams,useNavigate } from "react-router-dom";
export default function RazorPay() {

  const [amount, setamount] = useState();
  const { code } = useParams([]);
  // const cartid =[code];
  const Amount=sessionStorage.getItem('total')
  const navigate=useNavigate();
// console.log(cartid)
  let resBody = {
    paymentId: "",
    orderId: "",
    signature: "",
    amount: amount,
    status: "",
    userId: JSON.parse(sessionStorage.getItem("UserId")),
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
    payNow();
    // setTimeout(()=>{
    //   navigate("/bill/" + code);
    // },3000)
  });

  let changeHandle = (e) => {
    setamount(e.target.value);
  };

  let PaymentRecord = async () => {
    let url = "http://localhost:8080/order-payment";

    console.log(resBody);
    let res = await axios.post(url, resBody);

    console.log(res.data);
  };

  let payNow = async (e) => {
   
    if (amount == "")
      Swal.fire("Enter Valid Amount", "Total mount is not valid", "question");
    else {
      console.log("payment initiated");
      let body = {
        id: 1,
        amount: amount,
      };
      let res = await axios.post("http://localhost:8080/api/create-order", body);
      console.log(res.data);
      if (true) {
        let options = {
          key: "rzp_test_Nn6ggglOV1iQpK",
          currency: "INR",
          amount:Amount * 100,
          name: "Welcome to onestop ",
          description: "Test Wallet Transaction",
          image:
            "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
          order_id: res.data.orderId,
        function (response) {
          console.log("reposonce")
            console.log(response.razorpay_payment_id);
            console.log(response.razorpay_order_id);
            console.log(response.razorpay_signature);

            resBody.signature = response.razorpay_signature;
            resBody.paymentId = response.razorpay_payment_id;
            resBody.orderId = response.razorpay_order_id;
            resBody.status = "Success";
            PaymentRecord();
            alert("Payment succefull!!");
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
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          console.log(response.error.code);
          console.log(response.error.description);
          console.log(response.error.source);
          console.log(response.error.step);
          console.log(response.error.reason);
          console.log(response.error.metadata.order_id);
          console.log(response.error.metadata.payment_id);
          resBody.status = "Failed";
          PaymentRecord();
        });

        rzp1.open();
      }
    }
  };

  return (
    <div className="container h-1">
    <button onClick={payNow}></button>
    </div>
  );
}
