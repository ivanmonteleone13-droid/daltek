import { business } from "@/lib/business";

export default function Benefits() {
  const icons = ["🛴", "⭐", "🔧", "📍"];

  return (
    <section className="bg-[#edf7ef] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1a5f7a] sm:text-4xl">Varför välja {business.name}?</h2>
          <p className="mt-4 text-lg text-[#14a3d7]/80">Lokal serviceverkstad för elsparkcyklar i Uppsala.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {business.usps.map((usp, index) => (
            <article
              key={usp.title}
              className="rounded-2xl border border-[#14a3d7]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#14a3d7]/10 text-2xl" aria-hidden>
                {icons[index]}
              </div>
              <h3 className="text-lg font-semibold text-[#1a5f7a]">{usp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#14a3d7]/70">{usp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
