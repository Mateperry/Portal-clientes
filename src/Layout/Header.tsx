import { useLayout } from "./LayoutContext";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import Logo from "../../logo.svg";

export default function Header() {
  const { toggleSidebar, isSidebarOpen } = useLayout();

  return (
    <header className="h-15 bg-white border-b flex items-center justify-between px-2">
      {/* IZQUIERDA */}
      <div className="flex items-center gap-3">
        {/* Botón Sidebar */}
        <IconButton
          onClick={toggleSidebar}
          size="medium"
          className=" transition-transform duration-200"
          aria-label="Toggle sidebar"
        >
          <MenuOpenIcon
            sx={{ fontSize: 30 }}
            className={`text-[#142c4c] hover:text-[#1b3b66] ${isSidebarOpen ? "rotate-180" : "rotate-0"}`}
          />
        </IconButton>

        {/* Logo + breadcrumb */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Portal Clientes"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-3">
        <IconButton size="large" aria-label="Cuenta de usuario">
          <AccountCircleOutlinedIcon
            fontSize="large"
            className="text-[#142c4c] hover:text-[#1b3b66] transition-colors"
          />
        </IconButton>
      </div>
    </header>
  );
}
