import Link from "next/link";
import React from "react";

const Default = () => {
  return (
    <div className=" border h-full border-white">
      ParallelSidebar
      <ul className="flex flex-col mt-10">
        <li>
          <Link href={"/parallelSidebar"}>Home</Link>
        </li>
        <li>
          <Link href={"/parallelSidebar/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/parallelSidebar/settings"}>Settings</Link>
        </li>{" "}
      </ul>
    </div>
  );
};

export default Default;
