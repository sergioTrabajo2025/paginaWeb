import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section id="SMB" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left scroll-mt-16">
      <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-fuchsia-500/10 p-6 sm:p-10">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-20 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Sistema SMB
          </h1>

          <p className="mt-4 text-neutral-300 text-lg max-w-xl mx-auto lg:mx-0">
            Plataforma de monitoreo y control para líneas ferroviarias, con módulos
            independientes y visualización web en tiempo real.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://smb-lgr-sgs.netlify.app"
              target="_blank"
              rel="noopener noreferrer" title="Abrir en Mozilla Firefox"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition"
            >
              Línea LGR
              <ExternalLink className="w-4 h-4" />
            </a>
            {/* Próximamente: botones desactivados */}
            <button
              type="button"
              disabled
              title="Próximamente"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 text-white/50 px-6 py-2.5 text-sm font-semibold cursor-not-allowed"
            >
              Línea LS
              <Lock className="w-4 h-4" />
            </button>
            <button
              type="button"
              disabled
              title="Próximamente"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 text-white/50 px-6 py-2.5 text-sm font-semibold cursor-not-allowed"
            >
              LSM
              <Lock className="w-4 h-4" />
            </button>
            <button
              type="button"
              disabled
              title="Próximamente"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 text-white/50 px-6 py-2.5 text-sm font-semibold cursor-not-allowed"
            >
              LM
              <Lock className="w-4 h-4" />
            </button>

            <a
              href="https://smb-lbs-sgs.netlify.app"
              target="_blank"
              rel="noopener noreferrer" title="Abrir en Mozilla Firefox"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 text-white px-6 py-2.5 text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              Línea LBS
              <ExternalLink className="w-4 h-4" />
            </a>
      
          </div>
          <p className="mt-3 text-xs text-neutral-400 max-w-xl mx-auto lg:mx-0">
            <a href="/gallery/instalacion/instalacion.pdf" target="_blank" rel="noopener noreferrer" className="underline text-neutral-300 hover:text-white" title="Abrir PDF de instalación">Instructivo para la visualización de los links en Google Chrome</a>
          </p>
        </motion.div>

        {/* Imagen o mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="aspect-video w-full rounded-3xl bg-gradient-to-br from-white/5 to-white/10 ring-1 ring-white/10 overflow-hidden">
            <img
              src="/gallery/hero_mock.jpg"
              alt="Hero mock"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
