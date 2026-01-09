
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const actividadMock = [
  {
    id: 1,
    usuario: "admin",
    accion: "Creó un nuevo cliente",
    modulo: "Clientes",
    tipo: "info",
    fecha: "2025-01-10 09:32",
  },
  {
    id: 2,
    usuario: "jlopez",
    accion: "Actualizó configuración general",
    modulo: "Configuración",
    tipo: "warning",
    fecha: "2025-01-10 10:05",
  },
  {
    id: 3,
    usuario: "admin",
    accion: "Eliminó un documento",
    modulo: "Documentos",
    tipo: "error",
    fecha: "2025-01-10 10:47",
  },
  {
    id: 4,
    usuario: "mperez",
    accion: "Registró una nueva sucursal",
    modulo: "Sucursales",
    tipo: "info",
    fecha: "2025-01-10 11:15",
  },
];

export default function Actividad() {
  return (
    <div style={{ padding: "1.5rem" }}>
      {/* HEADER */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h1>Actividad del sistema</h1>
        <p className="subtitle">
          Registro de acciones realizadas por los usuarios
        </p>
      </div>

      {/* TIMELINE */}
      <div
        style={{
          background: "var(--sumimas-color-superficie)",
          borderRadius: "var(--sumimas-radio-lg)",
          boxShadow: "var(--sumimas-sombra-sm)",
          padding: "1.25rem",
        }}
      >
        {actividadMock.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "1rem",
              padding: "0.75rem 0",
              borderBottom: "1px solid var(--sumimas-color-borde)",
            }}
          >
            {/* ICON */}
            <div
              style={{
                minWidth: "36px",
                height: "36px",
                borderRadius: "50%",
                background: getTipoBg(item.tipo),
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {getTipoIcon(item.tipo)}
            </div>

            {/* CONTENT */}
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0 }}>
                <strong>{item.usuario}</strong> {item.accion}
              </p>
              <p
                style={{
                  margin: "0.2rem 0 0",
                  fontSize: "var(--sumimas-fs-xs)",
                  color: "var(--sumimas-texto-secundario)",
                }}
              >
                {item.modulo} · {item.fecha}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================
   HELPERS
===================== */

function getTipoIcon(tipo: string) {
  switch (tipo) {
    case "warning":
      return <WarningAmberOutlinedIcon sx={{ fontSize: 18 }} />;
    case "error":
      return <ErrorOutlineOutlinedIcon sx={{ fontSize: 18 }} />;
    default:
      return <InfoOutlinedIcon sx={{ fontSize: 18 }} />;
  }
}

function getTipoBg(tipo: string) {
  switch (tipo) {
    case "warning":
      return "var(--sumimas-color-amarillo)";
    case "error":
      return "var(--sumimas-color-rojo)";
    default:
      return "var(--sumimas-color-azul-oscuro)";
  }
}
