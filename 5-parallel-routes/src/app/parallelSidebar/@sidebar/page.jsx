import Link from "next/link";
import React from "react";

const ParallelSidebar = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res("content is loading....");
    }, 3000);
  });
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

export default ParallelSidebar;
