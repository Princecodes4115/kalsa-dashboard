import React from "react";
import dynamic from "next/dynamic";
const DynamicSidebar = dynamic(() => import("./Sidebar"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <DynamicSidebar />
      <div className="bg-primary flex-1 p-4 text-white">{children}</div>
    </div>
  );
};

export default Layout;
