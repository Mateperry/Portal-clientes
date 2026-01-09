import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

export default function LogisticaDashboard() {
  return (
    <div style={{ padding: "1.5rem" }}>
      {/* HEADER */}
      <div style={{ marginBottom: "1.75rem" }}>
        <h1>Dashboard Logístico</h1>
        <p className="subtitle">
          Indicadores generales de la operación
        </p>
      </div>

      {/* KPIs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <DashboardCard
          icon={<Inventory2OutlinedIcon />}
          title="Pedidos hoy"
          value="26"
        />

        <DashboardCard
          icon={<LocalShippingOutlinedIcon />}
          title="En preparación"
          value="9"
        />

        <DashboardCard
          icon={<CheckCircleOutlineOutlinedIcon />}
          title="Completados"
          value="15"
          success
        />

        <DashboardCard
          icon={<WarningAmberOutlinedIcon />}
          title="Retrasos"
          value="2"
          alert
        />
      </div>

      {/* CONTENIDO INFERIOR */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "1.5rem",
        }}
      >
        {/* FLUJO */}
        <div
          style={{
            background: "var(--sumimas-color-superficie)",
            borderRadius: "var(--sumimas-radio-lg)",
            boxShadow: "var(--sumimas-sombra-sm)",
            padding: "1.25rem",
          }}
        >
          <h2>Estado del flujo</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <FlowItem title="Pendientes" value="8" />
            <FlowItem title="Packing" value="9" />
            <FlowItem title="Listos" value="9" />
          </div>
        </div>

        {/* RESUMEN */}
        <div
          style={{
            background: "var(--sumimas-color-superficie)",
            borderRadius: "var(--sumimas-radio-lg)",
            boxShadow: "var(--sumimas-sombra-sm)",
            padding: "1.25rem",
          }}
        >
          <h2>Resumen del día</h2>

          <ul style={{ marginTop: "1rem", paddingLeft: "1rem" }}>
            <li className="text-sm-sumimas">
              Alta carga operativa en la mañana
            </li>
            <li className="text-sm-sumimas">
              2 pedidos con retraso
            </li>
            <li className="text-sm-sumimas">
              Flujo estable en packing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* =====================
   KPI CARD
===================== */
function DashboardCard({
  icon,
  title,
  value,
  alert = false,
  success = false,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  alert?: boolean;
  success?: boolean;
}) {
  let color = "var(--sumimas-color-azul-oscuro)";
  if (alert) color = "var(--sumimas-color-rojo)";
  if (success) color = "var(--sumimas-color-verde)";

  return (
    <div
      style={{
        background: "var(--sumimas-color-superficie)",
        borderRadius: "var(--sumimas-radio-lg)",
        boxShadow: "var(--sumimas-sombra-sm)",
        padding: "1.1rem 1.25rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div
        style={{
          background: color,
          color: "#fff",
          borderRadius: "var(--sumimas-radio-md)",
          padding: "0.6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs-sumimas texto-secundario-sumimas">
          {title}
        </p>
        <h2 style={{ margin: 0 }}>{value}</h2>
      </div>
    </div>
  );
}

/* =====================
   FLOW ITEM
===================== */
function FlowItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        border: "1px solid var(--sumimas-color-borde)",
        borderRadius: "var(--sumimas-radio-md)",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <p className="text-xs-sumimas texto-secundario-sumimas">
        {title}
      </p>
      <h2 style={{ margin: 0 }}>{value}</h2>
    </div>
  );
}
