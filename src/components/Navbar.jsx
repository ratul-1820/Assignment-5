import { SquareMenu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="flex container mx-auto items-center justify-between p-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            DS
          </div>
          <p className="font-bold text-xl text-gray-900">
            Dev<span className="text-pink-600">Stack</span>
          </p>
        </div>

        <div className="items-center hidden md:flex gap-8">
          <ul className="flex items-center gap-6">
            {["Home", "Technologies", "Projects", "About", "Contact"].map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer text-sm font-medium ${
                  active === item ? "text-pink-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
              Sign In
            </button>
            <button className="px-5 py-2 cursor-pointer text-sm font-medium text-white rounded-full bg-gradient-to-r from-pink-600 to-pink-500">
              Sign Up
            </button>
          </div>
        </div>

        <button
          className="cursor-pointer md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <SquareMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white">
          <ul className="flex flex-col gap-4">
            {["Home", "Technologies", "Projects", "About", "Contact"].map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer ${
                  active === item ? "text-pink-600 font-semibold" : "text-gray-600"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full text-center py-2 text-sm font-medium text-gray-600">
              Sign In
            </button>
            <button className="w-full py-2 cursor-pointer text-sm font-medium text-white rounded-full bg-gradient-to-r from-pink-600 to-pink-500">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;