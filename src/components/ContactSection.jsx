import { Mail, ArrowRight, Linkedin, Github, User } from "lucide-react";
import { useState } from "react";
function Initials({ name, small = false }) {
  const sizeClass = small ? "h-16 w-16" : "h-24 w-24";
  return (
    <div className={`${sizeClass} grid place-items-center rounded-full bg-white/10 ring-1 ring-white/10 text-white`}>
      <User className={small ? "h-6 w-6 text-white/60" : "h-8 w-8 text-white/60"} />
    </div>
  );
}

function PersonCard({ person }) {
  const hasPhoto = Boolean(person.photo);
  return (
    <div className="flex flex-col items-center text-center gap-3">
      {hasPhoto ? (
        <img
          src={person.photo}
          alt={person.name}
          className="h-24 w-24 rounded-full object-cover ring-2 ring-white/20"
          loading="lazy"
        />
      ) : (
        <Initials name={person.name} />
      )}
      <div>
        <div className="text-sm font-medium text-white">{person.name}</div>
        {person.role && (
          <div className="text-xs text-neutral-400">{person.role}</div>
        )}
      </div>
    </div>
  );
}

function PersonCardModern({ person, small = false }) {
  const hasPhoto = Boolean(person.photo);
  const [imgError, setImgError] = useState(false);
  const showPhoto = hasPhoto && !imgError;
  const sizeClass = small ? "h-16 w-16" : "h-24 w-24";
  return (
    <div className="group relative flex flex-col items-center text-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/10 hover:-translate-y-0.5 transition">
      <div className="relative">
        <div
          className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-cyan-400/30 to-fuchsia-400/30 blur opacity-0 group-hover:opacity-100 transition"
          aria-hidden
        />
        {showPhoto ? (
          <img
            src={person.photo}
            alt=""
            className={`${sizeClass} rounded-full object-cover ring-2 ring-white/20`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <Initials name={person.name} small={small} />
        )}
      </div>
      <div>
        <div className="text-sm font-semibold text-white tracking-tight">{person.name}</div>
        {person.role && <div className="text-xs text-neutral-400">{person.role}</div>}
      </div>
      {(person.links?.linkedin || person.links?.github) && (
        <div className="flex items-center gap-3 text-white/70">
          {person.links?.linkedin && (
            <a href={person.links.linkedin} className="hover:text-white" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
            </a>
          )}
          {person.links?.github && (
            <a href={person.links.github} className="hover:text-white" target="_blank" rel="noreferrer">
              <Github size={16} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function ContactSection({ primary = [], collaborators = [] }) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 scroll-mt-16">
      <div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-10">
        {/* Decor */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-500/10 blur-3xl" />
        </div>

        {/* Header */}
        <header className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-white/60">Contacto</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            CONTACTO
          </h2>
          <p className="mt-3 text-neutral-300 text-sm">
            Coordinemos demos, soporte o nuevas integraciones para tus líneas y sistemas.
          </p>

          
        </header>

        {/* Equipo principal */}
        <section className="mt-10">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs font-medium text-white/80">
              Equipo principal
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          {(() => {
            const firstRow = primary.slice(0, 2);
            const secondRow = primary.slice(2, 5);
            return (
              <div className="grid gap-6">
                {/* Top row: 2 cards centered over gaps (cols 2 and 4 of a 5-col grid) */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 place-items-center">
                  {firstRow.map((p, i) => {
                    const colStart = i === 0 ? "sm:col-start-2" : "sm:col-start-4";
                    return (
                      <div key={`p-top-${i}`} className={colStart}>
                        <PersonCardModern person={p} />
                      </div>
                    );
                  })}
                </div>
                {/* Bottom row: 3 cards at cols 1, 3, 5 */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 place-items-center">
                  {secondRow.map((p, i) => {
                    const starts = ["sm:col-start-1", "sm:col-start-3", "sm:col-start-5"];
                    const colStart = starts[i] ?? "";
                    return (
                      <div key={`p-bottom-${i}`} className={colStart}>
                        <PersonCardModern person={p} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </section>

        {/* Colaboradores */}
        {collaborators?.length > 0 && (
          <section className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs font-medium text-white/80">
                Colaboradores
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {collaborators.map((p, i) => (
                <PersonCardModern key={i} person={p} small />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
