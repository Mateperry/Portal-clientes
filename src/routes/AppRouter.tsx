import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import Home from "../Page/Home";
import PackingApp from "../Logistica/PackingApp";
import Estilos from "../Page/Estilos";
import Login from "../Log/Login";
import RouteGuard from "./RouteGuard";
import { SECTIONS } from "../config/sections";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        {/* Redirección automática de /logistica a /logistica/packing */}
        <Route path="/logistica/estilos" element={<Estilos />} />
        <Route
          path="/logistica/*"
          element={
            <RouteGuard allowedRoles={SECTIONS.logistica.roles}>
              <PackingApp />
            </RouteGuard>
          }
        />
        <Route
          path="/comercial/*"
          element={
            <RouteGuard allowedRoles={SECTIONS.comercial.roles}>
              <div>Comercial</div>
            </RouteGuard>
          }
        />
        <Route
          path="/admin/*"
          element={
            <RouteGuard allowedRoles={SECTIONS.admin.roles}>
              <div>Admin</div>
            </RouteGuard>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
