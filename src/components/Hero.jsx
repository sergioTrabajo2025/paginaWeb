import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section id="SMB" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left scroll-mt-16">
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

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://smb-lgr-sgs.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition"
            >
              Línea LGR
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://smb-lbs-sgs.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 text-white px-6 py-2.5 text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              Línea LBS
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
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
    </section>
  );
}
