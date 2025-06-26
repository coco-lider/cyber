import React, { useEffect, useState, useContext } from "react";
import { Star } from "lucide-react";
import Header from "../components/Header";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";
import iphone from "../assets/iphone.png";
import { ThemeContext } from "../context/ThemeContext";
import AppleShowcase from "../components/AppleShowcase";
import CategorySlider from "../components/CategorySlider";
import ProductShowcase from "../components/product-showcase";

const Home = () => {
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "en"
  );

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const { data } = useQuery({
    queryKey: ["products", { limit, skip }],
    queryFn: getProducts,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data?.products) {
      setProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white mt-15">
      <Header />
      <section className="bg-[#211C24] text-white ">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <p className="text-gray-400 font-bold font-inter text-sm mb-2">
              Pro.Beyond
            </p>
            <h1 className="text-4xl md:text-6xl font-semiboldj font-inter leading-tight mb-4">
              <span className="font-inter">Iphone 14 </span>{" "}
              <span className="text-white font-bold">Pro</span>
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              Created to change everything for the better. For everyone.
            </p>
            <Link
              to={"/shop"}
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
            >
              Shop Now
            </Link>
          </div>
          <div className="mt-10 md:mt-0">
            <img
              src={iphone}
              alt="iPhone 14 Pro"
              className="w-[280px] md:w-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      <AppleShowcase />
      <CategorySlider />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group dark:border-gray-500 dark:border rounded-[10px] p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                  {product.images && product.images.length > 0 ? (
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      spaceBetween={10}
                      className="w-full h-64"
                    >
                      {product.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img
                            onClick={() => navigate(`/product/${product.id}`)}
                            src={img}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-64 object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      Rasm yo‘q
                    </div>
                  )}
                </div>

                <h4 className="font-semibold mb-2">{product.name}</h4>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {product.rating}/5
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">$ {product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through dark:text-gray-400">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View All
            </button>
          </div>
        </div>
      </section>

      <ProductShowcase />
    </div>
  );
};

export default Home;
