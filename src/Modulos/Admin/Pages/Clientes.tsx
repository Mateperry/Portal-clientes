import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const clientesMock = [
  {
    id: 1,
    nombre: "Sumimas S.A.S",
    tipo: "Empresa",
    contacto: "Juan Rodríguez",
    email: "contacto@sumimas.com",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "EcoLogística Ltda",
    tipo: "Empresa",
    contacto: "María Torres",
    email: "maria@ecologistica.com",
    estado: "Activo",
  },
  {
    id: 3,
    nombre: "Carlos Mejía",
    tipo: "Persona",
    contacto: "Carlos Mejía",
    email: "carlos@gmail.com",
    estado: "Inactivo",
  },
];

export default function Clientes() {
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
          <h1>Clientes</h1>
          <p className="subtitle">
            Administración y seguimiento de clientes
          </p>
        </div>

        <button className="btn-uno">
          <AddOutlinedIcon sx={{ fontSize: 18, marginRight: "0.3rem" }} />
          Crear cliente
        </button>
      </div>

      {/* TABLA */}
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
              <Th>Cliente</Th>
              <Th>Tipo</Th>
              <Th>Contacto</Th>
              <Th>Email</Th>
              <Th>Estado</Th>
              <Th align="right">Acciones</Th>
            </tr>
          </thead>

          <tbody>
            {clientesMock.map((cliente) => (
              <tr
                key={cliente.id}
                style={{
                  borderBottom: "1px solid var(--sumimas-color-borde)",
                }}
              >
                <Td>{cliente.nombre}</Td>
                <Td>{cliente.tipo}</Td>
                <Td>{cliente.contacto}</Td>
                <Td>{cliente.email}</Td>
                <Td>
                  <EstadoBadge estado={cliente.estado} />
                </Td>
                <Td align="right">
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button className="btn-dos">
                      <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                    </button>
                    <button className="btn-confirmar">
                      <EditOutlinedIcon sx={{ fontSize: 18 }} />
                    </button>
                  </div>
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
  const isActivo = estado === "Activo";

  return (
    <span
      style={{
        padding: "0.25rem 0.6rem",
        borderRadius: "999px",
        fontSize: "var(--sumimas-fs-xs)",
        fontWeight: 500,
        backgroundColor: isActivo
          ? "rgba(140,188,36,0.15)"
          : "rgba(214,37,37,0.15)",
        color: isActivo
          ? "var(--sumimas-color-verde)"
          : "var(--sumimas-color-rojo)",
      }}
    >
      {estado}
    </span>
  );
}
