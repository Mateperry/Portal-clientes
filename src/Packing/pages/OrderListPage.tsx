import { useOrders } from "../Hooks/Orders/useOrders";
import { useState, useMemo } from "react";
import type { Order } from "../types/order";

interface OrderListPageProps {
  onSelect: (id: string) => void;
}

export default function OrderListPage({ onSelect }: OrderListPageProps) {
  const { orders, loading } = useOrders();
  const [search, setSearch] = useState("");
  const [dateSort, setDateSort] = useState<"desc" | "asc">("desc");

  const formatDate = (date?: string) => {
    if (!date) return "-";
    const d = new Date(date);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}/${m}/${day}`;
  };

  const filteredOrders = useMemo(() => {
    const term = search.toLowerCase();

    return orders
      .filter((order: Order) => {
        const formattedDate = formatDate(order.created_at).toLowerCase();
        return (
          order.id?.toString().includes(term) ||
          order.client?.toLowerCase().includes(term) ||
          order.id_client?.toLowerCase().includes(term) ||
          order.Destino?.toLowerCase().includes(term) ||
          formattedDate.includes(term)
        );
      })
      .sort((a, b) => {
        const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
        if (dateA !== dateB) return dateSort === "desc" ? dateB - dateA : dateA - dateB;
        return dateSort === "desc"
          ? (b.id ?? 0) - (a.id ?? 0)
          : (a.id ?? 0) - (b.id ?? 0);
      });
  }, [orders, search, dateSort]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        Cargando órdenes…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-6 overflow-auto">
      {/* HEADER */}
      <div className="mb-6">
<h2
  className="
    bg-sumimas-primary
    text-center
    rounded-full
    px-4 py-2
    text-sm-sumimas
    sm:px-6 sm:py-3
    sm:text-base-sumimas
    md:text-md-sumimas
  "
>
  LISTADO DE ÓRDENES DE COMPRA
</h2>


<div
  className="
    texto-secundario-sumimas
    mt-1
    text-xs-sumimas
    sm:mt-2
    sm:text-sm-sumimas
  "
>
  Total de órdenes:{" "}
  <span className="font-semibold">{filteredOrders.length}</span>
</div>

      </div>

      {/* BUSCADOR */}
      <div className="mb-4">
<input
  type="text"
  placeholder="Buscar por código, cliente, destino o fecha"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="
    w-full
    rounded-xl
    border border-[#142c4c]
    shadow-sm
    px-3 py-2
    text-sm-sumimas
    focus:outline-none
    focus:ring-2
    focus:ring-[#142c4c]
    sm:px-4 sm:py-3
    sm:text-base-sumimas
  "
/>

      </div>

      {/* TABLA */}
      <div className="overflow-x-auto rounded-xl border">
        <table className="min-w-full">
          <thead className="bg-sumimas-primary text-base-sumimas font-normal">
            <tr>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-medium">
                Código
              </th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-medium">
                Cliente
              </th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-medium">
                Destino
              </th>

              <th
                onClick={() =>
                  setDateSort((prev) => (prev === "desc" ? "asc" : "desc"))
                }
                className="px-2 py-2 sm:px-4 sm:py-3 text-left cursor-pointer select-none"
              >
                <div className="flex items-center gap-1 sm:gap-2 font-normal">
                  Fecha
                  <span>{dateSort === "desc" ? "▼" : "▲"}</span>
                </div>
              </th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-right font-medium">
                Valor Total
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-6 texto-secundario-sumimas"
                >
                  No se encontraron órdenes con los criterios seleccionados.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order: Order) => (
                <tr key={order.id} className="hover:bg-slate-50 text-sm-sumimas">
                  {/* SOLO ESTE ES CLICKEABLE */}
                  <td
                    onClick={() =>
                      onSelect(order.id?.toString() || "")
                    }
                    className="px-2 py-2 sm:px-4 sm:py-3 font-semibold
                               text-base-sumimas texto-primario-sumimas
                               flex items-center gap-1 sm:gap-2
                               cursor-pointer"
                  >
                    ORD-{order.id}
                  </td>

                  <td className="px-2 py-2 sm:px-4 sm:py-3">
                    <div className="font-medium">{order.client || "-"}</div>
                    <div className="text-sm-sumimas">
                      ID: {order.id_client || "-"}
                    </div>
                  </td>

                  <td className="px-2 py-2 sm:px-4 sm:py-3">
                    {order.Destino || "-"}
                  </td>

                  <td className="px-2 py-2 sm:px-4 sm:py-3 texto-secundario-sumimas">
                    {formatDate(order.created_at)}
                  </td>

                  <td className="px-2 py-2 sm:px-4 sm:py-3 text-right text-base-sumimas font-semibold">
                    {order.Valor_total !== undefined
                      ? `$${order.Valor_total.toLocaleString()}`
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
