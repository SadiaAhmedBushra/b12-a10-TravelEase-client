import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto min-h-screen">
      <header>
        <Header></Header>
      </header>
      <main className="w-full lg:max-w-1/2 mx-auto">
      <Outlet></Outlet>

      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
