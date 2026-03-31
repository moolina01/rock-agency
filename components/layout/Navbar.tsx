"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
type NavItem = {
  label: string;
  href: string;
  variant?: "highlight";
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "/projects" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "/faq" },
  { label: "Shopify Plus", href: "#shopify-plus", variant: "highlight" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  function getLinkClass(item: NavItem, mobile = false) {
    if (item.variant === "highlight") {
      return mobile
        ? "rounded-lg px-3 py-2 text-sm font-semibold text-emerald-600 hover:bg-zinc-50"
        : "text-sm font-semibold text-emerald-600 hover:text-emerald-700";
    }

    const isActive =
      item.href.startsWith("/") && pathname === item.href;

    if (mobile) {
      return isActive
        ? "rounded-lg px-3 py-2 text-sm font-semibold text-[#402178] bg-violet-50"
        : "rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50";
    }

    return isActive
      ? "relative text-sm font-semibold text-[#402178] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[#402178]"
      : "text-sm text-zinc-600 hover:text-zinc-900";
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="Rock Agency"
    width={28}
    height={28}
    className="rounded"
  />
  <span className="text-sm font-extrabold tracking-wide text-zinc-900">
    ROCK AGENCY
  </span>
</Link>

        {/* Links (desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={getLinkClass(item)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#402178] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-800 md:inline-flex"
          >
            ¡Contáctanos!
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800 shadow-sm hover:bg-zinc-50 md:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-6 pb-4">
            <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={getLinkClass(item, true)}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[#402178] px-4 py-2 text-sm font-semibold text-white hover:bg-violet-800"
                >
                  ¡Contáctanos!
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
