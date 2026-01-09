import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import Home from "../Page/Home";
import Login from "../Log/Login";
import RouteGuard from "./RouteGuard";
import { SECTIONS } from "../config/sections";

import AdminApp from "../Modulos/Admin/AdminApp";
import LogisticaApp from "../Modulos/Logistica/LogisticaApp";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />

        {/* LOGÍSTICA */}
        <Route
          path="/logistica/*"
          element={
            <RouteGuard allowedRoles={SECTIONS.logistica.roles}>
              <LogisticaApp />
            </RouteGuard>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/*"
          element={
            <RouteGuard allowedRoles={SECTIONS.admin.roles}>
              <AdminApp />
            </RouteGuard>
          }
        />

        {/* COMERCIAL */}
        <Route
          path="/comercial/*"
          element={
            <RouteGuard allowedRoles={SECTIONS.comercial.roles}>
              <div>Comercial</div>
            </RouteGuard>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
