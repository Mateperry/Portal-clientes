import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { LayoutProvider } from "./LayoutContext";

export default function AppLayout() {
  return (
    <LayoutProvider>
      <div className="flex flex-col h-screen bg-gray-50">
        {/* HEADER */}
        <Header />

        {/* BODY */}
        <div className="flex flex-1 overflow-hidden">
          {/* SIDEBAR */}
          <Sidebar />

          {/* CONTENT */}
          <main className="flex-1 overflow-auto ">
            <Outlet />
          </main>
        </div>
      </div>
    </LayoutProvider>
  );
}
