import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export default function Fly() {
  const [customer, setCustomer] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const email_id = sessionStorage.getItem('email');

  useEffect(() => {
    if (sessionStorage.getItem('email')) {
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array to run only once

  const handlePro = () => {
    fetch(`http://localhost:8080/api/getbyemail/${email_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data[0]);
        console.log('customer');
        // console.log(data);
        console.log(customer);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {isLoggedIn && (
        <Popover className="relative ml-2">
          <Popover.Button className="inline-flex items-center  gap-x-1 text-sm font-semibold leading-6 text-white">
            {/* <span className='text-sm' onClick={handlePro}>Profile</span> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" onClick={handlePro}>
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-x-2"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-2"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-5 flex w-screen max-w-max -translate-x-full px-4">
              <div className="w-full text-white bg-main-color">
                <div className="container mx-auto my-5 p-5">
                  <div className="md:flex no-wrap md:-mx-2">
                    <div className="w-full md:w-9/12 mx-2 h-64">
                      <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                          <span className="text-green-500">
                            <svg
                              className="h-5 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 22a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 100-14 7 7 0 000 14zm0-8a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1zm0-4a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </span>
                          <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700">
                          <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                              <div className="px-1 py-2 font-semibold">First Name</div>
                              <div className="px-2 py-2">{customer.first_name}</div>
                            </div>
                            <div className="grid grid-cols-2">
                              <div className="px-1 py-2 font-semibold">Last Name</div>
                              <div className="px-4 py-2">{customer.last_name}</div>
                            </div>
                            <div className="grid grid-cols-2">
                              <div className="px-1 py-2 font-semibold">Email</div>
                              <div className="px-1 py-2 mr-2">{customer.email_id}</div>
                            </div>
                            <div className="grid grid-cols-2"></div>
                            <div className="grid grid-cols-2">
                              <div className="px-1 py-2 font-semibold">Address</div>
                              <div className="px-2 py-2">{customer.address}</div>
                            </div>
                            <div className="grid grid-cols-2">
                              <div className="px-1 py-2 font-semibold">Mobile Num</div>
                              <div className="px-1 py-2">{customer.mobile_num}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      )}
    </>
  );
}
