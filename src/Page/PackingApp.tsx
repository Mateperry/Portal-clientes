import { useState } from "react";

import OrderListPage from "../Packing/pages/OrderListPage";
import PackingPage from "../Packing/pages/PackingPage";
import LabelsPage from "../Packing/pages/LabelsPage";

import type { Product } from "../Packing/interfaces/Product";
import { useOrders } from "../Packing/Hooks/Orders/useOrders";

/* =========================
   TIPOS
========================= */
type View = "orders" | "packing" | "labels";

/* =========================
   PACKING MODULE
========================= */
export default function PackingApp() {
  const [view, setView] = useState<View>("orders");
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [orderProducts, setOrderProducts] = useState<Product[]>([]);
  const [readyBoxes, setReadyBoxes] = useState<any[]>([]);

  const { orders } = useOrders();

  const finalizeProcess = () => {
    setReadyBoxes([]);
    setOrderProducts([]);
    setSelectedOrderId(null);
    setView("orders");
  };

  /* ======================
     1️⃣ ORDERS
  ====================== */
  if (view === "orders") {
    return (
      <OrderListPage
        onSelect={(id) => {
          const order = orders.find((o) => String(o.id) === id);

          if (order && Array.isArray(order.products)) {
            setOrderProducts(
              order.products.map((p: any) => ({
                id: p.id,
                name: p.name,
                description: p.description || "",
                quantity: p.quantity || 1,
              }))
            );
          }

          setSelectedOrderId(id);
          setView("packing");
        }}
      />
    );
  }

  /* ======================
     2️⃣ PACKING + LABELS
  ====================== */
  return (
    <>
      <div className={view === "labels" ? "hidden" : "block"}>
        <PackingPage
          orderId={selectedOrderId!}
          orderProducts={orderProducts}
          onCancel={() => {
            setView("orders");
            setSelectedOrderId(null);
            setReadyBoxes([]);
            setOrderProducts([]);
          }}
          onFinishProcess={(boxes) => {
            setReadyBoxes(boxes);
            setView("labels");
          }}
        />
      </div>

      {view === "labels" && (
        <LabelsPage
          readyBoxes={readyBoxes}
          onExit={() => setView("packing")}
          onFinish={finalizeProcess}
        />
      )}
    </>
  );
}
