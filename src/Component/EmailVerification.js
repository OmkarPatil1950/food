import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { border } from '@mui/system';

const EmailVerification = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [concatenatedNum, setConcatenatedNum] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // Update the concatenatedNum whenever any of the individual numbers change
    const concatenated = num1 + num2 + num3 + num4;
    setConcatenatedNum(concatenated);
  }, [num1, num2, num3, num4]);


  const location = useLocation();
  const { state } = location;

  const first_name = state?.data.first_name;
  const last_name = state?.data.last_name;
  const username = state?.data.username;
  const mobile_num = state?.data.mobile_num;
  const address = state?.data.address;
  const email_id = state?.data.email_id;
  const password = state?.data.password;
  const { randomNumber } = location.state || {};
  console.log(first_name);
  console.log("verify otp status")
  console.log(randomNumber)
  const [otp, setOtp] = useState('');
console.log(otp);
 

  const handleVerifyAccount = async () => {
    console.log(otp)
    console.log(randomNumber)
    if (otp === randomNumber) {
      try {
        const response = await fetch(`http://localhost:8080/api/addcustme`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            username,
            mobile_num,
            address,
            email_id,
            password,
          }),
        });


        if (response.ok) {
          alert("Validated .................!!!");
          navigate("/")
        } else {
          alert("OTP does not match");
        }
      } catch (error) {
        console.log("Error:", error);
        alert("Wrong OTP ......!!!");
      }
    }
    else {
      alert("Invalid otp")
    }


  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl" style={{ marginLeft: '10rem' }}>
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {email_id}</p>
            </div>
          </div>

          <div>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              containerStyle={{ width: '6rem' }}
              inputStyle={{ width: '6rem', border: '1px solid black' }}
              renderInput={(props) => <input {...props} className='h-16 ml-2 disabled:w-1em w-32 border border-black' />}
            />

          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm w-24 ml-32 mt-4" onClick={handleVerifyAccount}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification; 