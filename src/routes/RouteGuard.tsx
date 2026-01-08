import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RouteGuardProps {
  allowedRoles: string[];
  children: ReactNode;
}

export default function RouteGuard({ allowedRoles, children }: RouteGuardProps) {
  const role = localStorage.getItem("role");
  // Si no hay role, el usuario no está logueado
  if (!role) {
    return <Navigate to="/login" replace />;
  }
  // Si el role no está permitido, redirige al home
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}
