///26-05-2023
import React from 'react'

export default function About() {
    return (
        <div>
             {/*This heading of the page in bold with black as text-color*/}
            <h1 class="text-3xl lg:text-4xl text-center font-bold leading-9 text-gray-800 dark:text-black">About Us</h1>
            {/* Main section  this is the external div and further divided into 2 sections left and right */}
            <div class="flex flex-col lg:flex-row justify-center">
                {/* Left section this section contains conntent of this page having full width of that perticular area*/}
                <div class="w-full lg:w-5/12 mr-10 flex flex-col justify-center ml-6">
                    
                    {/*The paragraph tag includes all the possible text in it with heading in bold*/}
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-black">
                        <b>Our Story:</b><br></br>
                        Onestop was founded with a vision to create an online destination where shoppers could discover an extensive range of products from various categories, all in one convenient place. Our journey began with a small team of dedicated individuals who shared a common goal: to build an e-commerce platform that would revolutionize the way people shop online.

                        <br />
                        <b>Our Mission:</b><br></br>
                        Our mission is to provide our customers with a seamless and enjoyable shopping experience. We strive to offer a diverse selection of products that cater to various interests and needs, ensuring that there is something for everyone. We are committed to constantly improving our platform, enhancing the user experience, and staying up-to-date with the latest trends and innovations in the e-commerce industry.

                        <br />
                        <br />

                        <b>Join Our Community:</b><br></br>

                        We invite you to join our growing community of satisfied customers. Explore our wide range of products, take advantage of our exciting deals and promotions, and discover new items that suit your preferences. Sign up for our newsletter to stay updated on the latest product releases, discounts, and exclusive offers.

                        Thank you for choosing Onestop as your preferred online shopping destination. We look forward to serving you and exceeding your expectations. Happy shopping!</p>
                {/*The end of the left section */}
                </div>
                
                {/* Right section includes the image with heigth and width as full i.e 100% src gives the path of the image in locl machine*/}
                <div>
                    <img class="w-full h-screen pt-8 pb-8 pr-8" src="https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600" alt="A group of People" />
                </div>
                {/*the end of right section */}
            </div>
            {/*The end of main conatiner */}

           
        </div>
    )
}
