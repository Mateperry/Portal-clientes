import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  to: string;
  icon: ReactNode;
  showLabel: boolean;
  onClick?: () => void;
}

export default function SidebarItem({
  label,
  to,
  icon,
  showLabel,
  onClick,
}: Props) {
  return (
    <div className="relative group">
      <NavLink
        to={to}
        end
        onClick={onClick}
        className={({ isActive }) =>
          `
          flex items-center gap-3 px-2 py-2 rounded-md
          text-base-sumimas transition-all duration-200
          ${isActive
            ? "bg-[#142c4c] text-[#ffff]"
            : "text-gray-600 hover:bg-[rgba(20,44,76,0.08)] hover:text-[#1b3b66]"
          }
        `
        }
      >
        {/* Icono */}
        <span className="text-[22px]">{icon}</span>

        {/* Texto normal */}
        {showLabel && <span>{label}</span>}
      </NavLink>

      {/* Tooltip al hacer hover cuando sidebar cerrado */}
      {!showLabel && (
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2
                         bg-gray-900 text-white text-sm px-2 py-1 rounded
                         opacity-0 group-hover:opacity-100
                         transition-opacity duration-200
                         whitespace-nowrap pointer-events-none z-50">
          {label}
        </span>
      )}
    </div>
  );
}
