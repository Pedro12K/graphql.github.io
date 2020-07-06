import React from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const Layout = ({ children, noSearch, section }) => (
  <div className="index">
    <Header noSearch={noSearch} section={section} />
    {children}
    <Footer page=""/>
  </div>
);

export default Layout;
