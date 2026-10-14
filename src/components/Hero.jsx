import React from "react";
import bannerImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-2xl text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Ideal{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block sm:inline">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="px-6 py-3.5 cursor-pointer rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 text-white font-semibold text-sm shadow-md hover:opacity-95 transition">
              Explore Technologies
            </button>
            <button className="px-6 py-3.5 cursor-pointer rounded-xl border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
        <img src={bannerImage} alt="Loading" />
        </div>
      </div>
    </section>
  );
};

export default Hero;