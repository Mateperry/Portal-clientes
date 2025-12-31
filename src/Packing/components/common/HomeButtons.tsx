import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

interface HomeButtonsProps {
  onCancel?: () => void;
  onFinish?: () => void;
  canFinish: boolean;
}

function HomeButtons({ onCancel, onFinish, canFinish }: HomeButtonsProps) {
  return (
    <div className="home-buttons w-full flex justify-center my-1">
      <div className="flex flex-nowrap justify-center gap-2 sm:gap-4 md:gap-6">

        <button
          className="btn-cancelar flex items-center gap-1 sm:gap-2 rounded-full text-sm-sumimas" 
          onClick={onCancel}
        >
          <CloseIcon fontSize="small" />
          Cancelar proceso
        </button>

        {/* ===== FINALIZAR ===== 
            Usa la clase .btn-confirmar de tu CSS cuando está activo.
        */}
        <button
          disabled={!canFinish}
          onClick={canFinish ? onFinish : undefined}
          className={`
            flex items-center gap-1 sm:gap-2 transition rounded-full text-sm-sumimas
            ${canFinish
              ? "btn-confirmar " /* Tu estilo CSS verde */
              : "bg-gray-300 text-gray-500 cursor-not-allowed" /* Estilo gris para deshabilitado (no estaba en tu CSS) */
            }
          `}
        >
          <CheckIcon fontSize="small" />
          Finalizar proceso
        </button>

      </div>
    </div>
  );
}

export default HomeButtons;