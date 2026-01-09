import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

export const logisticaSidebarItems = [
    {
    label: "Inicio",
    to: "/",
    icon: <HomeWorkOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    label: "Logisticas",
    to: "/logistica",
    icon: <BusinessOutlinedIcon sx={{ fontSize: 28 }} />,
  },

  {
    label: "Dashboard",
    to: "/logistica/dashboard",
    icon: <DashboardOutlinedIcon sx={{ fontSize: 28 }} />,
  },

  {
    label: "Operaciones",
    to: "/logistica/operaciones",
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 28 }} />,
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
