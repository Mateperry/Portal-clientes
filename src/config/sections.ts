export const SECTIONS = {
    admin: {
    label: "Administración",
    path: "/admin/dashboard",
    roles: ["admin"],
    description: "Configuración del sistema y gestión de usuarios",
  },
  logistica: {
    label: "Logística",
    path: "/logistica/packing",
    roles: ["admin", "logistica"],
    description: "Gestión de inventario, pedidos y envíos",
  },
  comercial: {
    label: "Comercial",
    path: "/comercial",
    roles: ["admin", "comercial"],
    description: "Gestión de clientes, ventas y facturación",
  },

};
