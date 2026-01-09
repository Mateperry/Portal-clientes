import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { useNavigate } from "react-router-dom";

export default function LogisticaHome() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "1.5rem" }}>
      {/* HEADER */}
      <div style={{ marginBottom: "1.75rem" }}>
        <h1>Logística</h1>
        <p className="subtitle">
          Gestión y seguimiento de las operaciones logísticas
        </p>
      </div>

      {/* RESUMEN */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          marginBottom: "2.25rem",
        }}
      >
        <HomeCard
          icon={<Inventory2OutlinedIcon />}
          title="Pedidos pendientes"
          value="18"
        />

        <HomeCard
          icon={<LocalShippingOutlinedIcon />}
          title="En packing"
          value="7"
        />

        <HomeCard
          icon={<Inventory2OutlinedIcon />}
          title="Listos para despacho"
          value="11"
        />

        <HomeCard
          icon={<WarningAmberOutlinedIcon />}
          title="Alertas"
          value="2"
          alert
        />
      </div>

      {/* ACCESOS RÁPIDOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}
      >
        <QuickAction
          title="Operaciones"
          description="Ver y gestionar pedidos antes del packing"
          icon={<LocalShippingOutlinedIcon />}
          onClick={() => navigate("/logistica/operaciones")}
          buttonClass="btn-uno"
        />

        <QuickAction
          title="Packing"
          description="Preparación y embalaje de pedidos"
          icon={<Inventory2OutlinedIcon />}
          onClick={() => navigate("/logistica/packing")}
          buttonClass="btn-dos"
        />

        <QuickAction
          title="Dashboard"
          description="Indicadores y métricas logísticas"
          icon={<DashboardOutlinedIcon />}
          onClick={() => navigate("/logistica/dashboard")}
          buttonClass="btn-confirmar"
        />
      </div>
    </div>
  );
}

/* =====================
   TARJETA RESUMEN
===================== */
function HomeCard({
  icon,
  title,
  value,
  alert = false,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  alert?: boolean;
}) {
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
        borderLeft: alert
          ? "4px solid var(--sumimas-color-rojo)"
          : "4px solid var(--sumimas-color-azul-oscuro)",
      }}
    >
      <div
        style={{
          background: alert
            ? "var(--sumimas-color-rojo)"
            : "var(--sumimas-color-azul-oscuro)",
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
   ACCIÓN RÁPIDA
===================== */
function QuickAction({
  title,
  description,
  icon,
  onClick,
  buttonClass,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  buttonClass: string;
}) {
  return (
    <div
      style={{
        background: "var(--sumimas-color-superficie)",
        borderRadius: "var(--sumimas-radio-lg)",
        boxShadow: "var(--sumimas-sombra-sm)",
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            background: "var(--sumimas-color-azul-oscuro)",
            color: "#fff",
            borderRadius: "var(--sumimas-radio-md)",
            padding: "0.55rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>

        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>

      <p className="text-sm-sumimas texto-secundario-sumimas">
        {description}
      </p>

      <button
        className={buttonClass}
        style={{ alignSelf: "flex-start" }}
        onClick={onClick}
      >
        Acceder
      </button>
    </div>
  );
}
