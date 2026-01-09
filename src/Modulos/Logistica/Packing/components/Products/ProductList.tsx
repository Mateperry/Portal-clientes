import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';   
// Importamos hook de estado de React
import { useState } from "react";

// Tipos
import type { Product } from "../../interfaces/Product";

// Componentes internos
import SearchBar from "./SearchBar";
import DraggableProduct from "./DraggableProduct";
import PaginationButtons from "./PaginationButtons";
import AssignItemsModal from "../UI/AssignItemsModal";

// Hooks personalizados
import { useSearchProducts } from "../../Hooks/Products/useSearchProducts";
import { usePagination } from "../../Hooks/Pagination/usePagination";
import { useResponsiveItems } from "../../Hooks/UI/useResponsiveItems";
import { useToggleVisibility } from "../../Hooks/UI/useToggleVisibility";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

// Props del componente
interface ProductListProps {
  products: Product[];
  usedProductIds?: number[];
  decreaseQuantity: (id: number, amount: number) => void;
  assignToMultipleBoxes?: (
    product: Product | number,
    amountPerBox: number,
    numberOfBoxes: number
  ) => void;
}

// Componente principal ProductList
function ProductList({
  products,
  usedProductIds = [],
  decreaseQuantity,
  assignToMultipleBoxes,
}: ProductListProps) {

  // Filtramos productos disponibles
  const availableProducts = products.filter(
    (p) => p.quantity > 0 && !usedProductIds.includes(p.id)
  );

  // Hook para búsqueda
  const { search, onChange, filtered } = useSearchProducts(availableProducts);

  // Items por página
  const itemsPerPage = useResponsiveItems();

  // Paginación
  const { page, totalPages, currentItems, nextPage, prevPage, resetPage } =
    usePagination(filtered, itemsPerPage);

  // Mostrar / ocultar descripción
  const { visible: showDescription, toggle } = useToggleVisibility(true);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e);
    resetPage();
  }

  // ---------------------------
  // MODAL ASIGNAR A VARIAS CAJAS
  // ---------------------------
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openAssignModal(product: Product) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  function closeModal() {
    setSelectedProduct(null);
    setIsModalOpen(false);
  }

  return (
    <div className="w-full sm:w-2/12 md:w-3/12 lg:w-1/5 xl:w-1/5 bg-gray-50 rounded-xl p-3 flex flex-col gap-3 shadow-inner max-h-full">

      {/* Barra de búsqueda */}
      <SearchBar value={search} onChange={handleSearch} />

      {/* Contador de SKU */}
      {/* Eliminado bg-gray-200 para que el ojo se vea sobre fondo limpio */}
      <div className="rounded-xl py-2 flex flex-col items-center justify-center texto-primario-sumimas border border-gray-200 shadow-sm relative">
        <div className="absolute top-1 right-1">
          {/* Reemplazado EyeToggleButton por el Icono pedido, sin fondo */}
          <button 
            onClick={toggle} 
            className="bg-transparent border-none p-0 flex items-center justify-center cursor-pointer outline-none"
          >
            <RemoveRedEyeOutlinedIcon 
              style={{ 
                fontSize: 18, 
                color: showDescription ? "var(--sumimas-color-azul-oscuro)" : "#9ca3af" 
              }} 
            />
          </button>
        </div>
        <span className="text-sm-sumimas">Cantidad de SKU:</span>
        <span className="text-base-sumimas font-semibold">
          {filtered.length}
        </span>
      </div>

      {/* LISTA O MENSAJE FINAL */}
      <div className="flex flex-col gap-2 flex-1 justify-center">
        {availableProducts.length === 0 ? (
          <div className="text-center  border  rounded-xl p-4 shadow-sm">
           <AssignmentTurnedInIcon className="text-[#152c48] text-3xl" />
            <p className="font-semibold text-sm">
                Todos los productos fueron empacados
            </p>
            <p className="text-xs mt-1">
              No quedan productos pendientes
            </p>
          </div>
        ) : (
          currentItems.map((p) => (
            <DraggableProduct
              key={p.id}
              product={p}
              showDescription={showDescription}
              onOpenAssign={() => openAssignModal(p)}
            />
          ))
        )}
      </div>

      {/* Paginación */}
      {filtered.length > itemsPerPage && availableProducts.length > 0 && (
        <PaginationButtons
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}

      {/* MODAL ASIGNAR */}
      <AssignItemsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
        onAssignToMultipleBoxes={(amountPerBox, numberOfBoxes) => {
          if (!selectedProduct) return;

          if (assignToMultipleBoxes) {
            assignToMultipleBoxes(selectedProduct, amountPerBox, numberOfBoxes);
          } else {
            const total = amountPerBox * numberOfBoxes;
            decreaseQuantity(selectedProduct.id, total);
          }

          closeModal();
        }}
      />
    </div>
  );
}

export default ProductList;