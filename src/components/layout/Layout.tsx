import React from "react";
import Footer from "./Footer";
import Header from "./Header";

/**
 * Main Page의 전반적인 구성이다.
 * @param props React.ReactNode
 * @returns Header, Footer 레이아웃 설정
 */
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
