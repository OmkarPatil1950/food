
import { useEffect, useState } from "react"
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { ChevronDownIcon } from '@heroicons/react/solid'
import { Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Demo from "./demo";
import Example from "./sort";
// const products = [
//   {
//       Id:1,
//     name: 'Kitchen Appliances',
//     description: 'Work from home accessories',
//     imageSrc: '../images/kit01.png',
//     imageAlt: 'Pressure Cooker',
//     href: '#',
//     price:580,
//   },
//   {

//     Id:2,
//   name: 'Kitchen Appliances',
//   description: 'Work from home accessories',
//   imageSrc: '../images/kit02.png',
//   imageAlt: 'Gas Stove (2 Burners)',
//   href: '#',
//   price:3200,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit03.png',
// imageAlt: 'Gas Stove (1 Burners)',
// href: '#',
// price:2200,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit04.png',
// imageAlt: 'Appam Maker',
// href: '#',
// price:2750,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit05.png',
// imageAlt: 'Vegetable & Fruit Chopper',
// href: '#',
// price:300,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit06.png',
// imageAlt: 'Cookware Set',
// href: '#',
// price:2500,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit07.png',
// imageAlt: 'Manual Gas Stove (3 Burners)',
// href: '#',
// price:5000,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit08.png',
// imageAlt: 'Kitchen Plastic Jars ',
// href: '#',
// price:250,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit09.png',
// imageAlt: 'prayati Kitchen Containers Set',
// href: '#',
// price:1500,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit10.png',
// imageAlt: '5 Ltr Cooker',
// href: '#',
// price:850,
// },

//  {
//       Id:1,
//     name: 'Kitchen Appliances',
//     description: 'Work from home accessories',
//     imageSrc: '../images/kit11.png',
//     imageAlt: '3 Ltr Cooker',
//     href: '#',
//     price:700,
//   },
//   {
//     Id:1,
//   name: 'Kitchen Appliances',
//   description: 'Work from home accessories',
//   imageSrc: '../images/kit12.png',
//   imageAlt: '3 L Pressure Cooker',
//   href: '#',
//   price:850,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit13.png',
// imageAlt: 'Manual Gas Stove',
// href: '#',
// price:400,
// },

// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit14.png',
// imageAlt: 'Glass Manual Gas Stove',
// href: '#',
// price:500,
// },
// {
//   Id:1,
// name: 'Kitchen Appliances',
// description: 'Work from home accessories',
// imageSrc: '../images/kit15.png',
// imageAlt: 'Grill Pan 23 cm',
// href: '#',
// price:850,
// },
// ]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Productsbycat() {
  const { code } = useParams();
  const [Products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState('asc');
  const handleSortAscending = () => {
    setSortOrder('asc');
  };
  const handleSortDescending = () => {
    setSortOrder('desc');
  };
  
  console.log(code + "------------------------------------------")
  useEffect(() => {
    fetch("http://localhost:8080/api/productsByCat/" + code).then(res => res.json())
      .then(result => {
        setProducts(result);
        console.log(result);
      }
      );
    console.log(Products);
  }, []);
  const sortedEmployees = [...Products].sort((a, b) => a.p_Price - b.p_Price);
  const sortedEmployeesDesc = [...Products].sort((a, b) => b.p_Price - a.p_Price);
  const sortedArray = sortOrder === 'asc' ? sortedEmployees : sortedEmployeesDesc

  return (
    <div className="bg-white">
      {/* <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          sort by
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>
      </Menu> */}
      <div>
        <Menu as="div" className="relative inline-block text-left ml-16 py-2">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-none px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              sort
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute  z-10 mt-2  w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                    onClick={handleSortAscending}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Price low-high
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={handleSortDescending}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Price high-low
                    </a>
                  )}
                </Menu.Item>

              </div>
            </Menu.Items>
          </Transition>
        </Menu>

      </div>
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" >
          {sortedArray.map((cat) => (
            <a key={cat.id} href={`/productdetails/${cat.p_Id}`}>
              <Card style={{ margin: "2%", backgroundColor: "white" }} className="card">
                <Card.Img variant="top" src={cat.p_Image} style={{ width: '100%', height: '180px' }} />
                <Card.Body>
                  <Card.Title >{cat.p_Name}</Card.Title>
                  <Card.Title style={{ color: 'blue' }}>&#8377; {cat.p_Price}</Card.Title>
                  {/* Additional card text or content */}
                </Card.Body>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
