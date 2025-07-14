import Link from "next/link";
import React from "react";

const Settings = () => {
  return (
    <div>
      Settings
      <p className="mt-10">
        <Link href={'/parallelSidebar/settings/account-setting'}>go to account settings </Link>
      </p>
    </div>
  );
};

export default Settings;
