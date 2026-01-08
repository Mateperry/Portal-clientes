import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLayout } from "./LayoutContext";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import Logo from "../../logo.svg";

interface HeaderProps {
  showSidebar?: boolean;
}

export default function Header({ showSidebar = false }: HeaderProps) {
  const { toggleSidebar, isSidebarOpen } = useLayout();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    handleCloseMenu();
    navigate("/login");
  };

  return (
    <header
      className="h-15 flex items-center justify-between px-2 "
      style={{
        backgroundColor: "var(--sumimas-color-superficie)",
        borderBottom: "1px solid var(--sumimas-color-borde)",
      }}
    >
      {/* IZQUIERDA */}
      <div className="flex items-center gap-3">
        {showSidebar && (
          <IconButton onClick={toggleSidebar} aria-label="Toggle sidebar">
            <MenuOpenIcon
              sx={{ fontSize: 30 }}
              className={`transition-transform ${
                isSidebarOpen ? "rotate-180" : "rotate-0"
              }`}
              style={{
                color: "var(--sumimas-color-azul-oscuro)",
              }}
            />
          </IconButton>
        )}
        <img
          src={Logo}
          alt="Portal Clientes"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-3">
        <IconButton aria-label="Cuenta de usuario" onClick={handleOpenMenu}>
          <AccountCircleOutlinedIcon
            fontSize="large"
            style={{
              color: "var(--sumimas-color-azul-oscuro)",
            }}
          />
        </IconButton>

        {/* MENÚ PERFIL */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              borderRadius: "var(--sumimas-radio-md)",
              minWidth: 180,
              boxShadow: "var(--sumimas-sombra-md)",
              border: "1px solid var(--sumimas-color-borde)",
              fontFamily: "var(--sumimas-fuente-base)",
            },
          }}
        >
          <MenuItem disabled>
            <span className="text-sm-sumimas texto-secundario-sumimas">
              Mi cuenta
            </span>
          </MenuItem>

          <Divider />

          <MenuItem
            onClick={handleLogout}
            sx={{
              color: "var(--sumimas-color-rojo)",
              fontSize: "var(--sumimas-fs-sm)",
              "&:hover": {
                backgroundColor: "rgba(214, 37, 37, 0.08)",
              },
            }}
          >
            Cerrar sesión
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}
