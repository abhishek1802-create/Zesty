import React from "react";
import { getFormattedPrice } from "../../../utils/constants";

const CartSummary = ({cartItems}) => {
  return (
    <div className="bg-white rounded-lg shadow-md mt-6 p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Bill Details</h2>
      <div className="space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Item Total</span>
          <span>
            ₹
            {getFormattedPrice(
              cartItems.reduce(
                (total, item) =>
                  total + (item.price ? item.price : item.defaultPrice),
                0
              )
            )}
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span>₹40.00</span>
        </div>
        <div className="border-t border-gray-200 pt-2 mt-2">
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total Amount</span>
            <span>
              ₹
              {getFormattedPrice(
                cartItems.reduce(
                  (total, item) =>
                    total + (item.price ? item.price : item.defaultPrice),
                  0
                ) + 4000
              )}
            </span>
          </div>
        </div>
      </div>
      <button className="w-full bg-green-500 text-white py-3 rounded-lg mt-6 hover:bg-green-600 transition-colors">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
