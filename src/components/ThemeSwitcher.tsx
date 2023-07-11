"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import useFocus from "@/hooks/useFocus";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const [focus, { onFocus, onBlur }] = useFocus();

  return (
    <label
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        background: mounted
          ? theme === "dark"
            ? "var(--gold-300)"
            : "var(--purple-200)"
          : "transparent",
        color: "var(--black)",
        borderRadius: 999,
        padding: 4,
        boxShadow: focus
          ? "0 0 0 2px var(--bg),0 0 0 4px var(--blue-500)"
          : undefined,
      }}
    >
      <MoonIcon />
      <input
        type="checkbox"
        checked={mounted && theme === "light"}
        onChange={({ target: { checked } }) => {
          setTheme(checked ? "light" : "dark");
        }}
        style={{ width: 0, height: 0 }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <SunIcon />
      <div
        style={{
          position: "absolute",
          width: 16,
          height: 16,
          top: 4,
          background: "var(--black)",
          borderRadius: 999,
          left: mounted
            ? theme === "dark"
              ? 4
              : "calc(100% - 20px)"
            : "calc(50% - 8px)",
          transition: "left 0.1s",
        }}
      />
    </label>
  );
}
