import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Progress({ progress }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden ring-1 ring-white/10">
      <motion.div
        className="h-full bg-white"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(1, Math.max(0, progress)) * 100}%` }}
        transition={{ ease: "linear", duration: 0.1 }}
      />
    </div>
  );
}

const AUTO_TIME = 6000; // ms por slide

export default function ShowcaseCarousel({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const total = slides.length;
  const current = slides[index] || {};

  const timeoutRef = useRef(null);
  const rafRef = useRef(null);
  const startRef = useRef(0);

  const clearTimers = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    timeoutRef.current = null;
    rafRef.current = null;
  };

  const startTimers = () => {
    startRef.current = performance.now();
    // Avance automático seguro (sin saltos)
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_TIME);

    // Progreso suave basado en tiempo real
    const tick = (now) => {
      const p = (now - startRef.current) / AUTO_TIME;
      setProgress(Math.min(1, Math.max(0, p)));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (total <= 0) return;
    clearTimers();
    setProgress(0);
    startTimers();
    return () => clearTimers();
    // reiniciar cada vez que cambie el índice o la cantidad de slides
  }, [index, total]);

  const go = (d) => {
    clearTimers();            // evita doble avance
    setProgress(0);
    setIndex((i) => (i + d + total) % total);
  };

  const goTo = (i) => {
    clearTimers();            // evita doble avance
    setProgress(0);
    setIndex(((i % total) + total) % total);
  };

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5">
        <div className="relative aspect-[21/7.65]">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.img
              key={current.id ?? index}
              src={current.img}
              alt={current.title}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0.2, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          </AnimatePresence>

          {/* Controles */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={() => go(-1)}
              className="grid place-items-center h-10 w-10 rounded-lg bg-neutral-950/50 ring-1 ring-white/10 text-white hover:bg-neutral-900/70"
              aria-label="Anterior"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => go(1)}
              className="grid place-items-center h-10 w-10 rounded-lg bg-neutral-950/50 ring-1 ring-white/10 text-white hover:bg-neutral-900/70"
              aria-label="Siguiente"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Progreso */}
        <div className="px-4 pt-3">
          <Progress progress={progress} />
        </div>

        {/* Tabs con títulos */}
        <div className="p-4 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-4">
            {slides.map((s, i) => (
              <button
                key={s.id ?? i}
                onClick={() => goTo(i)}
                className={`text-left rounded-2xl p-3 ring-1 transition ${
                  i === index
                    ? "bg-white text-black ring-white"
                    : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                }`}
              >
                <div className="text-sm font-semibold leading-tight">{s.title}</div>
                <div className="text-xs/relaxed opacity-80 mt-1 hidden sm:block">
                  {s.subtitle}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
