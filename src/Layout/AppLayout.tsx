import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { LayoutProvider, useLayout } from "./LayoutContext";

function LayoutContent() {
  const { isSidebarOpen } = useLayout();
  const location = useLocation();
  const pathname = location.pathname;
  let section: "logistica" | "comercial" | "admin" | null = null;
  if (pathname.startsWith("/logistica")) section = "logistica";
  else if (pathname.startsWith("/comercial")) section = "comercial";
  else if (pathname.startsWith("/admin")) section = "admin";
  const showSidebar = Boolean(section);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* HEADER */}
      <Header showSidebar={showSidebar} />

      {/* BODY */}
      <div className="flex flex-1 relative">
        {showSidebar && <Sidebar section={section} />}
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
