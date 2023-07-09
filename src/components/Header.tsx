"use client";

import { ifExhausted } from "@/utils/ifExhausted";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Anchor from "./Anchor";
import NavLinks from "./NavLinks";
import ThemeSwitcher from "./ThemeSwitcher";

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
          marginBlock: 0,
          marginInline: 0,
          whiteSpace: "nowrap",
        }}
      >
        <Anchor selected disabled={usePathname() === "/"}>
          {({
            onClick,
            onFocus,
            onBlur,
            onMouseEnter,
            onMouseLeave,
            style,
            tabIndex,
            ...restProps
          }) =>
            ifExhausted(
              restProps,
              <Link
                href="/"
                onClick={onClick}
                onFocus={onFocus}
                onBlur={onBlur}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ ...style, display: "inline-flex" }}
                tabIndex={tabIndex}
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
              </Link>
            )
          }
        </Anchor>
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
