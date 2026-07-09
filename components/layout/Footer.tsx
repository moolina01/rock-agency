import Link from "next/link";
import Image from "next/image";
import { Instagram, Dribbble, Twitter, Youtube, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-[#B4B2BE]">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-8 border-b border-[#2A2933] pb-9.5 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* 1) Brand */}
          <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
            <div className="flex items-center gap-2.75 font-heading text-[17px] font-extrabold text-white">
              <Image
                src="/logo.png"
                alt="Rock Agency"
                width={30}
                height={30}
                className="h-[30px] w-[30px] flex-shrink-0 rounded-lg"
              />
              ROCK AGENCY
            </div>
            <p className="max-w-[260px] text-sm leading-relaxed">
              Ayudamos a supermercados y minimarkets chilenos a vender online
              con su propio canal: sin comisiones por pedido, con reparto en
              menos de 60 minutos vía Fium.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="#" label="Instagram"><Instagram size={15} /></SocialIcon>
              <SocialIcon href="#" label="Dribbble"><Dribbble size={15} /></SocialIcon>
              <SocialIcon href="#" label="Twitter"><Twitter size={15} /></SocialIcon>
              <SocialIcon href="#" label="YouTube"><Youtube size={15} /></SocialIcon>
            </div>
          </div>

          {/* 2) Menú */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.05em] text-white uppercase">Menú</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="hover:text-white transition" href="#diagnostico">Diagnóstico</Link></li>
              <li><Link className="hover:text-white transition" href="#servicios">Servicios</Link></li>
              <li><Link className="hover:text-white transition" href="#catalogo">Catálogo</Link></li>
              <li><Link className="hover:text-white transition" href="#fium">Fium</Link></li>
              <li><Link className="hover:text-white transition" href="#integraciones">Integraciones</Link></li>
              <li><Link className="hover:text-white transition" href="#planes">Planes</Link></li>
              <li><Link className="hover:text-white transition" href="/projects">Proyectos</Link></li>
              <li><Link className="hover:text-white transition" href="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* 3) Contacto */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.05em] text-white uppercase">Contacto</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="hover:text-white transition" href="/contact">Hablemos</Link></li>
              <li><Link className="hover:text-white transition" href="/contact">Agenda una llamada</Link></li>
              <li><Link className="hover:text-white transition" href="/legal/terms">Términos y condiciones</Link></li>
              <li><Link className="hover:text-white transition" href="/legal/privacy">Política de privacidad</Link></li>
            </ul>
          </div>

          {/* 4) Oficinas */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.05em] text-white uppercase">Nuestras Sedes</h4>
            <ul className="mt-4 space-y-4.5">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#75737F]" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Sede Chile</p>
                  <p>Av. Apoquindo 5950</p>
                  <p>Las Condes, Santiago</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#75737F]" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Sede Argentina</p>
                  <p>El Salvador 5707</p>
                  <p>Palermo, Buenos Aires</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2.5 text-[12.5px] text-[#75737F] sm:flex-row">
          <p>© 2026 Rock Agency. Todos los derechos reservados.</p>
          <p>Shopify Partners · Chile &amp; Argentina</p>
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
      className="grid h-8 w-8 place-items-center rounded-full border border-white/15 text-[#9C9AA6] transition hover:border-white hover:text-white"
    >
      {children}
    </a>
  );
}
