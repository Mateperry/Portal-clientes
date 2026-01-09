import { useState } from "react";
import { createPortal } from "react-dom";

// Material UI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// Iconos
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CategoryIcon from "@mui/icons-material/Category";
import CheckIcon from "@mui/icons-material/Check";

// Componentes internos
import DroppableBox from "./DroppableBox";
import BoxContend from "./BoxContend";

import type { Product } from "../../interfaces/Product";

interface Props {
  titulo: string;
  onEliminar: () => void;
  boxId: number;
  productos: Product[];
  decrementOne: (boxId: number, prodId: number) => void;
  removeProduct: (boxId: number, prodId: number) => void;
  onMarkBoxReady?: (boxId: number, productos: Product[]) => void;
  visibleBoxes?: { id: number; productos: Product[] }[];
  setToastMessage?: (msg: string) => void;
}

export default function BoxCard({
  titulo,
  onEliminar,
  boxId,
  productos,
  decrementOne,
  removeProduct,
  onMarkBoxReady,
  visibleBoxes,
  setToastMessage,
}: Props) {
  const [hoverMode, setHoverMode] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const [tooltipText, setTooltipText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>, text: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({ top: rect.top, left: rect.left + rect.width / 2 });
    setTooltipText(text);
    setIsHovering(true);
  };

  const handleLeave = () => {
    setIsHovering(false);
    setTooltipText("");
  };

  const hasProducts = productos.length > 0;

  const handleMarkReady = () => {
    if (!visibleBoxes) return;
    const otherEmptyBoxes = visibleBoxes.some(
      (b) => b.id !== boxId && b.productos.length === 0
    );
    if (otherEmptyBoxes) {
      setToastMessage?.("Elimina las cajas vacias antes");
      return;
    }
    onMarkBoxReady?.(boxId, productos);
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          py: 1,
          my: 1,
          overflow: "visible",
        }}
      >
        <CardHeader
          title={titulo}
          action={
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <IconButton
                size="medium"
                onClick={() => {
                  setHoverMode(!hoverMode);
                  handleLeave();
                }}
                sx={{
                  bgcolor: "white",
                  border: "1px solid #e0e0e0",
                  "&:hover": { bgcolor: "#f3f3f3" },
                }}
              >
                {hoverMode ? (
                  <VisibilityOffOutlinedIcon sx={{ fontSize: 20 }} />
                ) : (
                  <VisibilityOutlinedIcon sx={{ fontSize: 20 }} />
                )}
              </IconButton>

              <IconButton
                size="medium"
                onClick={() => {
                  handleLeave();
                  onEliminar();
                }}
                disabled={hasProducts}
                sx={{
                  bgcolor: "white",
                  border: "1px solid #e0e0e0",
                  "&:hover": {
                    bgcolor: hasProducts ? "white" : "#ffe5e5",
                  },
                }}
              >
                <DeleteOutlineIcon
                  sx={{
                    fontSize: 18,
                    color: hasProducts ? "#bdbdbd" : "red",
                  }}
                />
              </IconButton>

<IconButton
  size="medium"
  disabled={!hasProducts}
  onClick={handleMarkReady}
  disableRipple
  sx={{
    bgcolor: hasProducts ? "#152c48" : "#1b3b66",
    color: "white",
    width: 36,
    height: 36,

    "&:hover": {
      bgcolor: hasProducts ? "#152c48" : "#1b3b66",
    },

    "&.Mui-disabled": {
      bgcolor: "#1b3b66",
      color: "#cfd8dc",
    },
  }}
>
  <CheckIcon sx={{ fontSize: 20 }} />
</IconButton>

            </Box>
          }
          sx={{
            px: 2,
            py: 1,
            "& .MuiCardHeader-title": {
              fontSize: 14,
              fontWeight: 500,
            },
          }}
        />

        <DroppableBox boxId={boxId}>
          {!hasProducts ? (
            <BoxContend />
          ) : (
            <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 0 }}>
              {productos.map((prod) => (
                <Box
                  key={prod.id}
                  sx={{
                    p: "2px 10px",
                    borderRadius: "12px",
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => handleEnter(e, prod.description)}
                  onMouseLeave={handleLeave}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CategoryIcon sx={{ fontSize: 18 }} />
                    {!hoverMode ? (
                      <span style={{ fontSize: 12 }}>
                        {prod.description} × {prod.quantity}
                      </span>
                    ) : (
                      <span>{prod.name} × {prod.quantity}</span>
                    )}
                  </Box>

                  {/* BOTONES PEGADOS */}
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {prod.quantity >= 2 && (
                      <button
                        onClick={() =>{  
                          decrementOne(boxId, prod.id)
                         } }
                        style={{ padding: 0 }}
                      >
                        <RemoveCircleIcon sx={{ fontSize: 22 }} />
                      </button>
                    )}
                    <button
                      onClick={() =>{ handleLeave(); removeProduct(boxId, prod.id);}}
                      style={{ padding: 0 }}
                    >
                      <CancelIcon sx={{ fontSize: 22, color: "red" }} />
                    </button>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </DroppableBox>
      </Card>

      {isHovering &&
        tooltipText &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: tooltipPos.top - 8,
              left: tooltipPos.left,
              transform: "translate(-50%, -100%)",
              background: "black",
              color: "white",
              padding: "6px 10px",
              borderRadius: "8px",
              fontSize: "12px",
              zIndex: 9999,
            }}
          >
            {tooltipText}
          </div>,
          document.body
        )}
    </>
  );
}
