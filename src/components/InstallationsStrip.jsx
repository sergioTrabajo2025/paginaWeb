export default function InstallationsStrip({ items = [] }) {
  if (!items?.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
        Instalaciones del Sistema de Monitoreo de Barrera (SMB)
      </h2>

      {/* === MODO MOBILE: carril horizontal con scroll === */}
      <div className="sm:hidden -mx-4 px-4">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
          {items.map((it, i) => (
            <figure
              key={i}
              className="min-w-[80%] snap-start rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10"
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
            className="group relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10"
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
    </section>
  );
}
