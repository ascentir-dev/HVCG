export const BUSINESS = {
  name: "Hudson Valley Contracting Group",
  shortName: "HVCG",
  phone: "(845) 728-5247",
  phoneTel: "+18457285247",
  email: "info@hvcg.com",
  address: {
    street: "Hudson Valley",
    city: "Newburgh",
    state: "NY",
    zip: "12550",
    region: "Orange County",
  },
  url: "https://www.hudsonvalleycontractinggroup.com",
  logo: "/content/wsh_logo_blue.webp",
  description:
    "Hudson Valley Contracting Group is a full-service residential remodeling company serving Orange, Ulster, and Dutchess Counties, NY. We specialize in kitchen remodeling, bathroom renovations, basement finishing, home additions, and whole-home renovations.",
  serviceArea: ["Orange County, NY", "Ulster County, NY", "Dutchess County, NY"],
  cities: [
    "Newburgh","Middletown","Goshen","Warwick","Monroe","New Windsor","Cornwall",
    "Kingston","New Paltz","Saugerties","Woodstock",
    "Poughkeepsie","Beacon","Hyde Park","Rhinebeck","Wappingers Falls",
  ],
  hours: "Mo-Fr 08:00-18:00,Sa 09:00-16:00",
  founded: "2009",
  geo: { lat: 41.5034, lng: -74.0104 },
} as const;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description: BUSINESS.description,
    foundingDate: BUSINESS.founded,
    logo: `${BUSINESS.url}${BUSINESS.logo}`,
    image: `${BUSINESS.url}/images/hero-background.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: BUSINESS.serviceArea.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    openingHours: BUSINESS.hours,
    priceRange: "$$-$$$",
    sameAs: [
      "https://www.facebook.com/hvcg",
      "https://www.instagram.com/hvcg",
    ],
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BUSINESS.url}${url}`,
    provider: {
      "@type": "GeneralContractor",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    areaServed: BUSINESS.serviceArea.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BUSINESS.url}${item.url}`,
    })),
  };
}

export function aggregateRatingSchema(rating: number, count: number) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: count,
    },
  };
}
