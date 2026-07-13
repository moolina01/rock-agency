"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Servicios", href: "#servicios" },
  { label: "Fium", href: "#fium" },
  { label: "Planes", href: "#planes" },
  { label: "Proyectos", href: "/projects" },
  { label: "FAQ", href: "/faq" },
];

const sectionIds = navItems
  .filter((item) => item.href.startsWith("#"))
  .map((item) => item.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Achica el header al bajar, vuelve a su tamaño normal al subir
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: resalta el link de la sección que está pasando por el centro del viewport
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const closest = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveHash(`#${closest.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  function handleNavClick(e: React.MouseEvent, href: string) {
    if (!href.startsWith("#")) {
      setOpen(false);
      return;
    }

    e.preventDefault();
    setOpen(false);

    // Si no estamos en home, navegar a home con el anchor
    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }

    // En home, hacer smooth scroll
    const el = document.getElementById(href.replace("#", ""));
    if (!el) return;

    const navOffset = 88;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  function isItemActive(item: NavItem) {
    if (item.href.startsWith("/")) return pathname === item.href;
    return pathname === "/" && activeHash === item.href;
  }

  function getLinkClass(active: boolean, mobile = false) {
    if (mobile) {
      return active
        ? "rounded-lg px-3 py-2 text-sm font-semibold text-indigo bg-indigo-tint"
        : "rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-paper-2";
    }

    return active
      ? "relative text-sm font-semibold text-indigo transition-colors duration-300"
      : "group relative text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-ink";
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/85 backdrop-blur-md">
      <div
        className={`relative mx-auto flex max-w-[1220px] items-center justify-between px-6 transition-[height] duration-300 ease-out sm:px-10 ${
          scrolled ? "h-[58px]" : "h-[78px]"
        }`}
      >
        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="inline-flex items-center justify-center rounded-lg border border-line bg-paper-2 px-3 py-2 text-sm text-ink lg:hidden"
        >
          ☰
        </button>

        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2.75 font-heading text-[17px] font-extrabold transition-transform duration-300 ease-out max-lg:absolute max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 ${
            scrolled ? "scale-90" : "scale-100"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Rock Agency"
            width={30}
            height={30}
            className="h-[30px] w-[30px] flex-shrink-0 rounded-lg"
          />
          ROCK AGENCY
        </Link>

        {/* Links (desktop) */}
        <nav className="hidden items-center gap-8.5 lg:flex">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={getLinkClass(active)}
              >
                <motion.span
                  className="inline-block"
                  animate={{ scale: active ? 1.08 : 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  {item.label}
                </motion.span>
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-1 h-[1.5px] rounded-full bg-indigo"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : (
                  <span className="absolute inset-x-0 -bottom-1 h-[1.5px] w-0 bg-indigo transition-all duration-200 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden lg:inline-flex" />

          <Link
            href="/contact"
            className="hidden rounded-full bg-ink px-5.5 py-2.75 text-sm font-semibold text-paper transition hover:-translate-y-0.5 lg:inline-flex"
          >
            Hablemos →
          </Link>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden">
          <div className="mx-auto max-w-[1220px] px-6 pb-4 sm:px-10">
            <div className="rounded-xl border border-line bg-paper-2 p-3">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={getLinkClass(isItemActive(item), true)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-2 flex items-center gap-2.5">
                  <Link
                    href="/contact"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper"
                  >
                    Hablemos →
                  </Link>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
