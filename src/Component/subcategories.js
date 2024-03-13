/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import Corosol from "./CarouselComponent"
{/* temparory */ }
// const products = [
//     {
//         Id:1,
//       name: 'Kitchen Appliances',
//       description: 'Work from home accessories',
//       imageSrc: '../images/kit01.png',
//       imageAlt: 'Sub category of kitchen',
//       href: '#',
//     },
//     {
//         Id:2,
//       name: 'Self-Improvement',
//       description: 'Journals and note-taking',
//       imageSrc: '../images/fur01.png',
//       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//       href: '#',
//     },
//     // {
//     //   name: 'Travel',
//     //   description: 'Daily commute essentials',
//     //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
//     //   imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//     //   href: '#',
//     // },
// ]
//  {/* temparory */}


export default function Subcategory() {
    const { code } = useParams();
    const [Category, setCategory] = useState([]);
    const navigate = useNavigate();
    console.log(code + "------------------------------------------")
    useEffect(() => {
        fetch("http://localhost:8080/api/subcategories/" + code).then(res => res.json())
            .then(result => {
                setCategory(result);
                console.log(result)
            }
            );
        console.log(Category);
    }, []);
    const handlesubcategory = (category_Id) => {
        navigate("/productsbycat/" + category_Id)
    }
    return (
        <div>
            <Corosol />
            <div className="bg-gray-100 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-1 py-20">
                    <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
                    <div className="mx-auto max-w-2xl py-10 sm:py-20 lg:max-w-none lg:py-8">
                        <div className=" flex flex-wrap justify-start -mx-2 items-start ">
                            {Category.map((cat) => (
                                // <div key={product.category_Id} className="group relative px-4">
                                //     <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                //         <img
                                //             src={product.category_Img_Path}
                                //             alt={product.category_Name}
                                //             className="h-full w-full object-cover object-center"
                                //         />
                                //     </div>
                                //     <h3 className="mt-6 text-sm text-gray-500" onClick={()=>handlesubcategory(product.category_Id) }>
                                //         <a href={product.href}>
                                //             {/* <span className="absolute inset-0" /> */}
                                //             {product.category_Name}

                                //         </a>
                                //     </h3>
                                //      <p className="text-base font-semibold text-gray-900">{product.description}</p> 
                                // </div>
                                <a key={cat.id} href={`/productsbycat/${cat.category_Id}`} className="hover:transition-transform hover:scale-110 text-center ml-2 ">
                                    <Card className="card">
                                        <Card.Img variant="top" src={cat.category_Img_Path} style={{ width: '250px', height: '180px' }} />
                                        <Card.Body>
                                            <Card.Title className="text-black">{cat.category_Name}</Card.Title>
                                            {/* Additional card text or content */}
                                        </Card.Body>
                                    </Card>
                                </a>

                            ))}
                            {/* temparory */}
                            {/* {products.map((p) => (
                            <div key={p.name} className="group relative px-4">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={p.imageSrc}
                                        alt={p.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500" onClick={()=>handlesubcategory(p.Id) }>
                                    <a href={p.name}>
                                        <span className="absolute inset-0" />
                                        {p.name}
                                        
                                    </a>
                                </h3>
                                {/* {/* <p className="text-base font-semibold text-gray-900">{product.description}</p> /*} */}
                        </div>
                        {/* ))} */}
                        {/* temparory */}
                    </div>


                </div>

            </div>
        </div>

    )
}
