import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-lg mb-8">
          Discover our services and products designed to help you achieve your
          goals. Let's build something great together!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/sigup"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
          <button className="bg-indigo-800 px-6 py-3 rounded-full shadow-lg hover:bg-indigo-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
