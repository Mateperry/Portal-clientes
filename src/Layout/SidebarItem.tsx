import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  to: string;
  icon: ReactNode;
  showLabel: boolean;
}

export default function SidebarItem({
  label,
  to,
  icon,
  showLabel,
}: Props) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `
        group relative flex items-center gap-3
        px-3 py-2 rounded-md
        text-sm font-medium
        font-[Inter]
        transition-all duration-200

        ${
          isActive
            ? "bg-[rgba(20,44,76,0.12)] text-[#142c4c]"
            : "text-gray-600 hover:bg-[rgba(20,44,76,0.08)] hover:text-[#1b3b66]"
        }
        `
      }
    >
      {/* Indicador lateral (activo) */}
      <span
        className={`
          absolute left-0 top-1/2 -translate-y-1/2
          h-6 w-1 rounded-r
          bg-[#142c4c]
          transition-opacity
          opacity-0 group-[.active]:opacity-100
        `}
      />

      {/* Icono */}
      <span
        className={`
          text-[22px]
          transition-colors
          group-hover:text-[#1b3b66]
        `}
      >
        {icon}
      </span>

      {/* Texto */}
      {showLabel && (
        <span className=" text-lg ">
          {label}
        </span>
      )}
    </NavLink>
  );
}
