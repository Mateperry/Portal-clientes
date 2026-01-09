import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
export const comercialSidebarItems = [
      {
    label: "Inicio  ",
    to: "/",
    icon: <HomeWorkOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    label: "Dashboard",
    to: "/admin/dashboard",
    icon: <MapsHomeWorkOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    label: "Usuarios",
    to: "/admin/usuarios",
    icon: <Inventory2OutlinedIcon sx={{ fontSize: 28 }} />,
  },
];
