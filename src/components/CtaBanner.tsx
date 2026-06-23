import Link from "next/link";
import { business, getFullAddress } from "@/lib/business";

export default function CtaBanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#14a3d7] to-[#0cb9e9] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Behöver du service?</h2>
              <p className="mt-4 text-lg text-white/90">
                Besök oss på {getFullAddress()} eller ring {business.phone}.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href={business.bookingUrl}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[#1a5f7a] transition hover:opacity-90"
              >
                {business.bookingLabel}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
