import { useNavigate } from "react-router-dom";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3">
      <div className="max-w-3xl w-full">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Portal Clientes</h1>
          <p className="subtitle text-gray-600">
            Selecciona un módulo para comenzar
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* PACKING */}
          <button
            onClick={() => navigate("/packing")}
            className="bg-white border border-gray-300 rounded-xl p-6 flex items-center gap-4 text-left shadow-md 
                       hover:border-blue-500 hover:scale-105 hover:shadow-lg 
                       transition-all duration-300 ease-in-out"
          >
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
              <Inventory2OutlinedIcon fontSize="large" />
            </div>

            <div>
              <h2 className="font-semibold text-lg">Packing</h2>
              <p className="subtitle text-gray-500">
                Preparación y rotulado de pedidos
              </p>
            </div>
          </button>

          {/* ESTILOS */}
          <button
            onClick={() => navigate("/estilos")}
            className="bg-white border border-gray-300 rounded-xl p-6 flex items-center gap-4 text-left shadow-md 
                       hover:border-blue-500 hover:scale-105 hover:shadow-lg 
                       transition-all duration-300 ease-in-out"
          >
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
              <StyleOutlinedIcon fontSize="large" />
            </div>

            <div>
              <h2 className="font-semibold text-lg">Estilos</h2>
              <p className="subtitle text-gray-500">
                Estilos de Sumimas
              </p>
            </div>
          </button>

          {/* DASHBOARD (deshabilitado) */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 flex items-center gap-4 opacity-50 cursor-not-allowed shadow-md">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
              <DashboardIcon fontSize="large" />
            </div>

            <div>
              <h2 className="font-semibold text-lg">Dashboard</h2>
              <p className="subtitle text-gray-500">
                Próximamente
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Portal Clientes - Sumimas
        </div>
      </div>
    </div>
  );
}
