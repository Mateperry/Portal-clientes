import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import { SECTIONS } from "../config/sections";
import type { ReactNode } from "react";
export default function Home() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!role) {
      navigate("/login", { replace: true });
    }
  }, [role, navigate]);

  if (!role) return null;

  // Filtrar secciones permitidas
  const allowedSections = Object.entries(SECTIONS).filter(([_key, section]) =>
    section.roles.includes(role)
  );

  // Iconos por sección
const sectionIcons: Record<string, ReactNode> = {
  admin: <DashboardIcon fontSize="large"  className="texto-primario-sumimas"/>,
  logistica: <Inventory2OutlinedIcon fontSize="large" />,
  comercial: <StyleOutlinedIcon fontSize="large" />,
  
};

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3">
      <div className="max-w-3xl w-full">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold  texto-primario-sumimas  ">SumiApp</h1>
          <p className="subtitle text-gray-600">
            Selecciona un módulo para comenzar
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {allowedSections.map(([key, section]) => (
            <button
              key={key}
              onClick={() => navigate(section.path)}
              className="bg-white border border-gray-500 rounded-xl p-6 flex items-center gap-4 text-left shadow-md \
                        hover:scale-105 hover:shadow-lg \
                       transition-all duration-300 ease-in-out"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                {sectionIcons[key]}
              </div>
              <div>
                <h2 className="text-md-sumimas font-semibold texto-primario-sumimas">{section.label}</h2>
                <p className="text-xs-sumimas texto-secundario-sumimas">{section.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-14 text-center text-xs-sumimas texto-secundario-sumimas">
          © {new Date().getFullYear()} SumiApp - Sumimas
        </div>
      </div>
    </div>
  );
}
