import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
