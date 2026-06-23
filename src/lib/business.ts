export const business = {
  name: "Daltek",
  tagline: "Serviceverkstad för elsparkcyklar på Molngatan",
  description:
    "Daltek, din lokala serviceverkstad för elscootrar och elsparkcyklar i Uppsala — specialister på service och reparation oavsett märke.",
  category: "Teknikservice",
  address: {
    street: "Molngatan 9",
    postalCode: "754 31",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "076-565 75 50",
  phoneLink: "tel:+46765657550",
  email: "info@daltek.se",
  emailLink: "mailto:info@daltek.se",
  bookingUrl: "tel:+46765657550",
  bookingLabel: "Ring oss",
  websiteUrl: "https://www.daltek.se" as string | null,
  facebookUrl: "https://www.facebook.com/daltekuppsala" as string | null,
  instagramUrl: null as string | null,
  owner: "Daltek",
  rating: 5.0,
  reviewCount: 2,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8706, lng: 17.6613 },
  hours: {
    note: "Ring gärna innan besök — öppettider kan avvika.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Elsparkcyklar",
      description: "Specialister på service och reparation av elsparkcyklar — enligt daltek.se.",
    },
    {
      title: "5,0 på Hitta",
      description: "2 omdömen med perfekt betyg.",
    },
    {
      title: "Alla märken",
      description: "Xiaomi, Ninebot, E-wheels, Navee, Kugoo Kukirin, Vsett m.fl. — enligt daltek.se.",
    },
    {
      title: "Molngatan 9",
      description: "Nära Gränby Centrum i Uppsala — enligt daltek.se.",
    },
  ],
  services: [
    {
      id: "elsparkcykel-service",
      name: "Elsparkcykelservice",
      description: "Service och reparation av elsparkcyklar oavsett märke.",
      duration: "—",
      priceFrom: null,
      note: "Källa: daltek.se",
    },
    {
      id: "xiaomi-ninebot",
      name: "Xiaomi & Ninebot",
      description: "Specialister på Xiaomi, Ninebot by Segway och liknande märken.",
      duration: "—",
      priceFrom: null,
      note: "Källa: daltek.se",
    },
    {
      id: "felsokning",
      name: "Felsökning",
      description: "Diagnostik och reparation av elscootrar.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "reservdelar",
      name: "Reservdelar",
      description: "Byte av slitdelar och komponenter.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för tillgänglighet.",
    },
    {
      id: "mobil-dator",
      name: "Mobil & dator",
      description: "Teknikservice — kontakta verkstaden för aktuellt utbud.",
      duration: "—",
      priceFrom: null,
      note: "Ring 076-565 75 50.",
    },
  ],
  logoImage: null as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-1.jpg",
  gallery: [
    { id: 1, label: "Daltek verkstad", image: "/images/hero.jpg" },
    { id: 2, label: "Elsparkcyklar", image: "/images/gallery-1.jpg" },
    { id: 3, label: "Molngatan 9", image: "/images/gallery-2.jpg" },
  ],
  about: {
    headline: "Serviceverkstad i Uppsala",
    paragraphs: [
      "Daltek är din lokala serviceverkstad för elscootrar och elsparkcyklar på Molngatan 9 i Uppsala.",
      "Vi är specialister på service och reparation av elsparkcyklar oavsett märke, inklusive Xiaomi, Ninebot by Segway, E-wheels, E-Way, Navee, Kugoo Kukirin och Vsett.",
      "Vi finns nära Gränby Centrum — ring 076-565 75 50 eller maila info@daltek.se.",
    ],
  },
  testimonials: [
    {
      text: "Otroligt bra bemötande och service",
      author: "Helena S.",
      source: "Hitta.se",
      sourceUrl: "https://www.hitta.se/verksamhet/daltek-aoorstbhl",
      rating: 5,
      date: "2023-09-27",
    },
    {
      text: "God service och ett trevligt bemötande till ett bra pris.",
      author: "Christian M.",
      source: "Hitta.se",
      sourceUrl: "https://www.hitta.se/verksamhet/daltek-aoorstbhl",
      rating: 5,
      date: "2023-09-04",
    },
  ],
  seoKeywords: [
    "elsparkcykel reparation Uppsala",
    "elscooter service Uppsala",
    "Daltek Molngatan",
    "Xiaomi elsparkcykel Uppsala",
  ],
  brandColors: {
    primary: "#14a3d7",
    secondary: "#0cb9e9",
    accent: "#edf7ef",
    dark: "#1a5f7a",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
