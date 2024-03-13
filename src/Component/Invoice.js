import React from "react";
import { useState } from "react";


export default function Invoice() {
    
    
        const handleRemove = () => {
   
            console.log(removedata);
          };
    const [removedata,setRemovedata]= useState([0]);   
    //   const { billingData, calculateTotalCost } 
     
      return (
        <div className="invoice">
          <h2>Invoice</h2>
          <table className="border-collapse border">
            {/* ... Render the invoice table with the billing data ... */}
            <table className="border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Product Image</th>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Price/unit</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Total Cost</th>
              <th className="border px-4 py-2">Discounted Price</th>
            </tr>
          </thead>
          <tbody>
        
                   {/* {billingData.map((billingItem, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  <img className="h-64" src={billingItem[1]} alt="Product" />
                </td>
                <td className="border px-4 py-2">{billingItem[2]}</td>
                <td className="border px-4 py-2">&#8377;{billingItem[3]}</td>
                <td className="border px-4 py-2">{billingItem[6]}</td>
                <td className="border px-4 py-2">&#8377;{billingItem[7]}</td>
                <td className="border px-4 py-2">
                  &#8377;
                  {((billingItem[6] * billingItem[3]) - (billingItem[6] * billingItem[3]) * 0.1).toFixed(2)}
                </td>
                {handleRemove(billingItem[8])}
              </tr>
            ))} */}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <b>Total Cost :</b>
              </td>
              <td>
                <b>&#8377;{}</b>
              </td>
            </tr>
          </tfoot>
        </table>
          </table>
          <div className="total-cost">
            <b>Total Cost:</b> &#8377;{}
          </div>
        </div>
      );
    }
  
  