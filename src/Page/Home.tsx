import { useNavigate } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Portal Clientes
          </h1>
          <p className="text-gray-500 mt-2">
            Selecciona un módulo para comenzar
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* PACKING */}
          <button
            onClick={() => navigate("/packing")}
            className="
              bg-white border rounded-xl p-6
              flex items-center gap-4
              hover:shadow-md transition
              text-left
            "
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <LocalShippingIcon fontSize="large" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Packing
              </h2>
              <p className="text-sm text-gray-500">
                Preparación y rotulado de pedidos
              </p>
            </div>
          </button>

          {/* FUTURO DASHBOARD */}
          <div className="
            bg-white border rounded-xl p-6
            flex items-center gap-4
            opacity-50 cursor-not-allowed
          ">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
              <DashboardIcon fontSize="large" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-400">
                Dashboard
              </h2>
              <p className="text-sm text-gray-400">
                Próximamente
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Portal Clientes
        </div>
      </div>
    </div>
  );
}
