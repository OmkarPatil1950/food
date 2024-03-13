import React, { useState } from "react";
import UserService from "../Service/UserService";
import { useEffect } from "react";
import { SystemUpdateOutlined } from "@mui/icons-material";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfile = (props) => {
  const [profileData, setProfileData] = useState({
    name: "",
    contact_num: "",
    email: "",
    gender: "",
    address: "",
    plan_Id: "",
    points: "",
    plan_Startdate: "",
    plan_endDate: "",
  });

  const [formData, setFormData] = useState({
    name: profileData.name || "",
    contact_num: "" || profileData.contact_num,
    email: "" || profileData.email,
    gender: "" || profileData.gender,
    address: "" || profileData.address,
    plan_Id: "" || profileData.plan_Id,
    points: "" || profileData.points,
    plan_Startdate: "" || profileData.plan_Startdate,
    plan_endDate: "" || profileData.plan_Enddate,
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const email = sessionStorage.getItem("email");

  useEffect(() => {
    UserService.getUser(email)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setProfileData(data);
          setFormData({
            ...data, // Pre-fill the form with profileData
          });
        } else {
          console.error("Error fetching profile data.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.contact_num.trim()) {
      newErrors.contact_num = "Contact number  is required";
    }

    if (!/^\d{10}$/.test(formData.contact_num)) {
      newErrors.contact_num = "Contact Number must be 10 digits";
    }

    // Add more validations for other fields here

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "----------------------------------");
    if (validateForm()) {
      UserService.updateUser(formData.user_id, formData)
        .then((response) => {
          console.log(response.status);
          if (response.status >= 200 || response.status <= 205) {
            // User created successfully
            setTimeout(() => {
              navigate("/showProfile");
            }, 1000);

            toast.success("The Profile Updated Successfully");
          } else if (response.status === 409) {
            // User already exists, extract the error message
            response.json().then((data) => {
              toast.error(`The Profile Updation Failed`);
            });
          } else {
            // Handle other status codes as needed
            toast.warning("Updation Failed User Already Exists");
          }
        })
        .catch((error) => {
          // Handle other errors (e.g., network issues)
          console.error(error);
          toast.error("Updation Failed");
        });
    }
  };

  const handleDelete = (user_id) => {
    UserService.deleteUser(user_id)
      .then((response) => {
        if (response.status >= 200 && response.status <= 205) {
          toast.success("Deleted Successfully");
        } else {
          toast.error("Deletion Failed");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Deletion Failed");
      })
      .finally(() => {
        setShowConfirmationModal(false);
      });
  };
  const handleModeldelete = () => {
    setShowConfirmationModal(true);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contact_num"
          >
            Contact Number
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.contact_num ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="contact_num"
            type="text"
            maxLength={10}
            minLength={10}
            placeholder="Contact Number"
            value={formData.contact_num}
            onChange={handleChange}
          />
          {errors.contact_num && (
            <p className="text-red-500 text-xs italic">{errors.contact_num}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className={`shadow appearance-none border ${
              errors.gender ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-xs italic">{errors.gender}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.address ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="text-red-500 text-xs italic">{errors.address}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-emerald-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleModeldelete}
          >
            Delete
          </button>
        </div>

        {showConfirmationModal && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md">
              <p className="text-xl font-semibold mb-4">Confirm Deletion</p>
              <p className="mb-4">
                It will delete your account permanently,Are you sure you want to
                delete this user ?
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  onClick={() => setShowConfirmationModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleDelete(formData.user_id)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
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
    </div>
  );
};

export default EditProfile;
