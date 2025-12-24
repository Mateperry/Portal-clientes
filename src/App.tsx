import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import PackingApp from "./Page/PackingApp";
import Home from "./Page/Home";

export default function App() {
  return (
    <Routes>
      {/* ======================
          SIN LAYOUT
      ====================== */}
      
      {/* ======================
          CON LAYOUT
      ====================== */}
<Route element={<AppLayout />}>
<Route path="/" element={<Home />} />
  <Route path="/packing/*" element={<PackingApp />} />
</Route>


      {/* ======================
          FALLBACK
      ====================== */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
