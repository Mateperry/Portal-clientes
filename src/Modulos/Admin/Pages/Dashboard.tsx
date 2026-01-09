import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "1.5rem" }}>
      {/* HEADER */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h1>Dashboard Administración</h1>
        <p className="subtitle">
          Vista general del estado del sistema
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
          icon={<PeopleOutlineIcon />}
          title="Usuarios"
          value="24"
        />

        <DashboardCard
          icon={<BusinessOutlinedIcon />}
          title="Clientes"
          value="12"
        />

        <DashboardCard
          icon={<DescriptionOutlinedIcon />}
          title="Documentos"
          value="58"
        />

        <DashboardCard
          icon={<HistoryOutlinedIcon />}
          title="Eventos hoy"
          value="9"
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
        {/* ACTIVIDAD */}
        <div
          style={{
            background: "var(--sumimas-color-superficie)",
            borderRadius: "var(--sumimas-radio-lg)",
            boxShadow: "var(--sumimas-sombra-sm)",
            padding: "1.25rem",
          }}
        >
          <h2>Actividad reciente</h2>

          <ul style={{ marginTop: "1rem", paddingLeft: "1rem" }}>
            <li className="text-sm-sumimas">
              Usuario <strong>admin</strong> creó un nuevo cliente
            </li>
            <li className="text-sm-sumimas">
              Se actualizó la configuración general
            </li>
            <li className="text-sm-sumimas">
              Nuevo documento cargado
            </li>
          </ul>
        </div>

        {/* ACCIONES */}
        <div
          style={{
            background: "var(--sumimas-color-superficie)",
            borderRadius: "var(--sumimas-radio-lg)",
            boxShadow: "var(--sumimas-sombra-sm)",
            padding: "1.25rem",
          }}
        >
          <h2>Acciones rápidas</h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginTop: "1rem",
            }}
          >
            <button className="btn-uno">Crear usuario</button>
            <button className="btn-dos">Registrar cliente</button>
            <button className="btn-confirmar">Subir documento</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================
   CARD KPI
===================== */
function DashboardCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        background: "var(--sumimas-color-superficie)",
        borderRadius: "var(--sumimas-radio-lg)",
        boxShadow: "var(--sumimas-sombra-sm)",
        padding: "1rem 1.25rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          background: "var(--sumimas-color-azul-oscuro)",
          color: "#fff",
          borderRadius: "var(--sumimas-radio-md)",
          padding: "0.65rem",
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
