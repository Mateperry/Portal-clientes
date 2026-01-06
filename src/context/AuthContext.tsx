
// Lista de usuarios demo
export const USERS = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "logistica", password: "log123", role: "logistica" },
  { username: "comercial", password: "com123", role: "comercial" },
];

import { createContext, useContext } from "react";
import type { ReactNode } from "react";

export type Role = "admin" | "logistica" | "comercial";
const AuthContext = createContext<{ role: Role }>({ role: "admin" });

export function AuthProvider({ children }: { children: ReactNode }) {
  const role = (localStorage.getItem("role") as Role) || "admin";
  return <AuthContext.Provider value={{ role }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
