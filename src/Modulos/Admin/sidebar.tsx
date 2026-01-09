import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

export const adminSidebarItems = [
  {
    label: "Inicio",
    to: "/",
    icon: <HomeWorkOutlinedIcon sx={{ fontSize: 30 }} />,
  },

  {
    label: "Dashboard",
    to: "/admin/dashboard",
    icon: <DashboardOutlinedIcon sx={{ fontSize: 28 }} />,
  },

  {
    label: "Usuarios",
    to: "/admin/usuarios",
    icon: <PeopleOutlineIcon sx={{ fontSize: 28 }} />,
  },

  {
    label: "Clientes",
    to: "/admin/clientes",
    icon: <BusinessOutlinedIcon sx={{ fontSize: 28 }} />,
  },

  {
    label: "Configuración",
    to: "/admin/configuracion",
    icon: <SettingsOutlinedIcon sx={{ fontSize: 28 }} />,
  },

  {
    label: "Sucursales",
    to: "/admin/sucursales",
    icon: <LocationOnOutlinedIcon sx={{ fontSize: 28 }} />,
  },

  {
    label: "Documentos",
    to: "/admin/documentos",
    icon: <DescriptionOutlinedIcon sx={{ fontSize: 28 }} />,
  },

  {
    label: "Actividad",
    to: "/admin/actividad",
    icon: <HistoryOutlinedIcon sx={{ fontSize: 28 }} />,
  },
];
