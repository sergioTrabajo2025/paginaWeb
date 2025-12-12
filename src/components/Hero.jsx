import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

const HERO_SECTIONS = [
  {
    id: "SMB",
    title: "Sistema SMB",
    description:
      "Plataforma de monitoreo y control para lineas ferroviarias, con modulos independientes y visualizacion web en tiempo real.",
    gradient: "from-indigo-500/10 via-cyan-500/10 to-fuchsia-500/10",
    blobs: [
      "absolute -top-32 -left-20 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl",
      "absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl",
    ],
    image: "/gallery/hero_mock.jpg",
    actions: [
      { label: "Linea LGR", href: "https://smb-lgr-sgs.netlify.app", icon: ExternalLink, variant: "solid", title: "Abrir en Mozilla Firefox" },
      { label: "Linea LS", disabled: true, icon: Lock, variant: "ghost", title: "Proximamente" },
      { label: "LSM", disabled: true, icon: Lock, variant: "ghost", title: "Proximamente" },
      { label: "LM", disabled: true, icon: Lock, variant: "ghost", title: "Proximamente" },
      { label: "Linea LBS", href: "https://smb-lbs-sgs.netlify.app", icon: ExternalLink, variant: "outline", title: "Abrir en Mozilla Firefox" },
    ],
    helper: {
      label: "Instructivo para la visualizacion de los links en Google Chrome",
      href: "/instructivo.html",
    },
  },
  {
    id: "TMP",
    title: "Sistema TMP",
    description:
      "Plataforma integral con tablero web en tiempo real, seguimiento de tareas, alertas y herramientas para optimizar la operacion y el mantenimiento de equipos e infraestructura.",
    gradient: "from-sky-500/15 via-blue-600/15 to-cyan-400/20",
    blobs: [
      "absolute -top-32 -left-14 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl",
      "absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl",
    ],
    image: "/gallery/tmp interfaz.jpg",
    actions: [
      { label: "Visualizacion", href: "https://prueba-tmp.netlify.app/", icon: ExternalLink, variant: "solid", title: "Abrir en navegador" },
    ],
    helper: {
      label: "Instructivo para la visualizacion de los links en Google Chrome",
      href: "/instructivo.html",
    },
  },
];

function ActionButton({ action }) {
  const { label, href, disabled, icon: Icon, variant = "solid", title } = action;
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition";
  const variants = {
    solid: "bg-white text-black hover:bg-neutral-200",
    outline: "border border-white/40 text-white hover:bg-white hover:text-black",
    ghost: "border border-white/10 text-white/50 cursor-not-allowed",
  };
  const className = `${baseClass} ${variants[variant] ?? variants.solid}`;

  if (disabled) {
    return (
      <button type="button" disabled title={title} className={className}>
        {label}
        {Icon && <Icon className="w-4 h-4" />}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      title={title}
      className={className}
    >
      {label}
      {Icon && <Icon className="w-4 h-4" />}
    </a>
  );
}

function HeroSection({ section }) {
  return (
    <section id={section.id} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left scroll-mt-16">
      <div className={`relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-gradient-to-br ${section.gradient} p-6 sm:p-10`}>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {section.blobs.map((c, i) => (
            <div key={i} className={c} />
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {section.title}
            </h1>

            <p className="mt-4 text-neutral-300 text-lg max-w-xl mx-auto lg:mx-0">
              {section.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              {section.actions.map((action, idx) => (
                <ActionButton key={`${section.id}-action-${idx}`} action={action} />
              ))}
            </div>

            {section.helper && (
              <p className="mt-3 text-xs text-neutral-400 max-w-xl mx-auto lg:mx-0">
                {section.helper.href ? (
                  <a
                    href={section.helper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-neutral-300 hover:text-white"
                    title={section.helper.title}
                  >
                    {section.helper.label}
                  </a>
                ) : (
                  <span className="text-neutral-500">{section.helper.label}</span>
                )}
              </p>
            )}
          </motion.div>

          {/* Imagen o mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aspect-video w-full rounded-3xl bg-gradient-to-br from-white/5 to-white/10 ring-1 ring-white/10 overflow-hidden">
              <img
                src={section.image}
                alt={`${section.title} mock`}
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Hero({ ids }) {
  const sections = Array.isArray(ids) && ids.length
    ? HERO_SECTIONS.filter((section) => ids.includes(section.id))
    : HERO_SECTIONS;

  if (!sections.length) return null;

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <HeroSection key={section.id} section={section} />
      ))}
    </div>
  );
}
