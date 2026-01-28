"use client"

import Link from "next/link"
import { useState } from "react"


export default function  Navbar(){
const navItems=[
    {label:"Home",href:"#home"},
    {label:"servicios",href:"#servicios"},
    {label:"projectos",href:"#projectos"},
    {label:"projectos",href:"#projectos "},
    { label: "FAQ", href: "#faq" },
    { label: "Shopify Plus", href: "#shopify-plus", variant: "highlight" as const },
]
 const [open,setOpen]=useState(false)
        return (
            <header className="w-full bg-white">

              <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="#home" className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded bg-violet-700 text-xs font-bold text-white">
                    Ra
                  </span>
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
                      className={
                        item.variant === "highlight"
                          ? "text-sm font-medium text-emerald-600 hover:text-emerald-700"
                          : "text-sm text-zinc-600 hover:text-zinc-900"
                      }
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
        
                {/* Right actions */}
                <div className="flex items-center gap-3">
                  {/* CTA button */}
                  <Link
                    href="#contacto"
                    className="hidden rounded-full bg-violet-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-800 md:inline-flex"
                  >
                    ¡Contáctanos!
                  </Link>
        
                  {/* Mobile menu button */}
                  <button
                    className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800 shadow-sm hover:bg-zinc-50 md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Abrir menú"
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
                            onClick={() => setOpen(false)}
                            className={
                              item.variant === "highlight"
                                ? "rounded-lg px-3 py-2 text-sm font-medium text-emerald-600 hover:bg-zinc-50"
                                : "rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
                            }
                          >
                            {item.label}
                          </Link>
                        ))}
        
                        <Link
                          href="#contacto"
                          onClick={() => setOpen(false)}
                          className="mt-2 inline-flex items-center justify-center rounded-full bg-violet-700 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-800"
                        >
                          ¡Contáctanos!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </header>
    )
}

    

