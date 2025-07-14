import Link from "next/link";
import React from "react";

const Analytics = () => {
  return (
    <div>
      analytics
      <p className="mt-10">
        <Link href={"/dashboard/analytics/price"}>Go to check prices</Link>
      </p>
    </div>
  );    
};

export default Analytics;
