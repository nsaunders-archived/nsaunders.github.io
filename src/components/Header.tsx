import { Montserrat } from "next/font/google";
import ThemeSwitcher from "./ThemeSwitcher";
import NavLinks from "./NavLinks";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        boxSizing: "border-box",
      }}
    >
      <h1
        className={montserrat.className}
        style={{
          textTransform: "uppercase",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            display: "inline-block",
            maxWidth: "calc(999px * var(--mobile))",
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          NS
        </span>
        <span
          style={{
            display: "inline-block",
            maxWidth: "calc(999px * var(--desktop))",
            overflow: "hidden",
          }}
        >
          Nick Saunders
        </span>
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <NavLinks />
        <div
          style={{
            backgroundColor: "var(--gray-500)",
            width: 1,
            height: 32,
          }}
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
