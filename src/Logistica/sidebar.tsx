import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
export const logisticaSidebarItems = [
    {
    label: "Inicio  ",
    to: "/",
    icon: <HomeWorkOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    label: "Packing",
    to: "/logistica/packing",
    icon: <Inventory2OutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    label: "Estilos",
    to: "/logistica/estilos",
    icon: <StyleOutlinedIcon sx={{ fontSize: 30 }} />,
  },
];
