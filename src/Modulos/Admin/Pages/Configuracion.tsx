import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export default function Configuracion() {
  return (
    <div style={{ padding: "1.5rem" }}>
      {/* HEADER */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h1>Configuración</h1>
        <p className="subtitle">
          Ajustes generales del sistema y la empresa
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {/* INFORMACIÓN EMPRESA */}
        <Card>
          <h2>Información de la empresa</h2>

          <FormGroup label="Nombre de la empresa">
            <input className="input" placeholder="Sumimas S.A.S" />
          </FormGroup>

          <FormGroup label="NIT">
            <input className="input" placeholder="900123456-7" />
          </FormGroup>

          <FormGroup label="Correo corporativo">
            <input className="input" placeholder="contacto@empresa.com" />
          </FormGroup>
        </Card>

        {/* PARÁMETROS */}
        <Card>
          <h2>Parámetros del sistema</h2>

          <FormGroup label="Moneda">
            <select className="input">
              <option>COP</option>
              <option>USD</option>
            </select>
          </FormGroup>

          <FormGroup label="Zona horaria">
            <select className="input">
              <option>America/Bogota</option>
              <option>UTC</option>
            </select>
          </FormGroup>

          <FormGroup label="Impuesto (%)">
            <input className="input" placeholder="19" />
          </FormGroup>
        </Card>

        {/* PREFERENCIAS */}
        <Card>
          <h2>Preferencias</h2>

          <FormGroup label="Notificaciones">
            <select className="input">
              <option>Habilitadas</option>
              <option>Deshabilitadas</option>
            </select>
          </FormGroup>

          <FormGroup label="Tema">
            <select className="input">
              <option>Claro</option>
              <option>Oscuro</option>
            </select>
          </FormGroup>
        </Card>
      </div>

      {/* ACCIÓN */}
      <div style={{ marginTop: "2rem", textAlign: "right" }}>
        <button className="btn-confirmar">
          <SaveOutlinedIcon sx={{ fontSize: 18, marginRight: "0.3rem" }} />
          Guardar cambios
        </button>
      </div>
    </div>
  );
}

/* =====================
   COMPONENTES AUX
===================== */

function Card({ children }: { children: React.ReactNode }) {
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
      {children}
    </div>
  );
}

function FormGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      <label>{label}</label>
      {children}
    </div>
  );
}
