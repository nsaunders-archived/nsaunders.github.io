"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@/components/icons";
import useFocus from "@/hooks/useFocus";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const [focus, { onFocus, onBlur }] = useFocus();

  return mounted ? (
    <label
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        background: theme === "dark" ? "var(--gold-300)" : "var(--purple-200)",
        color: "var(--black)",
        borderRadius: 999,
        padding: 4,
        boxShadow: focus
          ? "0 0 0 2px var(--background),0 0 0 4px var(--blue-500)"
          : undefined,
      }}
    >
      <Moon />
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={({ target: { checked } }) => {
          setTheme(checked ? "light" : "dark");
        }}
        style={{ width: 0, height: 0 }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Sun />
      <div
        style={{
          position: "absolute",
          width: 16,
          height: 16,
          top: 4,
          background: "var(--black)",
          borderRadius: 999,
          left: theme === "dark" ? 4 : "calc(100% - 20px)",
          transition: "left 0.1s",
        }}
      />
    </label>
  ) : null;
}
