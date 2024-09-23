// import React from "react";
import img from "../../../assets/img/hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 1000 });
  }, []);
  return (
    <div className="relative">
      {/* Background Layer */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-0 top-0 h-[500px] w-[500px] translate-x-[20%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="text-white">
        <div className="pt-12 container flex flex-col justify-center md:flex-row items-center">
          {/* Content Section */}
          <div
            data-aos="zoom-out-up"
            className="w-full md:w-2/4 space-y-5 mt-10"
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black">
              Find Your Perfect Ride Today
            </h1>
            <p className="text-lg lg:text-2xl font-medium text-black">
              Over 1000+ New Cars Available Here
            </p>
            <p className="text-sm lg:text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              aperiam recusandae ratione ducimus molestias ab neque accusamus
              eveniet cumque corrupti.
            </p>

            <div className="flex gap-8">
              <button className="bg-primary py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear">
                Explore More
              </button>
              <button className="border-2 border-primary py-1 px-4 rounded-md hover:bg-primary text-black transition duration-200 ease-linear">
                See Cars
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div data-aos="fade-right" className="w-full md:w-2/4 mt-4">
            <img src={img} alt="img" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
