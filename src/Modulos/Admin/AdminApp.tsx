import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./Pages/Dashboard";
import Usuarios from "./Pages/Usuarios";
import Clientes from "./Pages/Clientes";
import Configuracion from "./Pages/Configuracion";
import Sucursales from "./Pages/Sucursales";
import Documentos from "./Pages/Documentos";
import Actividad from "./Pages/Actividad";
export default function AdminApp() {
  return (
    <Routes>
      <Route index element={<Navigate to="dashboard" replace />} />

      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="clientes" element={<Clientes />} />
      <Route path="configuracion" element={<Configuracion />} />
      <Route path="sucursales" element={<Sucursales />} />
      <Route path="documentos" element={<Documentos />} />
      <Route path="actividad" element={<Actividad />} />
    </Routes>
  );
}
