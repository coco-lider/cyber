import React from 'react'

const OrderList = () => {
  return (
    <div className="min-h-screen pt-23 bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-8">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-medium">
                ✓
              </div>
              <div className="ml-3">
                <div className="text-xs text-gray-500">Step 1</div>
                <div className="text-sm font-medium text-gray-700">Address</div>
              </div>
            </div>

            <div className="w-12 h-px bg-gray-300"></div>

            {/* Step 2 */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-medium">
                ✓
              </div>
              <div className="ml-3">
                <div className="text-xs text-gray-500">Step 2</div>
                <div className="text-sm font-medium text-gray-700">Shipping</div>
              </div>
            </div>

            <div className="w-12 h-px bg-gray-300"></div>

            {/* Step 3 */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm font-medium">
                3
              </div>
              <div className="ml-3">
                <div className="text-xs text-gray-500">Step 3</div>
                <div className="text-sm font-medium text-black">Payment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Summary */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Summary</h2>

            {/* Product Items */}
            <div className="space-y-4 mb-8">
              {/* iPhone */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-black rounded-sm"></div>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">Apple iPhone 14 Pro Max 128Gb</div>
                  </div>
                </div>
                <div className="font-semibold">$1399</div>
              </div>

              {/* AirPods */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">AirPods Max Silver</div>
                  </div>
                </div>
                <div className="font-semibold">$549</div>
              </div>

              {/* Apple Watch */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-black rounded-lg"></div>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">Apple Watch Series 9 GPS 41mm</div>
                  </div>
                </div>
                <div className="font-semibold">$399</div>
              </div>
            </div>

            {/* Address */}
            <div className="mb-6">
              <div className="text-sm font-medium text-gray-700 mb-1">Address</div>
              <div className="text-sm text-gray-600">1131 Dusty Townline, Jacksonville, TX 40322</div>
            </div>

            {/* Shipment method */}
            <div className="mb-8">
              <div className="text-sm font-medium text-gray-700 mb-1">Shipment method</div>
              <div className="text-sm text-gray-600">Free</div>
            </div>

            {/* Pricing Summary */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">$2347</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Estimated Tax</span>
                <span className="font-medium">$50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Estimated shipping & Handling</span>
                <span className="font-medium">$29</span>
              </div>
              <div className="flex justify-between text-lg font-semibold pt-3 border-t">
                <span>Total</span>
                <span>$2426</span>
              </div>
            </div>
          </div>

          {/* Right Side - Payment */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Payment</h2>

            {/* Payment Method Tabs */}
            <div className="flex space-x-6 mb-8">
              <button className="text-sm font-medium text-black border-b-2 border-black pb-2">Credit Card</button>
              <button className="text-sm font-medium text-gray-500 pb-2">PayPal</button>
              <button className="text-sm font-medium text-gray-500 pb-2">PayPal Credit</button>
            </div>

            {/* Credit Card Display */}
            <div className="mb-8">
              <div className="w-full max-w-sm h-32 bg-gradient-to-br from-gray-800 to-black rounded-xl p-6 text-white relative overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
                  <div className="absolute top-8 right-8 w-12 h-12 border border-white/20 rounded-full"></div>
                </div>

                {/* Chip */}
                <div className="w-8 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm mb-4"></div>

                {/* Card Number */}
                <div className="text-lg font-mono tracking-wider mb-4">4085 9530 8475 9530</div>

                {/* Cardholder and Logo */}
                <div className="flex justify-between items-end">
                  <div className="text-xs">Cardholder</div>
                  <div className="flex space-x-1">
                    <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                    <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Exp Date"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center mb-8">
              <input
                type="checkbox"
                id="billing-address"
                className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2"
              />
              <label htmlFor="billing-address" className="ml-2 text-sm text-gray-700">
                Same as billing address
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Back
              </button>
              <button className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderList
