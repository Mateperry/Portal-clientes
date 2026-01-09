import { Routes, Route, Navigate } from "react-router-dom";
import LogisticaHome from "./Pages/LogisticaHome";
import LogisticaDashboard from "./Pages/LogisticaDashboard";
import Operaciones from "./Pages/Operaciones";
import PackingApp from "./Packing/PackingApp";
import Estilos from "../../Page/Estilos";

export default function LogisticaApp() {
  return (
    <Routes>
      {/* /logistica */}
      <Route index element={<LogisticaHome />} />

      {/* /logistica/dashboard */}
      <Route path="dashboard" element={<LogisticaDashboard />} />

      {/* /logistica/operaciones */}
      <Route path="operaciones" element={<Operaciones />} />

      {/* /logistica/packing */}
      <Route path="packing/*" element={<PackingApp />} />

      {/* /logistica/estilos */}
      <Route path="estilos" element={<Estilos />} />

      <Route path="*" element={<Navigate to="/logistica" replace />} />
    </Routes>
  );
}
