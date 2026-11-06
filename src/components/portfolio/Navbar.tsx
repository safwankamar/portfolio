import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: "var(--paper)",
        borderBottom: `1px solid ${isScrolled ? "var(--rule)" : "transparent"}`,
      }}
    >
      <nav className="mx-auto flex max-w-[76rem] items-baseline justify-between gap-6 px-6 py-5 sm:px-10">
        <a href="#top" className="whitespace-nowrap text-[0.9rem] tracking-tight sm:text-[0.95rem]" style={{ fontWeight: 600 }}>
          Safwan Onakkal
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
        <ul className="flex items-baseline gap-4 sm:gap-7">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[0.8rem] transition-colors sm:text-[0.9rem]"
                style={{ color: "var(--ink-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
