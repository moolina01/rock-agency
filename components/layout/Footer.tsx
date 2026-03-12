import Link from "next/link";
import { Instagram, Dribbble, Twitter, Youtube, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#402178] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
        {/* 1) Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded bg-white/10 text-xs font-bold">
              Ra
            </span>
            <span className="text-lg font-extrabold tracking-wide">
              ROCK AGENCY
            </span>
          </div>

          <div className="mt-6 space-y-1 text-sm text-white/80">
            <p>Copyright © 2026 RockAgency</p>
            <p>Todos los derechos reservados.</p>
          </div>

          {/* Social icons */}
          <div className="mt-6 flex items-center gap-3">
            <SocialIcon href="#" label="Instagram">
              <Instagram size={16} />
            </SocialIcon>
            <SocialIcon href="#" label="Dribbble">
              <Dribbble size={16} />
            </SocialIcon>
            <SocialIcon href="#" label="Twitter">
              <Twitter size={16} />
            </SocialIcon>
            <SocialIcon href="#" label="YouTube">
              <Youtube size={16} />
            </SocialIcon>
          </div>
        </div>

        {/* 2) Navegación */}
        <div>
          <h4 className="text-sm font-semibold">Navegación</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><Link className="hover:text-white" href="#servicios">Servicios</Link></li>
            <li><Link className="hover:text-white" href="/projects">Proyectos</Link></li>
            <li><Link className="hover:text-white" href="#nosotros">Nosotros</Link></li>
            <li><Link className="hover:text-white" href="/faq">FAQ</Link></li>
            <li><Link className="hover:text-white" href="#shopify-plus">Shopify Plus</Link></li>
          </ul>
        </div>

        {/* 3) Contáctanos */}
        <div>
          <h4 className="text-sm font-semibold">Contáctanos</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><Link className="hover:text-white" href="/contact">¡Hablemos!</Link></li>
            <li><Link className="hover:text-white" href="/contact">Agenda tu llamada</Link></li>
            <li>
              <a className="hover:text-white" href="mailto:correo@gmail.com">
                correo@gmail.com
              </a>
            </li>
            <li><Link className="hover:text-white" href="#terminos">Términos y condiciones</Link></li>
          </ul>
        </div>

        {/* 4) Newsletter */}
        <div>
          <h4 className="text-sm font-semibold">Mantente al día</h4>

          <div className="mt-5">
            <div className="relative w-full max-w-[260px]">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full rounded-lg bg-white/10 px-4 py-2 pr-10 text-sm text-white placeholder:text-white/60 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/25"
              />
              <button
                type="button"
                aria-label="Enviar"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/90 hover:text-white"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-white hover:border-white hover:text-white transition"
    >
      {children}
    </a>
  );
}
