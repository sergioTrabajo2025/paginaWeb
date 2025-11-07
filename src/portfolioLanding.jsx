import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

/**
 * Portafolio del equipo — estructura base moderna
 * 1) Encabezado (logo + información general + CTA)
 * 2) Barra de navegación secundaria (links)
 * 3) Carrusel de imágenes (hardware + software)
 * - 100% responsive y con animaciones suaves
 */

const TEAM = {
  name: "RailTech Dev Team",
  tagline: "Sistemas de monitoreo ferroviario, hardware embebido y software en tiempo real",
  logo: "/favicon.ico", // Cambiá por tu logo en /public
  cta: {
    primary: { label: "Ver Proyectos", href: "#proyectos" },
    secondary: { label: "Contacto", href: "#contacto" },
  },
  socials: [
    { label: "GitHub", href: "https://github.com/tu-org", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/tu-equipo", icon: Linkedin },
    { label: "Email", href: "mailto:hola@tuequipo.dev", icon: Mail },
  ],
};

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const CAROUSEL_ITEMS = [
  {
    id: "plaquetas-1",
    title: "Plaquetas de barrera: diseño PCB",
    caption: "Vista 3D + ruteo de pistas para SIM800L y sensórica",
    src: "/gallery/plaquetas_1.jpg",
  },
  {
    id: "plaquetas-2",
    title: "Prototipo con SIM800L",
    caption: "Montaje y pruebas iniciales de campo",
    src: "/gallery/plaquetas_2.jpg",
  },
  {
    id: "smb-dashboard",
    title: "SMB — Dashboard monitoreo",
    caption: "Métricas en tiempo real y exportes automáticos a Sheets",
    src: "/gallery/smb_dashboard.jpg",
  },
  {
    id: "tmp-docker",
    title: "TMP — Consolas dockerizadas",
    caption: "Backends parametrizados por línea con arranque escalonado",
    src: "/gallery/tmp_docker.jpg",
  },
];

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
      <Decor />
      <Header />
      <SubNav />
      <main id="galeria" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionTitle
          title="Galería destacada"
          subtitle="Imágenes del proceso completo: desde las plaquetas hasta el software en producción"
        />
        <Carousel items={CAROUSEL_ITEMS} />
      </main>
      <Footer />
    </div>
  );
}

function Decor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/30 to-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-purple-500/20 blur-3xl" />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header id="inicio" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={TEAM.logo}
            alt={`${TEAM.name} logo`}
            className="h-10 w-10 rounded-xl ring-1 ring-white/10 object-contain bg-white/5"
          />
          <span className="font-semibold tracking-tight text-neutral-50">{TEAM.name}</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mx-4 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4"
          >
            <div className="grid gap-2 text-sm text-neutral-200">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">{TEAM.tagline}</h1>
            <p className="mt-4 text-neutral-300 max-w-2xl">
              Integración de hardware (plaquetas con SIM800L y sensórica), backends dockerizados por línea y dashboards en tiempo real.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={TEAM.cta.primary.href} className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-neutral-200">
                {TEAM.cta.primary.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={TEAM.cta.secondary.href} className="inline-flex items-center gap-2 rounded-xl bg-white/10 ring-1 ring-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/15">
                {TEAM.cta.secondary.label}
              </a>
              <div className="ml-2 flex items-center gap-2">
                {TEAM.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur">
              <img src="/gallery/hero_mock.jpg" alt="Mockup del sistema" className="aspect-video w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

function SubNav() {
  return (
    <div className="sticky top-0 z-30 w-full backdrop-blur bg-neutral-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 py-3 overflow-x-auto">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="whitespace-nowrap rounded-full bg-white/5 px-4 py-1.5 text-sm text-neutral-200 hover:bg-white/10">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-neutral-300 max-w-3xl">{subtitle}</p>}
    </div>
  );
}

function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const go = (dir) => setIndex((i) => (i + dir + total) % total);
  const goTo = (i) => setIndex(((i % total) + total) % total);

  return (
    <div className="group relative rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur overflow-hidden">
      <div className="relative aspect-[16/9] w-full">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={items[index].id}
            src={items[index].src}
            alt={items[index].title}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0.2, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/70 to-transparent p-4 flex justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-medium text-white">{items[index].title}</h3>
            <p className="text-xs sm:text-sm text-neutral-300">{items[index].caption}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => go(-1)} className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 hover:bg-white/15">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => go(1)} className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 hover:bg-white/15">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 overflow-x-auto bg-neutral-950/60">
        {items.map((it, i) => (
          <button
            key={it.id}
            onClick={() => goTo(i)}
            className={`relative shrink-0 rounded-xl ring-1 ring-white/10 overflow-hidden hover:ring-white/30 transition ${i === index ? "outline outline-2 outline-white/60" : ""}`}
          >
            <img src={it.src} alt={it.title} className="h-16 w-24 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {TEAM.name}. Hecho con ♥ y tecnologías abiertas.</p>
        <div className="flex items-center gap-3">
          {TEAM.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neutral-200">
              <s.icon className="h-4 w-4" /> {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
