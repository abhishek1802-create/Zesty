import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import logoImage from "../../../Assets/images.png"
import { CDN_URL } from "../../../utils/constants";
import { decrementCartItem, removeItem } from "../../slice/cartSlice";
import CartSummary from "../CartSummary/CartSummary";
import { getFormattedPrice } from "../../../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch  = useDispatch();
  const navigate = useNavigate();
 
  const removeItemFromCart = (id) => {
     dispatch(removeItem(id));
     dispatch(decrementCartItem(id));
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <img
          src={logoImage} // Make sure to add an empty cart image
          alt="Empty Cart"
          className="w-64 h-44 mb-8"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-8">
          Add some delicious items from the menu
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors" 
         onClick={() => navigate("/")}        
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Your Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-start border-b border-gray-200 p-4 last:border-b-0"
            >
              <img
                src={`${CDN_URL}/${item.imageId}`}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              
              <div className="ml-4 flex-grow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      {item.isVeg ? (
                        <span className="w-4 h-4 border-2 border-green-600 flex items-center justify-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        </span>
                      ) : (
                        <span className="w-4 h-4 border-2 border-red-600 flex items-center justify-center">
                          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        </span>
                      )}
                      <span className="text-sm text-gray-500 ml-2">
                        {item.itemAttribute.portionSize}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-800">
                      ₹{getFormattedPrice(item.price ? item.price : item.defaultPrice)}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="px-3 py-1 hover:bg-gray-100">-</button>
                    <span className="px-3 py-1 border-x border-gray-300">1</span>
                    <button className="px-3 py-1 hover:bg-gray-100">+</button>
                  </div>
                  <button className="text-red-500 hover:text-red-600" onClick={() => removeItemFromCart(item?.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CartSummary cartItems={cartItems}/>
      </div>
    </div>
  );
};

export default Cart;

