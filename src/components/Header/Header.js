import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logoImage from "../../../Assets/images.png";
import { FaShoppingCart } from "react-icons/fa";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const Header = () => {
  const itemQuantity = useSelector((store) => store.cart.cartItemsNumber)
  const onlineStatus = useOnlineStatus();
  
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Container */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  className="h-10 w-auto hover:opacity-90 transition-opacity"
                  src={logoImage}
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Navigation Items */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center gap-8">
                <li className="flex items-center">
                  {onlineStatus ? (
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-sm font-medium text-green-600">
                        Online
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                      <span className="text-sm font-medium text-red-600">
                        Offline
                      </span>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-all"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/suggestion"
                    className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-all"
                  >
                    Suggestions
                  </Link>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-all">
                    Login
                  </button>
                </li>
                <li>
                  <Link to="/cart">
                    <button
                      className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50 transition-all"
                      aria-label="Shopping cart"
                    >
                      <FaShoppingCart className="text-xl" />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {itemQuantity ? itemQuantity : 0}
                      </span>
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            to="/suggestion"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            Suggestions
          </Link>
          <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
