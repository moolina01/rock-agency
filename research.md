# Research: Página de Proyectos — Rock Agency

## Objetivo
Crear una página `/projects` que muestre el portafolio de tiendas Shopify construidas por Rock Agency. Cada proyecto debe tener un enlace para que el visitante pueda verlo en vivo. El objetivo es generar confianza y demostrar capacidad antes de que un prospecto contacte.

---

## Secciones y Copy

### 1. Header de página
- **Pill badge:** "Nuestro trabajo"
- **Título:** "Proyectos que generan resultados"
- **Subtítulo:** "Cada tienda que construimos está diseñada para convertir visitantes en clientes."

### 2. Filtros por categoría (opcional, fase 2)
Tabs o pills que filtren los proyectos por tipo. Para la primera versión se puede omitir y mostrar todos sin filtro.

### 3. Grid de tarjetas de proyectos
Layout: **3 columnas en desktop, 2 en tablet, 1 en móvil**.

Cada tarjeta (`ProjectCard`) contiene:

| Elemento | Descripción |
|---|---|
| Imagen de preview | Screenshot o mockup de la tienda (proporción 16:9 o 4:3) |
| Nombre del proyecto | Nombre de la tienda / marca |
| Categoría / etiqueta | Ej: "Moda", "Electrónica", "Shopify Plus", "Migración" |
| Descripción corta | 1–2 líneas describiendo el trabajo realizado |
| Botón "Ver tienda →" | Link externo (`target="_blank"`) a la tienda en vivo |

Comportamiento de la tarjeta:
- Hover: leve elevación (`-translate-y-1`) + sombra más fuerte
- La imagen hace zoom sutil en hover (`scale-105`) con `overflow-hidden`
- El botón "Ver tienda" abre el link en nueva pestaña con `rel="noopener noreferrer"`

### 4. CTA al final
Sección de cierre que invita a contactar:
- **Texto:** "¿Listo para ser el próximo proyecto?"
- **Subtexto:** "Cuéntanos tu idea y construimos juntos tu tienda."
- **Botón:** "Comienza ahora →" → `/contact`

---

## Datos de proyectos (estructura)

Los proyectos se definen como un array de objetos en el mismo componente (sin base de datos por ahora):

```ts
type Project = {
  name: string;          // "Tienda Example"
  category: string;      // "Moda & Lifestyle"
  description: string;   // "Diseño y desarrollo completo desde cero en Shopify."
  image: string;         // "/projects/example.png"
  url: string;           // "https://example.myshopify.com"
}
```

Las imágenes se colocan en `public/projects/`.

### Proyectos placeholder (hasta tener los reales)
Si aún no hay proyectos reales, se pueden usar 6 tarjetas con datos de ejemplo y una imagen de placeholder gris con el logo de Shopify centrado. Se pueden reemplazar fácilmente editando el array.

---

## Diseño — Alineación con Design System

| Token | Valor |
|---|---|
| Fondo página | `#f6f7fb` |
| Tarjeta | `bg-white border border-zinc-200 rounded-3xl shadow-sm` |
| Color primario | `#402178` |
| Animaciones | Framer Motion, `whileInView`, misma curva `[0.22, 1, 0.36, 1]` |
| Stagger | `staggerChildren: 0.1` igual que en Features |
| Etiqueta de categoría | Pill pequeño: `bg-violet-50 text-[#402178] text-xs font-semibold rounded-full px-3 py-1` |
| Botón "Ver tienda" | Outline: `border border-zinc-200 rounded-full text-sm font-semibold hover:border-[#402178] hover:text-[#402178]` |

---

## Arquitectura técnica

### Archivos a crear
```
app/
└── projects/
    └── page.tsx               # Página /projects

components/projects/
├── ProjectCard.tsx            # Tarjeta individual de proyecto
└── ProjectsGrid.tsx           # Grid con animaciones ("use client")
```

### Archivos a modificar
| Archivo | Cambio |
|---|---|
| `components/layout/Navbar.tsx` | Ítem "Proyectos" (`href: "#projectos"`) → `href: "/projects"` |
| `components/layout/Footer.tsx` | Link "Proyectos" → `/projects` |

> Nota: el ítem ya existe en `navItems` con `href: "#projectos"` (typo incluido). Al cambiarlo a `/projects` se corrige también el typo.

