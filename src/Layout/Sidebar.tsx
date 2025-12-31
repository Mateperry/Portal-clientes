import { useEffect, useState, useRef } from "react";
import SidebarItem from "./SidebarItem";
import { useLayout } from "./LayoutContext";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useLayout();
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  // 1. Detectar si estamos en móvil
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Cerrar al hacer clic fuera (pero respetando el Header)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Solo cerrar si está abierto, es móvil, y el clic NO fue dentro del sidebar
      if (isSidebarOpen && isMobile && sidebarRef.current) {
        if (!sidebarRef.current.contains(event.target as Node)) {
          toggleSidebar();
        }
      }
    };

    // Usamos mousedown para detectar el clic antes de que se procesen otras acciones
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen, isMobile, toggleSidebar]);

  const handleItemClick = () => {
    if (isMobile) toggleSidebar();
  };

  return (
    <>
      {/* ===== BACKDROP (FONDO OSCURO) ===== */}
      {/* Usamos top-15 para que empiece DEBAJO del header (asumiendo h-15 = 60px) */}
      <div
        className={`
          fixed top-15 left-0 right-0 bottom-0
          bg-black/40
          backdrop-blur-xl
          z-30 
          lg:hidden
          transition-opacity duration-300 ease-in-out
          ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ===== SIDEBAR ===== */}
      <aside
        ref={sidebarRef}
        className={`
          bg-white border-r
          h-full
          overflow-visible
          transition-[width,transform] duration-500 ease-in-out
          ${isSidebarOpen ? "lg:w-[13%]" : "lg:w-15"}
          
          /* Estilos Móvil: Fijo, pero respetando el Header */
          max-lg:fixed
          max-lg:top-15      /* Empieza debajo del header */
          max-lg:left-0
          max-lg:z-40        /* Z-index alto pero menor que el Header si es necesario */
          max-lg:h-[calc(100vh-60px)] /* Altura restante */
          max-lg:w-64
          ${isSidebarOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}
        `}
      >
        <nav className="flex flex-col gap-1 p-2">
          {/* INICIO */}
          <SidebarItem
            label="Inicio"
            to="/"
            icon={<MapsHomeWorkOutlinedIcon sx={{ fontSize: 30 }} />}
            showLabel={isSidebarOpen}
            onClick={handleItemClick}
            isMobile={isMobile} // Pasamos prop para controlar el hover
          />

          {/* PACKING */}
          <SidebarItem
            label="Packing"
            to="/packing"
            icon={<Inventory2OutlinedIcon sx={{ fontSize: 28 }} />}
            showLabel={isSidebarOpen}
            onClick={handleItemClick}
            isMobile={isMobile}
          />

          {/* ESTILOS */}
          <SidebarItem
            label="Estilos"
            to="/estilos"
            icon={<StyleOutlinedIcon sx={{ fontSize: 30 }} />}
            showLabel={isSidebarOpen}
            onClick={handleItemClick}
            isMobile={isMobile}
          />
        </nav>
      </aside>
    </>
  );
}