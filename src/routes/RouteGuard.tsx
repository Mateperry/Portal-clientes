import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RouteGuardProps {
  allowedRoles: string[];
  children: ReactNode;
}

export default function RouteGuard({ allowedRoles, children }: RouteGuardProps) {
  const role = localStorage.getItem("role") || "admin";
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}
