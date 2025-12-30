import SidebarItem from "./SidebarItem";
import { useLayout } from "./LayoutContext";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useLayout();
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si estamos en móvil/tablet
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función que solo cierra el sidebar en móvil
  const handleItemClick = () => {
    if (isMobile) toggleSidebar();
  };

  return (
    <>
      {/* ===== BACKDROP (MÓVIL / TABLET) ===== */}
      <div
        onClick={toggleSidebar}
        className={`
          fixed top-15 left-0 right-0 bottom-0
          bg-black/40
          backdrop-blur-xl
          supports-[backdrop-filter]:backdrop-blur-xl
          z-40
          lg:hidden
          transition-opacity duration-300 ease-in-out
          ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ===== SIDEBAR ===== */}
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white border-r
          h-full
          overflow-visible
          transition-[width,transform] duration-500 ease-in-out
          ${isSidebarOpen ? "lg:w-[13%]" : "lg:w-15"}
          max-lg:fixed
          max-lg:top-15
          max-lg:left-0
          max-lg:z-50
          max-lg:h-[calc(100vh-60px)]
          max-lg:w-64
          ${isSidebarOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}
        `}
      >
        <nav className="flex flex-col gap-1 p-2">
          {/* ===== INICIO ===== */}
          <SidebarItem
            label="Inicio"
            to="/"
            icon={<MapsHomeWorkOutlinedIcon sx={{ fontSize: 30 }} />}
            showLabel={isSidebarOpen}
            onClick={handleItemClick}
          />

          {/* ===== PACKING ===== */}
          <SidebarItem
            label="Packing"
            to="/packing"
            icon={<Inventory2OutlinedIcon sx={{ fontSize: 28 }} />}
            showLabel={isSidebarOpen}
            onClick={handleItemClick}
          />

          {/* ===== ESTILOS ===== */}
          <SidebarItem
            label="Estilos"
            to="/estilos"
            icon={<StyleOutlinedIcon sx={{ fontSize: 30 }} />}
            showLabel={isSidebarOpen}
            onClick={handleItemClick}
          />
        </nav>
      </aside>
    </>
  );
}