### Navegación
- El ítem "Proyectos" del Navbar ya tiene `href: "#projectos"`. Se cambia a `href: "/projects"` — como es una ruta `/`, `handleNavClick` en Navbar ya lo maneja correctamente sin smooth scroll.

---

## Estado de implementación
- [ ] Crear `components/projects/ProjectCard.tsx`
- [ ] Crear `components/projects/ProjectsGrid.tsx`
- [ ] Crear `app/projects/page.tsx`
- [ ] Añadir imágenes de proyectos en `public/projects/`
- [ ] Actualizar Navbar ítem "Proyectos" → `/projects`
- [ ] Actualizar Footer link "Proyectos" → `/projects`

---

# Research: Página de Contacto — Rock Agency

## Objetivo
Crear una página `/contact` con un formulario moderno donde prospectos puedan contactar a Rock Agency para crear su tienda Shopify. Al enviar el formulario, llega un correo a `mhuryy22@gmail.com`.

---

## Secciones y Copy

### 1. Hero / Encabezado de página
Texto breve y directo que refuerza la propuesta de valor antes de pedir datos.

- **Título:** "Hablemos de tu tienda Shopify"
- **Subtítulo:** "Cuéntanos tu proyecto y te respondemos en menos de 24 horas."
- **Pill badge:** "Sin compromiso · Respuesta garantizada"

### 2. Formulario principal
Campos necesarios para calificar el lead y tener contexto suficiente para responder bien:

| Campo | Tipo | Placeholder / Label | Obligatorio |
|---|---|---|---|
| Nombre | text | "Tu nombre" | Sí |
| Correo electrónico | email | "tu@correo.com" | Sí |
| WhatsApp / Teléfono | tel | "+52 55 0000 0000" | No |
| Nombre de tu negocio | text | "¿Cómo se llama tu marca?" | No |
| ¿En qué te podemos ayudar? | select | Opciones: Tienda nueva desde cero / Rediseño de tienda existente / Migración a Shopify / Shopify Plus / Optimización y CRO / Otro | Sí |
| Cuéntanos más | textarea | "Descríbenos tu proyecto, presupuesto aproximado, plazos..." | No |

**Botón CTA:** "Enviar mensaje →"

**Mensaje de confirmación (post-envío):**
"¡Gracias! Recibimos tu mensaje. Te contactaremos en menos de 24 horas."

### 3. Bloque de confianza / Trust signals (junto al formulario o debajo)
Pequeños bullets que reducen fricción antes de enviar:

- "Respondemos en menos de 24 horas"
- "Más de [X] tiendas lanzadas"
- "Shopify Partners certificados"
- "Sin contratos largos — arrancamos cuando quieras"

### 4. Info de contacto directo (sidebar o sección inferior)
Para quienes prefieren no usar el formulario:

- **Email:** mhuryy22@gmail.com
- **WhatsApp:** (enlace wa.me/...)
- **Redes:** Instagram, LinkedIn

---

## Diseño — Alineación con Design System existente

| Token | Valor |
|---|---|
| Color primario | `#402178` |
| Fondo página | `#f6f7fb` |
| Fondo sección | `white` con border `zinc-200` |
| Font | Poppins (heredado del root layout) |
| Animaciones | Framer Motion, mismas curvas (`[0.22, 1, 0.36, 1]`) |
| Inputs | `rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-violet-300` |
| Botón primario | `rounded-full bg-[#402178] px-7 py-3 text-sm font-semibold text-white hover:bg-violet-800` |

Layout: **dos columnas en desktop** — formulario a la izquierda (col ancha), trust signals + info de contacto a la derecha.

---

## Arquitectura técnica

### Archivos a crear
```
app/
└── contact/
    └── page.tsx          # Página /contact (Server Component wrapper)

components/contact/
└── ContactForm.tsx       # Formulario ("use client" — maneja estado + fetch)

app/api/
└── contact/
    └── route.ts          # API Route POST que envía el email
```

### Archivos a modificar
| Archivo | Cambio |
|---|---|
| `components/layout/Navbar.tsx` | Botón "¡Contáctanos!" → `href="/contact"` (Link de Next.js, sin smooth scroll) |
| `components/landing/Hero.tsx` | Botón "Comienza ahora" → `href="/contact"` |
| `components/layout/Footer.tsx` | Links `#contacto` → `/contact` |

