import Link from "next/link";
import { business } from "@/lib/business";

export default function ServicesPreview() {
  const featured = business.services.slice(0, 3);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-[#1a5f7a] sm:text-4xl">Våra tjänster</h2>
            <p className="mt-4 max-w-xl text-lg text-[#14a3d7]/70">
              Service och reparation av elsparkcyklar — alla märken.
            </p>
          </div>
          <Link
            href="/tjanster"
            className="rounded-full border border-[#14a3d7] px-6 py-3 text-sm font-semibold text-[#14a3d7] transition hover:bg-[#14a3d7] hover:text-white"
          >
            Alla tjänster
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((service) => (
            <article key={service.id} className="flex flex-col rounded-2xl border border-[#14a3d7]/10 bg-[#edf7ef] p-6">
              <h3 className="text-xl font-semibold text-[#1a5f7a]">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#14a3d7]/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
