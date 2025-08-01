import React from 'react';
import { Link } from 'react-router';

const RouteNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-gray-500">It might have been moved or deleted.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default RouteNotFound;
