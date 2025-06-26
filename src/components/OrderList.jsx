import { BanknoteArrowDownIcon, BanknoteArrowUp, BanknoteXIcon, Locate, LocateFixedIcon, LocateIcon, LocationEdit, LocationEditIcon, MapPin, ShipIcon, ShoppingBasketIcon, ShoppingCartIcon, TractorIcon, Truck } from "lucide-react";
import { useCart } from "../context/CartContext";
import ShopPage from "../pages/ShopPage";

const OrderList = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const shipping = subtotal > 0 ? 29 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900 py-8 text-gray-900 dark:text-white">
      <div className=" container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-8">
            <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">
              {/* Step 1 */}
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 dark:bg-green-600 flex items-center justify-center text-white text-sm font-medium">
                  <MapPin/>
                </div>
                <div className="ml-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Step 1
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-white">
                    Address
                  </div>
                </div>
              </div>

              {/* Line between steps */}
              <div className="hidden md:block w-12 h-px bg-gray-300 dark:bg-gray-600" />
              <div className="block md:hidden h-6 w-px bg-gray-300 dark:bg-gray-600 mx-auto" />

              {/* Step 2 */}
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 dark:bg-green-600 flex items-center justify-center text-white text-sm font-medium">
                  <Truck/>
                </div>
                <div className="ml-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Step 2
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-white">
                    Shipping
                  </div>
                </div>
              </div>

              {/* Line between steps */}
              <div className="hidden md:block w-12 h-px bg-gray-300 dark:bg-gray-600" />
              <div className="block md:hidden h-6 w-px bg-gray-300 dark:bg-gray-600 mx-auto" />

              {/* Step 3 */}
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-sm font-medium">
                  <BanknoteArrowUp/>
                </div>
                <div className="ml-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Step 3
                  </div>
                  <div className="text-sm font-medium text-black dark:text-white">
                    Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Summary</h2>

            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        x{item.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">
                  Subtotal
                </span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">
                  Estimated Tax (8%)
                </span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">
                  Shipping
                </span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold pt-3 border-t border-gray-200 dark:border-gray-700">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Payment</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Exp Date"
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg"
                />
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" id="same-address" className="mr-2" />
                <label
                  htmlFor="same-address"
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  Same as billing address
                </label>
              </div>
              <div className="flex space-x-4 mt-6">
                <button className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  Back
                </button>
                <button className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
