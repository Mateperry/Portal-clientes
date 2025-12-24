import { createContext, useContext, useState, type ReactNode } from "react";

interface LayoutContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((v) => !v);

  return (
    <LayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const ctx = useContext(LayoutContext);
  if (!ctx) {
    throw new Error("useLayout debe usarse dentro de LayoutProvider");
  }
  return ctx;
}
