import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={BRAND.logo}
            alt="logo"
            className="h-8 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 object-contain"
          />
          <span className="text-white font-semibold tracking-tight">{BRAND.name}</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          {BRAND.nav.map((n) => {
            const isSMB = n.href === "#SMB";
            const isTMP = n.href === "#TMP";

            if (isTMP) {
              return (
                <span
                  key={n.label}
                  aria-disabled
                  title="Próximamente"
                  className="text-neutral-500 cursor-not-allowed"
                >
                  {n.label}
                </span>
              );
            }

            return (
              <a
                key={n.label}
                href={n.href}
                className={
                  "hover:text-white" +
                  (isSMB ? " transition-transform duration-200 hover:scale-110" : "")
                }
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={BRAND.cta.href}
            className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-neutral-200"
          >
            {BRAND.cta.label}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 text-white"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 grid gap-2 text-neutral-200">
            {BRAND.nav.map((n) => {
              const isSMB = n.href === "#SMB";
              const isTMP = n.href === "#TMP";

              if (isTMP) {
                return (
                  <span
                    key={n.label}
                    aria-disabled
                    title="Próximamente"
                    className="px-3 py-2 rounded-lg text-neutral-500 cursor-not-allowed"
                  >
                    {n.label}
                  </span>
                );
              }

              return (
                <a
                  key={n.label}
                  href={n.href}
                  className={
                    "px-3 py-2 rounded-lg hover:bg-white/5" +
                    (isSMB ? " transition-transform duration-200 hover:scale-105" : "")
                  }
                >
                  {n.label}
                </a>
              );
            })}
            <a
              href={BRAND.cta.href}
              className="mt-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium"
            >
              {BRAND.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
