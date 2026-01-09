import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const documentosMock = [
  {
    id: 1,
    nombre: "Contrato Cliente ACME.pdf",
    tipo: "Contrato",
    modulo: "Clientes",
    fecha: "2025-01-10",
    estado: "Vigente",
  },
  {
    id: 2,
    nombre: "Manual Operativo Logística.pdf",
    tipo: "Manual",
    modulo: "Logística",
    fecha: "2024-12-05",
    estado: "Vigente",
  },
  {
    id: 3,
    nombre: "Política Comercial.docx",
    tipo: "Política",
    modulo: "Comercial",
    fecha: "2023-11-20",
    estado: "Vencido",
  },
];

export default function Documentos() {
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
          <h1>Documentos</h1>
          <p className="subtitle">
            Gestión y control de documentos del sistema
          </p>
        </div>

        <button className="btn-uno">
          <AddOutlinedIcon sx={{ fontSize: 18, marginRight: "0.3rem" }} />
          Subir documento
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
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr
              style={{
                background: "#f9fafb",
                borderBottom: "1px solid var(--sumimas-color-borde)",
              }}
            >
              <Th>Documento</Th>
              <Th>Tipo</Th>
              <Th>Módulo</Th>
              <Th>Fecha</Th>
              <Th>Estado</Th>
              <Th align="right">Acciones</Th>
            </tr>
          </thead>

          <tbody>
            {documentosMock.map((doc) => (
              <tr
                key={doc.id}
                style={{
                  borderBottom: "1px solid var(--sumimas-color-borde)",
                }}
              >
                <Td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <DescriptionOutlinedIcon
                      sx={{
                        fontSize: 18,
                        color: "var(--sumimas-color-azul-oscuro)",
                      }}
                    />
                    {doc.nombre}
                  </div>
                </Td>
                <Td>{doc.tipo}</Td>
                <Td>{doc.modulo}</Td>
                <Td>{doc.fecha}</Td>
                <Td>
                  <EstadoBadge estado={doc.estado} />
                </Td>
                <Td align="right">
                  <button className="btn-secundario">
                    <DownloadOutlinedIcon sx={{ fontSize: 18 }} />
                  </button>
                  <button
                    className="btn-confirmar"
                    style={{ marginLeft: "0.4rem" }}
                  >
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
  const isVigente = estado === "Vigente";

  return (
    <span
      style={{
        padding: "0.25rem 0.6rem",
        borderRadius: "999px",
        fontSize: "var(--sumimas-fs-xs)",
        fontWeight: 500,
        backgroundColor: isVigente
          ? "rgba(140,188,36,0.15)"
          : "rgba(214,37,37,0.15)",
        color: isVigente
          ? "var(--sumimas-color-verde)"
          : "var(--sumimas-color-rojo)",
      }}
    >
      {estado}
    </span>
  );
}
