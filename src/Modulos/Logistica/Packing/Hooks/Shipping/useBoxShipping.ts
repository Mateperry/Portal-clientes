import { useRef, useState } from "react";
import type { Product } from "../../interfaces/Product";

/* =========================
   TIPOS
========================= */

export interface ReadyBox {
  id: number;            // ID interno (React / estado)
  boxCode: string;       // orden-123-caja1
  titulo: string;
  productos: Product[];
  readyAt: Date;
  sourceIndex?: number;
}

export interface ShippedBox extends ReadyBox {
  shippedAt: Date;
  status: "shipped";
}

/* =========================
   HOOK
========================= */

export function useBoxShipping(orderId: string | number) {
  const [readyBoxes, setReadyBoxes] = useState<ReadyBox[]>([]);
  const [shippedBoxes, setShippedBoxes] = useState<ShippedBox[]>([]);

  // Contadores
  const nextInternalIdRef = useRef(1); // id interno
  const nextBoxNumberRef = useRef(1);  // caja1, caja2...

  /* =========================
     MARCAR CAJA COMO LISTA
  ========================= */
  const markBoxReady = (
    box: Omit<ReadyBox, "id" | "readyAt" | "boxCode">
  ) => {
    if (orderId === undefined || orderId === null) {
      console.error("useBoxShipping: orderId es requerido");
      return;
    }

    const productosCopy = box.productos.map((p) => ({ ...p }));

    const internalId = nextInternalIdRef.current++;
    const boxNumber = nextBoxNumberRef.current++;

    const boxCode = `${orderId}-caja${boxNumber}`;

    setReadyBoxes((prev) => [
      ...prev,
      {
        ...box,
        id: internalId,
        boxCode,
        productos: productosCopy,
        readyAt: new Date(),
      },
    ]);
  };

  /* =========================
     ENVIAR UNA SOLA CAJA
  ========================= */
  const shipSingleBox = () => {
    setReadyBoxes((prev) => {
      if (prev.length === 0) return prev;

      const [first, ...rest] = prev;

      setShippedBoxes((shipped) => [
        ...shipped,
        {
          ...first,
          shippedAt: new Date(),
          status: "shipped" as const,
        },
      ]);

      return rest;
    });
  };

  /* =========================
     ENVIAR TODAS LAS CAJAS
  ========================= */
  const shipAllBoxes = () => {
    setShippedBoxes((prev) => [
      ...prev,
      ...readyBoxes.map((b) => ({
        ...b,
        shippedAt: new Date(),
        status: "shipped" as const,
      })),
    ]);

    setReadyBoxes([]);
  };

  /* =========================
     DESMARCAR CAJA
  ========================= */
  const unmarkBoxReady = (readyBoxId: number) => {
    setReadyBoxes((prev) => prev.filter((b) => b.id !== readyBoxId));
  };

  /* =========================
     LIMPIAR CAJAS
  ========================= */
  const clearReadyBoxes = () => {
    setReadyBoxes([]);
    nextBoxNumberRef.current = 1; // reinicia numeración por orden
  };

  /* =========================
     API
  ========================= */
  return {
    readyBoxes,
    shippedBoxes,
    markBoxReady,
    shipSingleBox,
    shipAllBoxes,
    clearReadyBoxes,
    unmarkBoxReady,
  };
}
