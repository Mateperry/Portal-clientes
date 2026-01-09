import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const sucursalesMock = [
  {
    id: 1,
    nombre: "Sucursal Principal",
    ciudad: "Bogotá",
    direccion: "Cra 15 # 80-45",
    responsable: "Juan Pérez",
    estado: "Activa",
  },
  {
    id: 2,
    nombre: "Bodega Norte",
    ciudad: "Medellín",
    direccion: "Calle 50 # 30-20",
    responsable: "Laura Gómez",
    estado: "Activa",
  },
  {
    id: 3,
    nombre: "Centro Operativo Sur",
    ciudad: "Cali",
    direccion: "Av 5 # 12-10",
    responsable: "Carlos Mejía",
    estado: "Inactiva",
  },
];

export default function Sucursales() {
  return (
    <div style={{ padding: "1.5rem" }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h1>Sucursales</h1>
          <p className="subtitle">
            Gestión de sedes, bodegas y puntos operativos
          </p>
        </div>

        <button className="btn-uno">
          <AddOutlinedIcon sx={{ fontSize: 18, marginRight: "0.3rem" }} />
          Crear sucursal
        </button>
      </div>

      {/* LISTADO */}
      <div
        style={{
          background: "var(--sumimas-color-superficie)",
          borderRadius: "var(--sumimas-radio-lg)",
          boxShadow: "var(--sumimas-sombra-sm)",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#f9fafb",
                borderBottom: "1px solid var(--sumimas-color-borde)",
              }}
            >
              <Th>Sucursal</Th>
              <Th>Ciudad</Th>
              <Th>Dirección</Th>
              <Th>Responsable</Th>
              <Th>Estado</Th>
              <Th align="right">Acciones</Th>
            </tr>
          </thead>

          <tbody>
            {sucursalesMock.map((sucursal) => (
              <tr
                key={sucursal.id}
                style={{
                  borderBottom: "1px solid var(--sumimas-color-borde)",
                }}
              >
                <Td>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <LocationOnOutlinedIcon
                      sx={{
                        fontSize: 18,
                        color: "var(--sumimas-color-azul-oscuro)",
                      }}
                    />
                    {sucursal.nombre}
                  </div>
                </Td>
                <Td>{sucursal.ciudad}</Td>
                <Td>{sucursal.direccion}</Td>
                <Td>{sucursal.responsable}</Td>
                <Td>
                  <EstadoBadge estado={sucursal.estado} />
                </Td>
                <Td align="right">
                  <button className="btn-confirmar">
                    <EditOutlinedIcon sx={{ fontSize: 18 }} />
                  </button>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =====================
   COMPONENTES AUX
===================== */

function Th({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      style={{
        textAlign: align,
        padding: "0.75rem 1rem",
        fontSize: "var(--sumimas-fs-xs)",
        fontWeight: 600,
        color: "var(--sumimas-texto-secundario)",
      }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <td
      style={{
        textAlign: align,
        padding: "0.75rem 1rem",
        fontSize: "var(--sumimas-fs-sm)",
        color: "var(--sumimas-texto-primario)",
      }}
    >
      {children}
    </td>
  );
}

function EstadoBadge({ estado }: { estado: string }) {
  const isActiva = estado === "Activa";

  return (
    <span
      style={{
        padding: "0.25rem 0.6rem",
        borderRadius: "999px",
        fontSize: "var(--sumimas-fs-xs)",
        fontWeight: 500,
        backgroundColor: isActiva
          ? "rgba(140,188,36,0.15)"
          : "rgba(214,37,37,0.15)",
        color: isActiva
          ? "var(--sumimas-color-verde)"
          : "var(--sumimas-color-rojo)",
      }}
    >
      {estado}
    </span>
  );
}
