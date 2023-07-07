"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@/components/icons";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <label
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        background: "var(--foreground)",
        color: "var(--background)",
        borderRadius: 999,
        padding: 4,
      }}
    >
      <Moon />
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={({ target: { checked } }) => {
          setTheme(checked ? "light" : "dark");
        }}
        style={{
          visibility: "hidden",
          width: 0,
          height: 0,
        }}
      />
      <Sun />
      <div
        style={{
          position: "absolute",
          width: 16,
          height: 16,
          top: 4,
          background: "var(--background)",
          borderRadius: 999,
          left: theme === "dark" ? 4 : "calc(100% - 20px)",
          transition: "left 0.1s",
        }}
      />
    </label>
  ) : null;
}
