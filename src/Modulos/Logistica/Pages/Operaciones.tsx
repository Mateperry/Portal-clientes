import { useNavigate } from "react-router-dom";

type Estado = "Pendiente" | "En packing" | "Listo";

interface Pedido {
  id: string;
  cliente: string;
  fecha: string;
  estado: Estado;
}

const pedidosMock: Pedido[] = [
  { id: "PED-001", cliente: "Cliente A", fecha: "2026-01-08", estado: "Pendiente" },
  { id: "PED-002", cliente: "Cliente B", fecha: "2026-01-08", estado: "En packing" },
  { id: "PED-003", cliente: "Cliente C", fecha: "2026-01-07", estado: "Pendiente" },
  { id: "PED-004", cliente: "Cliente D", fecha: "2026-01-07", estado: "Listo" },
];

export default function Operaciones() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "1.5rem" }}>
      {/* HEADER */}
      <div style={{ marginBottom: "1.75rem" }}>
        <h1>Operaciones</h1>
        <p className="subtitle">
          Control y seguimiento de pedidos logísticos
        </p>
      </div>

      {/* TABLA */}
      <div
        style={{
          background: "var(--sumimas-color-superficie)",
          borderRadius: "var(--sumimas-radio-lg)",
          boxShadow: "var(--sumimas-sombra-sm)",
          padding: "1.25rem",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "var(--sumimas-fs-sm)",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "1px solid var(--sumimas-color-borde)",
                textAlign: "left",
              }}
            >
              <th>Pedido</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {pedidosMock.map((pedido) => (
              <tr
                key={pedido.id}
                style={{
                  borderBottom: "1px solid var(--sumimas-color-borde)",
                }}
              >
                <td>{pedido.id}</td>
                <td>{pedido.cliente}</td>
                <td>{pedido.fecha}</td>
                <td>
                  <EstadoBadge estado={pedido.estado} />
                </td>
                <td>
                  {pedido.estado !== "Listo" ? (
                    <button
                      className="btn-uno"
                      onClick={() => navigate("/logistica/packing")}
                    >
                      Ir a Packing
                    </button>
                  ) : (
                    <span className="text-xs-sumimas texto-secundario-sumimas">
                      Completado
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =====================
   ESTADO BADGE
===================== */
function EstadoBadge({ estado }: { estado: Estado }) {
  let bg = "var(--sumimas-color-azul-suave)";
 

  if (estado === "Pendiente") bg = "rgba(244,148,68,0.15)";
  if (estado === "En packing") bg = "rgba(92,195,235,0.18)";
  if (estado === "Listo") bg = "rgba(140,188,36,0.18)";

  return (
    <span
      style={{
        padding: "0.25rem 0.6rem",
        borderRadius: "var(--sumimas-radio-sm)",
        fontSize: "var(--sumimas-fs-xs)",
        fontWeight: 500,
        background: bg,
      }}
    >
      {estado}
    </span>
  );
}
