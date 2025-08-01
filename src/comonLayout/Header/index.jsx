import React from 'react';
import { Link } from 'react-router';

const Hedaer = () => {
  return (
    <nav>
      <div className=" bg-[navy] p-5 ">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <Link to="/" className="text-3xl text-white font-bold">
                Jakaria
              </Link>
            </div>
            <div>
              <ul className="flex gap-x-6 text-white font-medium text-xl">
                <Link to="/">Home</Link>
                <Link to="/sigup">sigup</Link>
                <Link to="/login">login</Link>
                <Link to="/manage-user">manage_user</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hedaer;