### Flujo de envío de email

1. `ContactForm.tsx` hace `POST /api/contact` con los datos del formulario (JSON).
2. `app/api/contact/route.ts` recibe el body, valida campos obligatorios y envía el email usando **Nodemailer** con SMTP (o **Resend** como alternativa más simple).
3. La API devuelve `{ ok: true }` o un error con status 400/500.
4. El formulario muestra mensaje de éxito o error al usuario.

### Servicio de email recomendado: Resend
- Paquete: `resend` (npm)
- Requiere una API key en variable de entorno: `RESEND_API_KEY`
- Alternativa: Nodemailer con Gmail SMTP (requiere `GMAIL_USER` + `GMAIL_APP_PASSWORD`)

### Variables de entorno necesarias (`.env.local`)
```
# Opción A — Resend
RESEND_API_KEY=re_...

# Opción B — Gmail SMTP
GMAIL_USER=mhuryy22@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

---

## Navegación — Cambios en botones

| Botón | Ubicación actual | Cambio |
|---|---|---|
| "Comienza ahora" | `Hero.tsx` | `href="#contacto"` → `href="/contact"` |
| "¡Contáctanos!" | `Navbar.tsx` (desktop + mobile) | `href="#contacto"` → `href="/contact"` |
| "¡Hablemos!" y "Agenda tu llamada" | `Footer.tsx` | `href="#contacto"` → `href="/contact"` |

Los botones de Navbar deben usar `<Link href="/contact">` de Next.js en lugar de `<a>` con smooth scroll, ya que navegan a otra página.

---

## Validaciones del formulario (client-side)
- Nombre: requerido, mínimo 2 caracteres
- Email: requerido, formato válido
- Servicio: requerido (select)
- Mostrar errores inline debajo de cada campo
- Deshabilitar botón mientras se envía (estado `loading`)

---

## Estado de implementación
- [x] Instalar dependencia de email (Resend)
- [x] Crear `app/api/contact/route.ts`
- [x] Crear `components/contact/ContactForm.tsx`
- [x] Crear `app/contact/page.tsx`
- [x] Actualizar botones en Navbar, Hero y Footer → `/contact`
- [x] Configurar variables de entorno
- [ ] Prueba end-to-end del formulario

---

## Navegación — Logo y botón "Home" en Navbar

### Problema actual
El logo (`<Link href="">`) y el ítem "Home" del navbar pasan por `handleScroll`, que intenta hacer `document.getElementById(id)` con smooth scroll. Esto funciona en la home page, pero **falla silenciosamente desde `/contact`** porque no existe ningún elemento con ese id en esa página.

### Comportamiento esperado
| Elemento | Desde home (`/`) | Desde contact (`/contact`) |
|---|---|---|
| Logo "Ra / ROCK AGENCY" | Scroll al tope de la página | Navegar a `/` |
| Ítem "Home" del navbar | Scroll al tope de la página | Navegar a `/` |
| Ítems de anchors (`#servicios`, `#nosotros`, etc.) | Smooth scroll a la sección | Navegar a `/#servicios` (o ignorar) |

### Solución a implementar en `Navbar.tsx`
Distinguir en `handleScroll` si el `href` empieza con `/` (ruta de página) o con `#` (anchor de la misma página):

```
function handleNavClick(e, href) {
  if (href.startsWith("/")) {
    // Es una ruta — dejar que Next.js <Link> maneje la navegación normalmente
    // NO llamar preventDefault, solo cerrar el menú móvil
    setOpen(false);
    return;
  }
  // Es un anchor — hacer smooth scroll
  e.preventDefault();
  setOpen(false);
  const el = document.getElementById(href.replace("#", ""));
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 88, behavior: "smooth" });
}
```

### Cambios específicos en el archivo
| Elemento | Cambio |
|---|---|
| Logo | `<Link href="/">` — quitar `onClick` con `handleScroll`, usar solo `<Link>` de Next.js |
| Ítem "Home" (`navItems[0]`) | `href: "/"` ya está correcto; cambiar `<a>` por `<Link>` para ese ítem, o actualizar `handleScroll` para no interceptar rutas `/` |
| Ítems de anchor (`#servicios`, etc.) | Mantener comportamiento actual de smooth scroll |
| Menú móvil | Misma lógica aplicada a los `<a>` del dropdown |
