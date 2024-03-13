// import React, { useEffect, useState } from "react";
// import { Button, Table } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";

// export default function UpdateSelected() {
//   const { url, code } = useParams();
//   const navigate = useNavigate();
//   const [category, setCategory] = useState({});

//   useEffect(() => {
//     const apiUrl = `http://localhoost:8080/admins/${url}/${code}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => setCategory(data))
//       .catch((error) => console.log(error));
//   }, [url, code]);

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setCategory((values) => ({ ...values, [name]: value }));
//   };

//   const handleImageChange = (event) => {
//     const name = event.target.name;
//     const file = event.target.files[0];
  
//     if (file) {
//       setCategory((values) => ({ ...values, [name]: "../images/"+file.name }));
//     } else {
//       setCategory((values) => ({ ...values, [name]: "" }));
//     }
//   };
  
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let data = JSON.stringify(category);
//     fetch(`http://localhoost:8080/admins/${url}/${code}`, {
//       method: "PUT",
//       headers: { "Content-type": "application/json" },
//       body: data,
//     })
//       .then((res) => {
//         if (res.ok) {
//           alert("Updated record successfully");
//           navigate("/api/admin");
//         } else {
//           alert("Failed to update record");
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   const renderTableData = () => {
//     return Object.keys(category).map((key, index) => {
//       let value = category[key];
//       if (Array.isArray(value) || typeof value === "object") {
//         return null;
//       }
//       return (
//         <tr key={index}>
//           <td>{key}</td>
//           <td>
//             {typeof value === "string" && value.match(/\.(jpg|png|jpeg)$/i) ? (
//               <>
//                 <input
//                   type="file"
//                   accept=".jpg,.png,.jpeg"
//                   name={key}
//                   onChange={handleImageChange}
//                 />
//                 {value.startsWith("data:") ? (
//                   <img src={value} alt="Image" style={{ maxWidth: "100px" }} />
//                 ) : (
//                   <span>{value}</span>
//                 )}
//               </>
//             ) : (
//               <input
//                 type="text"
//                 name={key}
//                 value={value || ""}
//                 onChange={handleChange}
//               />
//             )}
//           </td>
//         </tr>
//       );
//     });
//   };
  

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <form onSubmit={handleSubmit}>
//         <Table striped bordered hover style={{ width: "fit-content" }}>
//           <tbody>{renderTableData()}</tbody>
//         </Table>
//         <Button variant="primary" type="submit">
//           Update
//         </Button>
//       </form>
//     </div>
//   );
// }
