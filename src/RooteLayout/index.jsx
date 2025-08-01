import React from 'react';
import Hedaer from '../comonLayout/Header';
import { Outlet } from 'react-router';
import Footer from '../comonLayout/Footer';

const RooteLayout = () => {
  return (
    <div>
      <div>
        <Hedaer></Hedaer>
        <div className="h-screen">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RooteLayout;
