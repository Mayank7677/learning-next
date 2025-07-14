import React from "react";

const Layout = ({ children, product }) => {
  return (
    <div>
      {children}
      {product}
    </div>
  );
};

export default Layout;
