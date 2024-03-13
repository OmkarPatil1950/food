import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StarRatingInput from './sort';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [product, setProduct] = useState({});
  // const [cartDetails, setCartDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { code } = useParams();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const p_Id = code; // Replace with actual product ID
  const [originalPrice, setOriginalPrice] = useState(0); // Store the original price
  const [discountedPrice, setDiscountedPrice] = useState(originalPrice);
  // const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  // const [b, setb] = useState([]);
  const [customer, setCustomer] = useState({});
  const email_id = sessionStorage.getItem('email');
  // const tryonimage=product.p_Image;
  // console.log("try on image is ")
  // console.log(tryonimage)

  useEffect(() => {
    // Fetch product details by ID
    fetch(`http://localhost:8080/api/productsById/${p_Id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // sessionStorage.setItem("tryonimage", data.p_Image);
        console.log("--------------------")
        // console.log(sessionStorage.getItem("tryonimage"))
        setOriginalPrice(data.p_Price);
          
        setDiscountedPrice((1 - 0.1) * originalPrice * quantity);
      })
      .catch((err) => console.log(err));

    fetch(`http://localhost:8080/api/productDetailsById/${p_Id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data.p_Description);
        console.log(data);
      })
      .catch((err) => console.log(err));

    fetch(`http://localhost:8080/api/getbyemail/${email_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data[0].customer_Id);
        console.log("customer")
        console.log(data)
        console.log(customer)
      })
      .catch((err) => console.log(err));
  }, [email_id]);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setDiscountedPrice((1 - 0.1) * originalPrice * (quantity - 1));
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
    setDiscountedPrice((1 - 0.1) * originalPrice * (quantity + 1));
  };
  // const handletryon =()=> {
  //   navigate('/tryon');
  // }
  sessionStorage.setItem("Quantity", quantity);
  const handleBuyNow = () => {
    if (sessionStorage.getItem('email')) {
      navigate('/payment/' + product.p_Id);
    } else {
      alert('please login');
      navigate('/login')
    }
  };

  const handleAddToCart = () => {
    if (sessionStorage.getItem('email')) {
      setIsAddedToCart(true);
      console.log("Add to cart")
      console.log(discountedPrice)
      const cartData = {
        totalCost: discountedPrice, // Replace with the actual total cost
        customer: {
          customer_Id: customer, //
        },
        quantity: quantity, // Replace with the actual quantity
        product: {
          p_Id: product.p_Id,
        }
      };

      if (productDetails) {

        // Send a POST request to the API endpoint
        fetch('http://localhost:8080/api/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartData),

        })
          .then((response) => {

            if (response.ok) {
              alert('Item added to cart!');
              console.log(response)
            }
            else {
              alert('Failed to add item to cart.');

            }

          }).catch((error) => {
            // alert('Failed to add item to cart: ' + error.message);
          });
      }
    } else {
      alert("plaese login");
      navigate('/login')
    }
   
    
  };


  return (
    <div>
      <div className="flex justify-center h-200 w-10/12 ml-20 mt-24">
        <div className="border border-gray-300 rounded-md p-8 mb-20">
          <div className="flex">
            <div className="w-15cm" >
              <Card className="w-30 ml-10">
                <Card.Img variant="top" className='h-64 hover:transform hover:scale-125' src={product.p_Image} />
              </Card>
            </div>
            <div className="w-1/2 ml-5">
              <Card.Body className="ml-16">
                <Card.Title className="text-xl font-bold">
                  <h3>{product.p_Name}</h3>
                </Card.Title>
                <Card.Text>
                  <b>Price:</b> &#8377;{product.p_Price}
                  <br />
                  <b>Discount:</b> 10%
                  <br />
                  <b>Discounted Price:</b> &#8377;{(1 - 0.1) * originalPrice * quantity.toFixed(2)}
                  <br />
                  <Card.Text>
                    <b>Product Description:</b> {JSON.stringify(productDetails)}
                  </Card.Text>
                  <b>Quantity:</b>
                  <button className="border-2 bg-red-500  py-2 px-2.5 text-sm" onClick={handleQuantityDecrease}>
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button className="border-2 bg-green-500  py-2 px-2.5 text-sm" onClick={handleQuantityIncrease}>
                    +
                  </button>
                  <StarRatingInput/>
                </Card.Text>
                
              </Card.Body>
              {/* <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2" onClick={handletryon}>
                 Try this out 
                </button>*/}
              <div className="flex justify-center mt-4"> 
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleAddToCart}
                >
                  {isCheckboxChecked ? 'Add to Cart - with Discounted Price' : 'Add to Cart'}
                </button>
                
                {/* {isAddedToCart && (
                  <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2">
                    Added to Cart
                  </button>
                )} */}
                {/* <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleBuyNow}>
                  Buy Now
                </button> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
