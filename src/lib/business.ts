export const business = {
  name: "Daltek",
  tagline: "Phone & computer repair on Molngatan",
  description: "Highly rated local repair shop on Molngatan with 30 five-star Hitta reviews.",
  category: "Repair Shop",
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
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Daltek",
  rating: 5.0,
  reviewCount: 30,
  foundedYear: null as number | null,
  coordinates: { lat: 59.845, lng: 17.66 },
  hours: {
    note: "Ring gärna innan besök.",
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
      title: "Snabb service",
      description: "Reparationer utförda av erfarna hantverkare.",
    },
    {
      title: "Rättvist pris",
      description: "Kvalitetsarbete utan onödiga kostnader.",
    },
    {
      title: "Lokalt förtroende",
      description: "Topprankat med 30 omdömen.",
    },
    {
      title: "Brett utbud",
      description: "Komplett repair shop i Uppsala.",
    },
  ],
  services: [
    {
      id: "mobilreparation",
      name: "Mobilreparation",
      description: "Professionell mobilreparation med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "datorreparation",
      name: "Datorreparation",
      description: "Professionell datorreparation med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sk-rmbyte",
      name: "Skärmbyte",
      description: "Professionell skärmbyte med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fels-kning",
      name: "Felsökning",
      description: "Professionell felsökning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "data-terst-llning",
      name: "Dataåterställning",
      description: "Professionell dataåterställning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Daltek. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Daltek varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "mobilreparation Uppsala",
    "datorreparation Uppsala",
    "Daltek Uppsala",
    "telefonreparation Uppsala",
  ],
  brandColors: {
    primary: "#4a5568",
    secondary: "#c9a227",
    accent: "#f7fafc",
    dark: "#2d3748",
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
