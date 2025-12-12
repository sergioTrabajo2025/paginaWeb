import { useEffect, useState } from "react";

export default function InstallationsStrip({
  title = "Instalaciones del Sistema de Monitoreo de Barrera (SMB)",
  items = [],
}) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isOpen = lightboxIndex !== null;

  if (!items?.length) return null;

  const open = (i) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % items.length));

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
        {title}
      </h2>

      {/* === MODO MOBILE: carril horizontal con scroll === */}
      <div className="sm:hidden -mx-4 px-4">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
          {items.map((it, i) => (
            <figure
              key={i}
              className="min-w-[80%] snap-start rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 cursor-zoom-in"
              onClick={() => open(i)}
            >
              <img
                src={it.src}
                alt={it.alt}
                className="h-48 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                loading="lazy"
              />
              {it.caption && (
                <figcaption className="px-3 py-2 text-xs text-neutral-300">
                  {it.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      {/* === MODO ESCRITORIO: grid con efecto hover === */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <figure
            key={i}
            className="group relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 cursor-zoom-in"
            onClick={() => open(i)}
          >
            <img
              src={it.src}
              alt={it.alt}
              className="h-48 w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-xl"
              loading="lazy"
            />
            {it.caption && (
              <figcaption className="absolute bottom-0 left-0 w-full bg-black/60 text-center py-2 text-xs text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {it.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* === LIGHTBOX MODAL === */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute -top-10 right-0 rounded-full bg-white text-black px-3 py-1 text-sm font-medium hover:bg-neutral-200"
            >
              Cerrar
            </button>

            {/* Image */}
            <img
              src={items[lightboxIndex].src}
              alt={items[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl ring-1 ring-white/10"
            />

            {/* Caption */}
            {items[lightboxIndex].caption && (
              <div className="mt-3 text-center text-sm text-neutral-300">
                {items[lightboxIndex].caption}
              </div>
            )}

            {/* Controls */}
            <div className="absolute inset-y-0 -left-3 -right-3 flex items-center justify-between pointer-events-none">
              <button
                onClick={prev}
                className="pointer-events-auto rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 text-white px-3 py-2 text-sm"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="pointer-events-auto rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 text-white px-3 py-2 text-sm"
                aria-label="Siguiente"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
