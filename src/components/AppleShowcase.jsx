import React from "react";
import ps5 from "../assets/ps5.png";
import macbook from "../assets/macbook.png";
import airpods from "../assets/airpods.png";
import visionpro from "../assets/visionpro.png";
import { Link } from "react-router-dom";

const AppleShowcase = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 ">
        <div className="grid grid-rows-2">
          <Link to={'/shop'} className="bg-gray-[#FFFFFF] relative dark:bg-gray-600 flex flex-col md:flex-row items-center p-6 gap-6">
            <div className="w-32 md:w-40">
              <img
                src={ps5}
                alt="Playstation 5"
                className="w-32 absolute left-0 top-10 md:w-40 object-contain"
              />
            </div>
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-2">Playstation 5</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </Link>
          <div className="grid grid-cols-2 h-full">
            <Link to={'/shop'} className="bg-[#EDEDED] relative dark:bg-gray-800 p-4 flex flex-col justify-between">
              <div className="w-32 md:w-40">
                <img
                  src={airpods}
                  alt="AirPods Max"
                  className="w-32 z-[0] h-32 absolute left-0 top-0 md:w-40 object-bottom-left object-contain"
                />
              </div>
              <div className="relative">
                <h3 className="mt-2 z-10">Apple</h3>
                <h3 className="mt-2">AirPods</h3>
                <h3 className="font-semibold mt-2">Max</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Computational audio. Listen, it’s powerful.
                </p>
              </div>
            </Link>
            <Link to={'/shop'} className="bg-[#353535] relative text-white p-4 flex flex-col justify-between">
              <div className="w-full">
                <img
                  src={visionpro}
                  alt="Vision Pro"
                  className="w-ful absolute z-0 left-0 h-28 object-contain"
                />
              </div>
              <div className="relative">
                <h3 className="font-semibold mt-2">Apple Vision Pro</h3>
                <p className="text-sm text-gray-300">
                  An immersive way to experience entertainment
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-[#EDEDED] relative h-110 dark:bg-gray-700 flex flex-col md:flex-row items-center justify-between p-6">
          <div className="max-w-sm relative">
            <h2 className="text-3xl font-light">Macbook</h2>
            <h2 className="font-bold text-3xl">Air</h2>
            <p className="text-gray-600 mb-15 z-10 relative dark:text-gray-300 text-sm mt-2">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <Link
              to={"shop"}
              className="mt-4 px-4 py-2 border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Shop Now
            </Link>
          </div>
          <img
            src={macbook}
            alt="MacBook Air"
            className="w-40 absolute z-0 h-70 right-0 md:w-52 mt-6 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default AppleShowcase;
