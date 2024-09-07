import  { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons
import { products } from "../utils/Data";


const Checkout = () => {
  const [cart, setCart] = useState(
    products.map((product) => ({ ...product, quantity: 1 }))
  );
  const [total, setTotal] = useState(
    cart.reduce((acc, product) => acc + product.price, 0)
  );

  // Update total if cart changes
  const handleQuantityChange = (index, action) => {
    const updatedCart = [...cart];
    if (action === "increase") {
      updatedCart[index].quantity += 1;
    } else if (action === "decrease" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    setCart(updatedCart);
    const updatedTotal = updatedCart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(updatedTotal);
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 py-10">
      {/* Checkout Page Title */}
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        Checkout
      </h1>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Your Cart
          </h2>

          {/* List of Products */}
          {cart.map((product, index) => (
            <div
              key={product.id}
              className="flex justify-between items-center bg-white shadow-lg rounded-lg mb-6 p-6"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1 px-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800 font-bold mt-2">${product.price}</p>

                {/* Quantity Control */}
                <div className="flex items-center justify-start mt-4">
                  <button
                    onClick={() => handleQuantityChange(index, "decrease")}
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
                  >
                    <FaChevronLeft />
                  </button>
                  <span className="mx-4 text-lg font-semibold text-gray-700">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(index, "increase")}
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total Amount */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6 text-right">
            <h2 className="text-2xl font-semibold text-gray-800">
              Total: ${total.toFixed(2)}
            </h2>
          </div>
        </div>

        {/* Checkout Form Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Billing Details
          </h2>

          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Shipping Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your shipping address"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="card"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Card Information
              </label>
              <input
                type="text"
                id="card"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
