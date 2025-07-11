import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div
      className="min-h-screen 
     flex flex-col items-center justify-center p-6"
    >
      <div className="text-center">
        <h1 className="text-4xl font-light tracking-tight text-neutral-300 mb-6">
          Welcome to the Dashboard App
        </h1>
        <p className="text-md tracking-tight font-light text-neutral-500 mb-8">
          Manage your tasks, track analytics, and stay organized with our
          powerful dashboard.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center font-light justify-center bg-neutral-700
         text-white px-8 py-2 rounded-2xl tracking-tight hover:bg-neutral-800
          transition-colors shadow-lg hover:shadow-xl"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
