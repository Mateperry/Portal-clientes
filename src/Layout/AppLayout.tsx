import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { LayoutProvider, useLayout } from "./LayoutContext";

function LayoutContent() {
  const { isSidebarOpen } = useLayout();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* HEADER */}
      <Header />

      {/* BODY */}
<div className="flex flex-1 relative">
  <Sidebar />
  <main
    className={`
      flex-1 overflow-y-auto
      transition-all duration-300
      ${isSidebarOpen ? "max-lg:blur-sm max-lg:pointer-events-none" : ""}
    `}
  >
    <Outlet />
  </main>
</div>

    </div>
  );
}

export default function AppLayout() {
  return (
    <LayoutProvider>
      <LayoutContent />
    </LayoutProvider>
  );
}
