import Link from "next/link";
import { Instagram, Dribbble, Twitter, Youtube, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#402178] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* 1) Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded bg-white/10 text-xs font-bold">
                Ra
              </span>
              <span className="text-lg font-extrabold tracking-wide">ROCK AGENCY</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Agencia especializada en Shopify. Construimos tiendas que venden.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="#" label="Instagram"><Instagram size={15} /></SocialIcon>
              <SocialIcon href="#" label="Dribbble"><Dribbble size={15} /></SocialIcon>
              <SocialIcon href="#" label="Twitter"><Twitter size={15} /></SocialIcon>
              <SocialIcon href="#" label="YouTube"><Youtube size={15} /></SocialIcon>
            </div>
          </div>

          {/* 2) Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">Menú</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li><Link className="hover:text-white transition" href="#servicios">Servicios</Link></li>
                <li><Link className="hover:text-white transition" href="/projects">Proyectos</Link></li>
                <li><Link className="hover:text-white transition" href="#nosotros">Nosotros</Link></li>
                <li><Link className="hover:text-white transition" href="/faq">FAQ</Link></li>
                <li><Link className="hover:text-white transition" href="#shopify-plus">Shopify Plus</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">Contacto</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li><Link className="hover:text-white transition" href="/contact">Hablemos</Link></li>
                <li><Link className="hover:text-white transition" href="/contact">Agenda una llamada</Link></li>
                <li><Link className="hover:text-white transition" href="#terminos">Términos y condiciones</Link></li>
              </ul>
            </div>
          </div>

          {/* 3) Oficinas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">Nuestras Sedes</h4>
            <ul className="mt-4 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white/50" />
                <div className="text-sm text-white/80">
                  <p className="font-semibold text-white">Sede Chile</p>
                  <p>Av. Apoquindo 5950</p>
                  <p>Las Condes, Santiago</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white/50" />
                <div className="text-sm text-white/80">
                  <p className="font-semibold text-white">Sede Argentina</p>
                  <p>El Salvador 5707</p>
                  <p>Palermo, Buenos Aires</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2026 Rock Agency. Todos los derechos reservados.</p>
          <p>Shopify Partners · Chile & Argentina</p>
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
      className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/70 hover:border-white hover:text-white transition"
    >
      {children}
    </a>
  );
}
