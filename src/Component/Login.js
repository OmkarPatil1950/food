import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../Service/UserService";

export default function CardForm() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState("");
  const [showSlideMessage, setShowSlideMessage] = useState(false);
  const [showSlideErrorMessage, setShowSlideErrorMessage] = useState(false);
  const [ShowSlideAlreadyloggedIn, setShowSlideAlreadyloggedIn] =
    useState(false);
  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrormsg("Please enter the required fields");
      // alert("Please enter the required fields");
      setShowSlideErrorMessage(true);
      setTimeout(() => {
        setShowSlideErrorMessage(false);
      }, 1000);
      return;
    }

    if (!localStorage.getItem("email")) {
      try {
        const response = await fetch("http://localhost:8080/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        // ...
        if (response.ok) {
          sessionStorage.setItem("email", email);
        
          setLoggedIn(true);
          setShowSlideMessage(true);
          await new Promise((resolve) => {
            setTimeout(() => {
              setShowSlideMessage(false);
              resolve(); // Resolve the promise after the timeout
            }, 3000);
          });

          // Call UserService.getUser(email) after a successful login
          UserService.getUser(email)
            .then((response) => {
              console.log(response.data)
              if (response.status === 200) {
                const data = response.data;
                console.log(data)
                console.log("---------------------------------",data.user_id)
                console.log("----------------------------------",data.plan_id)
                sessionStorage.setItem('id', data.user_id);
                sessionStorage.setItem('plan_id',data.plan_Id);
                sessionStorage.setItem("user_name",data.name);
              } else {
                // Handle other status codes here
                console.error("Error fetching profile data.");
                // You can set an error message state here to display an error message to the user.
              }
            })
            .catch((error) => {
              console.error("Error fetching profile data:", error);
            });

          navigate("/");
        } else {
          setErrormsg("Invalid username or password");
          setShowSlideErrorMessage(true);
          setTimeout(() => {
            setShowSlideErrorMessage(false);
          }, 3000);
          // alert("Invalid username or password");
        }
        // ...
      } catch (err) {
        setErrormsg("Invalid username or password");
        setShowSlideErrorMessage(true);
        setTimeout(() => {
          setShowSlideErrorMessage(false);
        }, 3000);
      }
    } else {
      setErrormsg("Already logged in !!!............");
      setShowSlideErrorMessage(true);
      setTimeout(() => {
        setShowSlideErrorMessage(false);
      }, 3000);
    }
  };

  const handleLogout = (e) => {
    // e.preventDefault();
    setLoggedIn(false);
    alert("Logged out successfully");
    sessionStorage.removeItem("email");
    navigate("/");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    const input = event.target.value;
    const emailRegex = /^[a-zA-Z0-9@.]+$/;

    if (input === "" || emailRegex.test(input)) {
      setemail(input);
    }
  };

  return (
    <>
      {/*<!-- Component: Card with form --> */}

      <form className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 text-center">
            <h3 className="text-xl font-medium text-slate-700">Login</h3>
          </header>
          <div className="flex flex-col space-y-8">
            {/*      <!-- Input field --> */}
            <div className="relative my-6 self-center">
              <input
                id="id-b03"
                type="email"
                placeholder="Your email"
                value={email}
                required
                className="peer relative h-10 w-96 rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={handleEmailChange}
              />
              <label
                htmlFor="id-b03"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:before:bg-transparent"
              >
                Your email
              </label>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Type your email address</span>
              </small>
            </div>
            {/*      <!-- Input field --> */}
            <div className="relative my-6 self-center">
              <input
                id="id-b13"
                type="password"
                placeholder="Your password"
                value={password}
                className="peer relative h-10 w-96 rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={handlePasswordChange}
                required
              />
              <label
                htmlFor="id-b13"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your password
              </label>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Type your password</span>
              </small>
            </div>

            {/*  <!-- Action base sized basic button --> */}
            <div className="flex p-6 self-center">
              <button
                className="inline-flex h-10 mr-2 w-4 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-20 text-sm font-medium text-white hover:bg-emerald-600"
                onClick={handleLogin}
              >
                <span>Login</span>
              </button>
              <button
                className="inline-flex h-10  w-4 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-20 text-sm font-medium text-white hover:bg-emerald-600"
                onClick={handleLogout}
              >
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      {showSlideMessage && (
        <div>
          <div
            id="toast-success"
            class="absolute top-24 py-10 right-10 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Check icon</span>
            </div>
            <div class="ml-3 text-sm text-black font-normal">
              Logged in successfully
            </div>
            <button
              type="button"
              class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      {showSlideErrorMessage && (
        <div
          id="toast-danger"
          class="absolute top-3 py-10 right-10 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ml-3 text-black text-sm font-normal">{errormsg}</div>
          <button
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-danger"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}

      {/*<!-- End Card with form --> */}
    </>
  );
}
