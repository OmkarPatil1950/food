import React, { useEffect, useState } from "react";
import UserService from "../Service/UserService";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function ProfileDisplay() {
  const [profileData, setProfileData] = useState({
    name: "",
    contact_num: "",
    email: "",
    gender: "",
    address: "",
  });
  const email = sessionStorage.getItem("email");
  const navigate = useNavigate();
  useEffect(() => {
    UserService.getUser(email).then((response) => {
      setProfileData(response.data);
    });
  }, [email]);
  const handleEdit = () => {
    navigate("/edit-profile");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <h2>Profile Information</h2>
        <p>Name: {profileData.name}</p>
        <p>Contact Number: {profileData.contact_num}</p>
        <p>Email: {profileData.email}</p>
        <p>Gender: {profileData.gender}</p>
        <p>Address: {profileData.address}</p>
        {/* <Link
          to={{
            pathname: "/edit-profile",
            state: { profileData }, // Pass the profileData as state
          }}
        > */}
        <Button
          style={{
            border: "2px solid #007bff",
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleEdit}
        >
          Edit
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default ProfileDisplay;
