import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div
      className="flex items-center gap-2 transition-all duration-200"
      style={{
        backgroundColor: "var(--sumimas-color-superficie)",
        border: "1px solid var(--sumimas-color-azul-oscuro)", // Usando tu azul oscuro
        borderRadius: "var(--sumimas-radio-lg)", // Radio grande para efecto redondeado/pill
        boxShadow: "var(--sumimas-sombra-sm)",
        padding: "0.45rem 0.8rem",
      }}
    >
      {/* Icono de lupa */}
      <SearchIcon
        sx={{
          color: "var(--sumimas-texto-secundario)",
          fontSize: { xs: 18, sm: 20, md: 22 },
          pointerEvents: "none",
        }}
      />

      {/* Input de búsqueda */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Buscar producto"
        className="
          w-full
          bg-transparent
          outline-none
          focus:outline-none
          [-webkit-tap-highlight-color:transparent]
          text-sm-sumimas
          texto-primario-sumimas
        "
        style={{
          fontFamily: "var(--sumimas-fuente-base)",
          caretColor: "var(--sumimas-color-azul-oscuro)",
        }}
      />

      {/* Estilo dinámico para el focus-within (anillo de enfoque) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .search-focus-effect:focus-within {
          box-shadow: 0 0 0 2px rgba(20, 44, 76, 0.2);
        }
      `}} />
    </div>
  );
}