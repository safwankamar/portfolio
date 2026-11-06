import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const PAPER = { dark: "#121518", light: "#edeff0" };

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", resolvedTheme === "light" ? PAPER.light : PAPER.dark);
  }, [mounted, resolvedTheme]);

  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Dark" : "Light"}
    >
      {mounted && isLight ? <Moon size={16} strokeWidth={1.75} /> : <Sun size={16} strokeWidth={1.75} />}
    </button>
  );
};

export default ThemeToggle;
