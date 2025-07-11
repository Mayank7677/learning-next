import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-6xl mx-auto rounded-2xl shadow-lg p-8 space-y-8">
        <div className="flex flex-col">
          <h1 className="text-4xl font-light tracking-tight text-neutral-300 mb-4 sm:mb-0">
            Dashboard
          </h1>
          <p className="text-md tracking-tight text-neutral-500 mt-3">
            Welcome back! Here you can manage your tasks, view analytics, and
            make adjustments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="dashboard/tasks"
            className="border border-neutral-700 p-6 rounded-xl
           shadow-md bg-neutral-900"
          >
            <div className="flex items-center gap-2">
              <span className="text-neutral-500 text-2xl">📋</span>
              <h2 className="text-2xl font-light text-neutral-300">Tasks</h2>
            </div>
            <p className="text-neutral-500 tracking-tight mt-2">
              View, organize, and manage your daily tasks.
            </p>
          </Link>

          <Link
            href="dashboard/analytics"
            className="border border-neutral-700 p-6 rounded-xl
           shadow-md bg-neutral-900"
          >
            <div className="flex items-center gap-2">
              <span className="text-neutral-500 text-2xl">📊</span>
              <h2 className="text-2xl font-light text-neutral-300">
                Analytics
              </h2>
            </div>
            <p className="  text-neutral-500 tracking-tight mt-2">
              Gain insights into your performance and trends.
            </p>
          </Link>

          <Link
            href="dashboard/settings"
            className="border border-neutral-700 p-6 rounded-xl
           shadow-md bg-neutral-900"
          >
            <div className="flex items-center gap-2">
              <span className="text-neutral-500 text-2xl">⚙️</span>
              <h2 className="text-2xl font-light text-neutral-300">Settings</h2>
            </div>
            <p className="text-neutral-500 tracking-tight mt-2">
              Customize and tweak your dashboard settings.
            </p>
          </Link>

          <Link
            href="dashboard/users"
            className="border border-neutral-700 p-6 rounded-xl
           shadow-md bg-neutral-900"
          >
            <div className="flex items-center gap-2">
              <span className="text-neutral-500 text-2xl">👥</span>
              <h2 className="text-2xl font-light text-neutral-300">Users</h2>
            </div>
            <p className="text-neutral-500 tracking-tight mt-2">
              View and manage your user base.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
