import React from "react";

const Layout = ({ children, content, sidebar }) => {
  return (
    <div className="w-full min-h-screen flex p-10 gap-5">
      <aside className="w-[300px] h-100">{sidebar}</aside>

      <main className="flex-1 h-100">{content}</main>
    </div>
  );
};

export default Layout;
