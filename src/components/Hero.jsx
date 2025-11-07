import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Data Science & AI
          </h1>
          <p className="mt-4 text-neutral-300 text-lg max-w-2xl">
            Leveraging the power of data science and AI to unlock insights, drive growth, and create smarter systems.
          </p>
          <div className="mt-8">
            <a
              href="#portfolio"
              className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-neutral-200"
            >
              Learn more
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="aspect-video w-full rounded-3xl bg-gradient-to-br from-white/5 to-white/10 ring-1 ring-white/10 overflow-hidden">
            <img src="/gallery/hero_mock.jpg" alt="Hero mock" className="h-full w-full object-cover opacity-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
