"use client"

import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductShowcase() {
  const [popularProducts, setPopularProducts] = useState([]);
  const [discountProducts, setDiscountProducts] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resPopular = await api.get("/products/category/smartphones?limit=4");
        const resDiscount = await api.get("/products?limit=10");

        setPopularProducts(resPopular.data.products);

        const shuffled = resDiscount.data.products.sort(() => 0.5 - Math.random());
        const selectedDiscounts = shuffled.slice(0, 4);
        setDiscountProducts(selectedDiscounts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-15 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center h-full">
                <img src={product.thumbnail} alt={product.title} className="w-24 h-24 object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-3">{product.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                  {product.description}
                </p>
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Discounts up to -30%</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {discountProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 text-gray-800 h-[300x] dark:text-white rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-contain mb-4" />
                <h3 className="text-base h-10 font-semibold mb-3">{product.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  <span className="text-sm line-through text-gray-500 dark:text-gray-400">${Math.floor(product.price * 1.3)}</span>
                </div>
                <button
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.title,
                    image: product.thumbnail,
                    price: product.price,
                    quantity: 1,
                    size: "M",
                    color: "Black",
                  })}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}