import { useState } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import ProductList from "../components/Products/ProductList";
import BoxList from "../components/Box/Boxlist";
import HomeButtons from "../components/common/HomeButtons";
import DragQuantityModal from "../components/UI/DragQuantityModal";
import ReadyBoxesPanel from "../components/UI/ReadyBoxesPanel";

import { usePackingService } from "../Hooks/Shipping/usePackingService";
import { useBoxShipping } from "../Hooks/Shipping/useBoxShipping";

import type { Product } from "../interfaces/Product";

interface PackingPageProps {
  orderId: string;              // 👈 OBLIGATORIO
  orderProducts?: Product[];
  onCancel?: () => void;
  onFinishProcess?: (readyBoxes: any[]) => void;
}

function PackingPage({
  orderId,                       // 👈 LO RECIBES AQUÍ
  orderProducts,
  onCancel,
  onFinishProcess,
}: PackingPageProps) {
  /* =========================
     PACKING
  ========================= */
  const {
    products,
    boxes,
    eliminarCaja,
    aumentarCajas,
    handleDragEnd,
    handleRemoveProduct,
    decrementOne,
    assignToMultipleBoxes,
    decreaseQuantity,
    isQuantityModalOpen,
    quantityModalProduct,
    quantityModalBoxId,
    quantityModalQuantity,
    closeQuantityModal,
    updateQuantityModalQuantity,
    handleConfirmDragQuantity,
    resetBox,
    restoreProductsToFirstEmptyBox,
    restoreProductsToIndex,
  } = usePackingService(orderProducts);

  /* =========================
     SHIPPING (🔴 AQUÍ ESTABA EL ERROR)
  ========================= */
  const {
    readyBoxes,
    markBoxReady,
    unmarkBoxReady,
  } = useBoxShipping(orderId); // ✅ PASAS orderId

  const [isReadyBoxesOpen, setIsReadyBoxesOpen] = useState(true);

  /* =========================
     ESTADOS DERIVADOS
  ========================= */
  const remainingProducts = products.reduce(
    (sum, p) => sum + (p.quantity || 0),
    0
  );

  const canFinish =
    remainingProducts === 0 &&
    boxes.every((box) => box.productos.length === 0);

  /* =========================
     HANDLERS
  ========================= */
  const handleMarkBoxReady = (boxId: number, productos: Product[]) => {
    const box = boxes.find((b) => b.id === boxId);
    if (!box || box.productos.length === 0) return;

    markBoxReady({
      titulo: `Caja ${boxId + 1}`,
      productos,
      sourceIndex: boxId,
    });

    resetBox(boxId);
    setIsReadyBoxesOpen(true);
  };

  const handleRestoreReady = (readyBoxId: number) => {
    const box = readyBoxes.find((b) => b.id === readyBoxId);
    if (!box) return;

    const sourceIndex =
      typeof box.sourceIndex === "number" ? box.sourceIndex : undefined;

    if (typeof sourceIndex === "number") {
      restoreProductsToIndex(
        sourceIndex,
        box.productos.map((p) => ({ ...p }))
      );
    } else {
      restoreProductsToFirstEmptyBox(
        box.productos.map((p) => ({ ...p }))
      );
    }

    unmarkBoxReady(readyBoxId);
  };

  const handleFinishProcess = () => {
    if (!canFinish || readyBoxes.length === 0) return;
    onFinishProcess?.(readyBoxes);
  };

  /* =========================
     DND
  ========================= */
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 10, tolerance: 2 } })
  );

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="p-1 bg-white max-w-full mx-auto max-h-[calc(100vh-5rem)] overflow-y-auto">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <div className="flex flex-col items-center mb-3 gap-3 w-full">
          <h2 className="bg-sumimas-primary text-center rounded-full px-4 py-2 w-full">
            DISTRIBUCIÓN DE PRODUCTOS
          </h2>

          <HomeButtons
            onCancel={onCancel}
            onFinish={handleFinishProcess}
            canFinish={canFinish}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <ProductList
            products={products}
            assignToMultipleBoxes={assignToMultipleBoxes}
            decreaseQuantity={decreaseQuantity}
          />

          <div className="flex-1 bg-gray-50 rounded-xl p-2 shadow-inner">
            <BoxList
              boxes={boxes}
              eliminarCaja={eliminarCaja}
              agregarCaja={aumentarCajas}
              decrementOne={decrementOne}
              removeProduct={handleRemoveProduct}
              onMarkBoxReady={handleMarkBoxReady}
              readyBoxIds={readyBoxes.map((b) => b.sourceIndex ?? -1)}
              productsCount={remainingProducts}
              isReadyBoxesOpen={isReadyBoxesOpen}
              onToggleReadyBoxes={() => setIsReadyBoxesOpen((s) => !s)}
              readyBoxesCount={readyBoxes.length}
            />
          </div>
        </div>
      </DndContext>

      <ReadyBoxesPanel
        readyBoxes={readyBoxes}
        onRestore={handleRestoreReady}
        isOpen={isReadyBoxesOpen}
        onClose={() => setIsReadyBoxesOpen(false)}
      />

      <DragQuantityModal
        isOpen={isQuantityModalOpen}
        product={quantityModalProduct ?? null}
        quantity={quantityModalQuantity}
        onQuantityChange={updateQuantityModalQuantity}
        onConfirm={() => {
          if (quantityModalProduct && quantityModalBoxId !== null) {
            handleConfirmDragQuantity(
              quantityModalProduct,
              quantityModalBoxId,
              quantityModalQuantity
            );
          }
        }}
        onCancel={closeQuantityModal}
      />
    </div>
  );
}

export default PackingPage;
