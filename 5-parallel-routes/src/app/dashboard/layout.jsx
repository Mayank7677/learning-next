import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex ">
      <aside className="w-50 p-10">
        <h1>Sidebar</h1>

        <ul className="flex flex-col mt-10">
          <li>
            <Link href={"/dashboard"}>Home</Link>
          </li>
          <li>
            <Link href={"/dashboard/works"}>Works</Link>
          </li>
          <li>
            <Link href={"/dashboard/analytics"}>Analytics</Link>
          </li>{" "}
        </ul>
      </aside>

      <main className="flex-1 p-10 border border-red-600">{children}</main>
    </div>
  );
};

export default DashboardLayout;
