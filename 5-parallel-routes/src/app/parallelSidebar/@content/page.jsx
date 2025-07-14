import React from "react";

const Content = () => {
  if (2 > 4) {
    throw new Error("im getting error");
  }

  return <div className="border h-full border-white">Content</div>;
};

export default Content;
