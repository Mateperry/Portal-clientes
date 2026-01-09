import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import CloseIcon from "@mui/icons-material/Close";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import type { Product } from "../interfaces/Product";

/* =========================
   TIPOS
========================= */
interface ReadyBox {
  id: number;
  boxCode: string;      
  titulo?: string;
  productos: Product[];
}

interface LabelsPageProps {
  readyBoxes: ReadyBox[];
  onExit: () => void;
  onFinish?: () => void;
}

export default function LabelsPage({
  readyBoxes,
  onExit,
  onFinish,
}: LabelsPageProps) {
  return (
    <div className="min-h-screen bg-white p-4">

      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-3">
        <h2 className="bg-[#152c48] text-white text-center py-3 px-6 rounded-full text-lg shadow">
          RÓTULOS DE CAJAS
        </h2>

        <div className="flex justify-center gap-3 flex-wrap">

          {/* IMPRIMIR */}
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2 rounded-full
                       bg-[#152c48] text-white hover:bg-[#0f2238] transition"
          >
            <LocalPrintshopOutlinedIcon fontSize="small" />
            Imprimir
          </button>

          {/* VOLVER */}
          <button
            onClick={onExit}
            className="flex items-center gap-2 px-5 py-2 rounded-full
                       bg-red-100 text-red-500 border border-red-300
                       hover:bg-red-200 transition"
          >
            <CloseIcon fontSize="small" />
            Volver
          </button>

          {/* FINALIZAR */}
          <button
            onClick={() => {
              console.log("Cajas listas:", readyBoxes);
              onFinish?.();
            }}
            className="flex items-center gap-2 px-5 py-2 rounded-full
                       bg-[#80ac22] text-white hover:bg-[#6b8a1a] transition"
          >
            <DoneAllIcon fontSize="small" />
            Finalizado
          </button>
        </div>
      </div>

      {/* CONTENIDO IMPRIMIBLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {readyBoxes.map((box) => (
          <div
            key={box.id}
            className="border rounded-xl p-4 shadow-sm break-inside-avoid"
          >
            {/*  AQUÍ ESTÁ LA CLAVE */}
            <h3 className="text-lg font-bold mb-1 text-[#152c48]">
              {box.boxCode.toUpperCase()}
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              {box.titulo}
            </p>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-1">Producto</th>
                  <th className="text-right py-1">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {box.productos.map((p) => (
                  <tr key={p.id} className="border-b last:border-b-0">
                    <td className="py-1">
                      {p.name}
                      {p.description && (
                        <span className="text-gray-500">
                          {" "}({p.description})
                        </span>
                      )}
                    </td>
                    <td className="py-1 text-right font-semibold">
                      {p.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
