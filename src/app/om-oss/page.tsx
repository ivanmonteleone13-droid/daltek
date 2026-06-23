import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Om oss",
  description: `Lär känna ${business.name} — serviceverkstad för elsparkcyklar på Molngatan i Uppsala.`,
};

export default function AboutPage() {
  const about = "about" in business ? business.about : null;
  const aboutImage = "aboutImage" in business ? business.aboutImage : null;

  return (
    <>
      <section className="bg-gradient-to-br from-[#1a5f7a] to-[#14a3d7] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Om {business.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            {about?.headline ?? `Serviceverkstad på ${business.address.street} i Uppsala.`}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#1a5f7a]">Välkommen till oss</h2>
            {about?.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-[#14a3d7]/80">
                {p}
              </p>
            ))}
          </div>

          {aboutImage ? (
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img src={aboutImage} alt={business.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-[#1a5f7a]">Vill du veta mer?</h2>
          <p className="mt-4 text-[#14a3d7]/70">Ring oss eller besök verkstaden på Molngatan 9.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-full bg-[#14a3d7] px-8 py-4 font-semibold text-white transition hover:bg-[#1a5f7a]"
            >
              Kontakta oss
            </Link>
            <a
              href={business.bookingUrl}
              className="rounded-full border border-[#14a3d7] px-8 py-4 font-semibold text-[#14a3d7] transition hover:bg-[#edf7ef]"
            >
              Ring oss
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
