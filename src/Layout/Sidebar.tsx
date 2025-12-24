import SidebarItem from "./SidebarItem";
import { useLayout } from "./LayoutContext";
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
export default function Sidebar() {
  const { isSidebarOpen } = useLayout();

  return (
<aside
  className={`
    bg-white border-r
    h-full
    transition-all duration-300 ease-in-out
    overflow-hidden
    ${isSidebarOpen ? "w-[13%]" : "w-15"}
  `}
>

      <nav className="flex flex-col gap-1 p-2">
        <SidebarItem
          label="Inicio"
          to="/"
          icon={<HomeIcon  sx={{ fontSize: 30 }} />}
          showLabel={isSidebarOpen}
        />
        <SidebarItem
          label="Packing"
          to="/packing"
          icon= {<LocalShippingIcon sx={{ fontSize: 30 }} />}
          showLabel={isSidebarOpen}
        />

      </nav>
    </aside>
  );
}
