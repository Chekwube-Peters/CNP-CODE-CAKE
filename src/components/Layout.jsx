import React from "react";
import Footer from "./navigation/Footer";
import NavBar from "./navigation/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="children">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
