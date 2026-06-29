import type {
  AreaGuide,
  BlogPost,
  CleaningService,
  Company,
  ContentPage,
  FaqItem,
  ProgrammaticPage,
  SeoPage,
  ServiceArea,
  Testimonial,
} from "@/lib/types";

export const company: Company = {
  name: "RG Divine Cleaning Services",
  legalName: "RG Divine Cleaning Services Ltd.",
  tagline: "Sparkling Spaces, Happy Faces",
  ownerName: "Rukhsar",
  email: "rgdivinecleaningservices@gmail.com",
  emailAlt: "rukhsark2610@gmail.com",
  phone: "+12503018465",
  phoneDisplay: "(250) 301-8465",
  phoneAlt: "+12368856099",
  phoneAltDisplay: "(236) 885-6099",
  baseUrl: "https://rgdivinecleaningservices.com",
  serviceRegion: "Halifax Regional Municipality, Nova Scotia",
  province: "Nova Scotia",
  yearsActive: 3,
  pillars: ["Trusted & Reliable", "Eco-Friendly Products", "Attention to Detail", "Customer Satisfaction"],
  logo: "/images/logo.jpg",
  ogImage: "/images/logo.jpg",
  bio: "RG Divine Cleaning Services is a professional, eco-friendly cleaning company serving Halifax Regional Municipality. We offer residential and commercial cleaning, move-in/move-out, deep cleaning, post-construction cleanup, window cleaning, and floor strip-and-wax — backed by reliable people, quality products, and a sparkle-or-it-doesn't-leave standard.",
  instagramUrl: undefined,
  facebookUrl: undefined,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const serviceAreas: ServiceArea[] = [
  {
    name: "Halifax",
    slug: "halifax",
    region: "NS",
    country: "CA",
    postalPrefix: "B3",
    neighbourhoods: ["South End", "North End", "West End", "Downtown", "Fairview", "Quinpool"],
    blurb:
      "Halifax's downtown core, university districts, and historic neighbourhoods mix century homes, modern condos, and high-rise offices. Each property type calls for a different cleaning approach — older homes need gentle, surface-aware care, while glass-curtain condos and offices benefit from streak-free routines and disinfection protocols.",
    highlight: "Downtown condos, century homes, and busy professional offices.",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Dartmouth",
    slug: "dartmouth",
    region: "NS",
    country: "CA",
    postalPrefix: "B2W",
    neighbourhoods: ["Downtown Dartmouth", "Burnside", "Woodside", "Eastern Passage", "Cole Harbour edge"],
    blurb:
      "Dartmouth blends a revitalized downtown, the massive Burnside industrial park, and family neighbourhoods around the lakes. We clean everything from Burnside warehouses and offices to Crichton Park family homes, with crews that understand each environment's standard.",
    highlight: "Burnside commercial parks and family homes around the lakes.",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Bedford",
    slug: "bedford",
    region: "NS",
    country: "CA",
    postalPrefix: "B4A",
    neighbourhoods: ["Bedford South", "West Bedford", "Hammonds Plains border", "Sunnyside"],
    blurb:
      "Bedford is one of HRM's fastest-growing communities — new subdivisions, executive homes, and a steady wave of move-ins. We handle move-in/move-out cleans for the West Bedford and Bedford South new-build market, plus regular residential and small-office service.",
    highlight: "Executive new-builds and move-in/move-out demand.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Sackville",
    slug: "sackville",
    region: "NS",
    country: "CA",
    postalPrefix: "B4C",
    neighbourhoods: ["Lower Sackville", "Middle Sackville", "Upper Sackville", "Beaver Bank"],
    blurb:
      "Sackville is a sprawling residential community that anchors HRM's northwest corridor. Homes here range from established family streets to newer Beaver Bank subdivisions — we provide weekly, bi-weekly, and one-time deep cleans across all of them.",
    highlight: "Family routines and recurring residential service.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Cole Harbour",
    slug: "cole-harbour",
    region: "NS",
    country: "CA",
    postalPrefix: "B2V",
    neighbourhoods: ["Forest Hills", "Colby Village", "Westphal", "Bissett"],
    blurb:
      "Cole Harbour is built around mature family streets, parks, and small commercial pockets. Most of our work here is recurring residential — bi-weekly or monthly cleans that keep busy households running without weekend chore lists.",
    highlight: "Recurring residential cleans for busy households.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Eastern Passage",
    slug: "eastern-passage",
    region: "NS",
    country: "CA",
    postalPrefix: "B3G",
    neighbourhoods: ["Eastern Passage proper", "Shearwater", "Cow Bay edge"],
    blurb:
      "Eastern Passage is a tight-knit coastal community east of Dartmouth. We handle residential cleans, move-out scrubs for navy and Shearwater base transfers, and the occasional post-construction sweep on shorefront builds.",
    highlight: "Coastal homes and base-transfer move-outs.",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Clayton Park",
    slug: "clayton-park",
    region: "NS",
    country: "CA",
    postalPrefix: "B3M",
    neighbourhoods: ["Clayton Park West", "Rockingham", "Halifax West", "Birch Cove"],
    blurb:
      "Clayton Park is a dense residential and apartment community in west Halifax. High-rise tenants love our move-out service for tight damage-deposit windows; townhouse owners book recurring cleans to stay ahead of weekday chaos.",
    highlight: "High-rise move-outs and townhouse routines.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Spryfield",
    slug: "spryfield",
    region: "NS",
    country: "CA",
    postalPrefix: "B3R",
    neighbourhoods: ["Greystone", "Harrietsfield border", "Sambro Loop", "Herring Cove"],
    blurb:
      "Spryfield anchors HRM's south-west — established neighbourhoods plus new subdivisions stretching toward Herring Cove and Sambro. Mostly recurring residential work, with the occasional commercial contract along Herring Cove Road.",
    highlight: "South-west HRM family streets and small commercial.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop",
  },
];

const PROOF_RESIDENTIAL_COMMERCIAL = [
  "Trained, background-checked cleaners on every visit",
  "Eco-friendly, family-safe products that won't leave chemical residue",
  "Custom checklists per space — kitchen, baths, common areas, offices",
  "Insured and bonded — your property is protected on every visit",
];

const PROOF_MOVE_IN_OUT = [
  "Damage-deposit-grade detail — inside ovens, fridges, cabinets, baseboards",
  "Property-manager-ready: walk-through-passing finish in one visit",
  "Flexible scheduling around your closing or lease-end date",
  "Quote held even if move-out dates shift by a few days",
];

const PROOF_DEEP_CLEANING = [
  "Top-to-bottom: baseboards, grout, vents, light fixtures, behind appliances",
  "Two to four times the duration of a regular clean — and it shows",
  "Recommended seasonally or when bringing a property back to standard",
  "Same eco-friendly products and trained crew — just more time on every surface",
];

const PROOF_POST_CONSTRUCTION = [
  "Drywall dust removal from every horizontal and vertical surface",
  "Window track and frame detail — no leftover construction debris",
  "Floor protection and final-stage finish for staging or move-in",
  "Coordination with GCs and project managers on tight timelines",
];

const PROOF_WINDOW = [
  "Streak-free interior and exterior glass on residential and low-rise commercial",
  "Track, frame, and sill detail included — not just the glass",
  "Screens cleaned and reinstalled on request",
  "Insured technicians on every visit",
];

const PROOF_FLOOR_STRIP_WAX = [
  "VCT and linoleum strip-and-wax with multi-coat finish",
  "After-hours scheduling for offices and retail to avoid downtime",
  "Slip-resistant finish options for high-traffic areas",
  "Maintenance buffing programs available to extend wax life",
];

const PROOF_CUSTOM = [
  "Build a plan around your space, your schedule, and your standard",
  "One-off, weekly, bi-weekly, monthly — whatever fits your routine",
  "Mix and match services — e.g. deep clean quarterly, regular weekly",
  "Transparent pricing locked in writing before we start",
];

const SERVICE_INCLUSIONS_RESIDENTIAL = [
  "Dusting and surface wipe-downs across all rooms",
  "Kitchen counters, sinks, exterior of appliances, stove top",
  "Bathroom sinks, toilets, tubs, showers, mirrors",
  "Floor vacuuming and mopping — hard floors and carpets",
  "Trash and recycling removal",
];

const SERVICE_INCLUSIONS_MOVE = [
  "Inside all cabinets, drawers, and closets",
  "Inside oven, fridge, microwave, dishwasher",
  "Baseboards, light switches, door frames, and trim",
  "Window interiors, tracks, and sills",
  "Tile grout scrub in kitchens and bathrooms",
];

const SERVICE_INCLUSIONS_DEEP = [
  "Everything in a regular clean — plus the detail layer",
  "Baseboards, light fixtures, ceiling fans, vents",
  "Inside oven, microwave, and exterior of fridge",
  "Tile grout in wet areas",
  "Spot-cleaning of walls and high-touch surfaces",
];

const SERVICE_INCLUSIONS_POST_CONSTRUCTION = [
  "Drywall and sanding dust removal from all surfaces",
  "Window glass, tracks, frames, sills",
  "Inside cabinets, drawers, and fixtures",
  "Floor vacuuming, mopping, and finish polish",
  "Final walk-through and touch-up before handover",
];

const SERVICE_INCLUSIONS_WINDOW = [
  "Interior and exterior glass",
  "Tracks, frames, and sills",
  "Screen removal, cleaning, and reinstall on request",
  "Streak-free finish guarantee",
];

const SERVICE_INCLUSIONS_FLOOR = [
  "Old wax strip-down to base flooring",
  "Multi-coat wax application with cure time",
  "Buff and polish to high-gloss finish",
  "After-hours scheduling for commercial spaces",
];

const SERVICE_INCLUSIONS_CUSTOM = [
  "Initial walk-through and scope conversation",
  "Custom checklist tailored to your space and standard",
  "Flexible frequency — one-time to weekly",
  "Mix-and-match services across visits",
];

export const services: CleaningService[] = [
  {
    slug: "residential-commercial-cleaning",
    label: "Residential & Commercial Cleaning",
    shortLabel: "Residential & Commercial",
    keyword: "residential and commercial cleaning",
    intent: "residential",
    headline: "Reliable residential and commercial cleaning across HRM.",
    summary:
      "Weekly, bi-weekly, or monthly cleaning for homes and offices — same crew, same standard, every visit. Backed by trained, insured cleaners and eco-friendly products that are safe for kids, pets, and staff.",
    conversionAngle:
      "Get a clean home or office without the weekday chaos. Request a free quote and we'll send you a tailored plan within one business day.",
    proofPoints: PROOF_RESIDENTIAL_COMMERCIAL,
    inclusions: SERVICE_INCLUSIONS_RESIDENTIAL,
    image: "/images/office-cleaning.jpg",
    primaryCta: "quote",
  },
  {
    slug: "move-in-out-cleaning",
    label: "Move-In & Move-Out Cleaning",
    shortLabel: "Move-In / Move-Out",
    keyword: "move in move out cleaning",
    intent: "specialty",
    headline: "Move-in and move-out cleaning that protects your deposit.",
    summary:
      "Whether you're handing keys back to a landlord or walking into a new home, we deliver a damage-deposit-grade clean — inside cabinets, ovens, fridges, baseboards, and tracks.",
    conversionAngle:
      "Closing or moving soon? Tell us the date — we'll hold a slot and quote firm pricing before you sign.",
    proofPoints: PROOF_MOVE_IN_OUT,
    inclusions: SERVICE_INCLUSIONS_MOVE,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    primaryCta: "quote",
  },
  {
    slug: "deep-cleaning",
    label: "Deep Cleaning Services",
    shortLabel: "Deep Cleaning",
    keyword: "deep cleaning",
    intent: "residential",
    headline: "Deep cleaning that resets your space.",
    summary:
      "A seasonal reset for your home or office — baseboards, grout, vents, light fixtures, behind appliances. Everything a regular clean skips, on a schedule that makes sense for your space.",
    conversionAngle:
      "Bring your space back to a like-new standard. Deep cleans are usually a 4–8 hour visit; we'll quote on the actual square footage and condition.",
    proofPoints: PROOF_DEEP_CLEANING,
    inclusions: SERVICE_INCLUSIONS_DEEP,
    image: "/images/carpet-close-up.jpg",
    primaryCta: "quote",
  },
  {
    slug: "post-construction-cleanup",
    label: "Post-Construction Cleanup",
    shortLabel: "Post-Construction",
    keyword: "post construction cleaning",
    intent: "commercial",
    headline: "Post-construction cleanup that hands your space back ready.",
    summary:
      "Drywall dust, paint splatter, debris in window tracks — we clean it all and hand back a space ready for staging, photos, or move-in.",
    conversionAngle:
      "Wrapping a build or reno? Send us the site walk-through video or floorplan and we'll quote within a day.",
    proofPoints: PROOF_POST_CONSTRUCTION,
    inclusions: SERVICE_INCLUSIONS_POST_CONSTRUCTION,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    primaryCta: "quote",
  },
  {
    slug: "window-cleaning",
    label: "Window Cleaning",
    shortLabel: "Window Cleaning",
    keyword: "window cleaning",
    intent: "specialty",
    headline: "Streak-free window cleaning, inside and out.",
    summary:
      "Interior and exterior glass for residential and low-rise commercial properties. Tracks, frames, and screens included — not just the glass.",
    conversionAngle:
      "Spring or fall window service or one-off pre-event clean — tell us the property and we'll quote based on storey count and pane count.",
    proofPoints: PROOF_WINDOW,
    inclusions: SERVICE_INCLUSIONS_WINDOW,
    image: "/images/window-cleaning-spring.jpg",
    primaryCta: "quote",
  },
  {
    slug: "floor-strip-wax",
    label: "Floor Strip & Wax Services",
    shortLabel: "Strip & Wax",
    keyword: "floor strip and wax",
    intent: "commercial",
    headline: "Floor strip and wax for VCT, linoleum, and high-traffic surfaces.",
    summary:
      "Multi-coat strip-and-wax service for offices, retail, schools, and commercial kitchens. After-hours scheduling to avoid downtime.",
    conversionAngle:
      "Floors looking tired? We'll schedule the strip-and-wax for after hours so your space is ready by morning.",
    proofPoints: PROOF_FLOOR_STRIP_WAX,
    inclusions: SERVICE_INCLUSIONS_FLOOR,
    image: "/images/floor-scrubber.jpg",
    primaryCta: "quote",
  },
  {
    slug: "custom-cleaning-plans",
    label: "Customized Cleaning",
    shortLabel: "Custom Plans",
    keyword: "custom cleaning plan",
    intent: "branded",
    headline: "Customized cleaning built around your space.",
    summary:
      "Mix and match services on a schedule that fits your routine — regular weekly cleans with a quarterly deep, or a monthly office reset with one-off windows.",
    conversionAngle:
      "Tell us your space and your standard — we'll build a plan and lock pricing before we start.",
    proofPoints: PROOF_CUSTOM,
    inclusions: SERVICE_INCLUSIONS_CUSTOM,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
    primaryCta: "quote",
  },
];

function buildSeo(args: SeoPage): SeoPage {
  return args;
}

function buildFaqs(service: CleaningService, area: ServiceArea): FaqItem[] {
  const neighbourhoodList = area.neighbourhoods.slice(0, 3).join(", ");

  const common: FaqItem[] = [
    {
      q: `Do you serve all of ${area.name}?`,
      a: `Yes — we cover ${area.name} end to end, including ${neighbourhoodList}. ${area.blurb}`,
    },
    {
      q: `Are your cleaners insured?`,
      a: `Every member of our crew is insured and background-checked. We carry liability coverage so your property is protected on every visit.`,
    },
    {
      q: `Do you bring your own supplies?`,
      a: `Yes. We bring eco-friendly, family-safe cleaning products and all the equipment needed. If you prefer we use your own products, just let us know on the quote call.`,
    },
  ];

  switch (service.slug) {
    case "move-in-out-cleaning":
      return [
        ...common,
        {
          q: `How soon can you schedule a move-out clean in ${area.name}?`,
          a: `Same week is usually possible if you book on the quote call. We'll hold the slot once dates are confirmed and quote firm pricing on square footage and condition.`,
        },
        {
          q: `Will the clean pass a landlord inspection?`,
          a: `That's the standard we work to. Inside cabinets, ovens, fridges, baseboards, tracks — everything an inspector flags is on our move-out checklist.`,
        },
      ];
    case "deep-cleaning":
      return [
        ...common,
        {
          q: `How often should a ${area.name} home or office get a deep clean?`,
          a: `Most properties benefit from a quarterly deep clean alongside regular weekly or bi-weekly service. Spaces with pets, kids, or high foot traffic may want one every 6–8 weeks.`,
        },
        {
          q: `How long does a deep clean take?`,
          a: `Usually 4–8 hours depending on square footage and condition. We quote on the actual space, not flat-rate guesses.`,
        },
      ];
    case "post-construction-cleanup":
      return [
        ...common,
        {
          q: `Do you work with general contractors in ${area.name}?`,
          a: `Yes. We coordinate directly with GCs and project managers, work to your handover timeline, and handle the drywall dust, paint splatter, and debris that a final inspection catches.`,
        },
        {
          q: `Can you handle large commercial post-construction sites?`,
          a: `Yes. We scale crew size to the site — from a single-unit reno in ${area.name} up to multi-suite commercial fit-outs.`,
        },
      ];
    case "window-cleaning":
      return [
        ...common,
        {
          q: `Do you clean exterior windows on multi-storey buildings in ${area.name}?`,
          a: `We handle residential up to three storeys and low-rise commercial. For high-rise glass we'll refer you to a specialist partner.`,
        },
        {
          q: `Do you include screens and tracks?`,
          a: `Yes. Tracks, frames, and sills are included in every window service. Screens are removed, cleaned, and reinstalled on request.`,
        },
      ];
    case "floor-strip-wax":
      return [
        ...common,
        {
          q: `Can you schedule strip-and-wax after hours in ${area.name}?`,
          a: `Yes. Most commercial strip-and-wax happens overnight or weekends so your space is ready for normal hours the next day.`,
        },
        {
          q: `How long does the wax finish last?`,
          a: `With normal traffic and quarterly buffing, a multi-coat wax finish holds 12–18 months. We can set up a maintenance schedule to extend that.`,
        },
      ];
    case "residential-commercial-cleaning":
      return [
        ...common,
        {
          q: `What's included in a regular clean?`,
          a: `Dusting, surface wipe-downs, kitchen and bathroom detail, floor vacuum and mop, trash removal. Anything outside the regular scope — inside oven, deep grout — is a deep-clean add-on.`,
        },
        {
          q: `Can I get the same cleaner every visit?`,
          a: `That's our default. Same crew, same standard, every visit — so we know your space and you know who's walking through your door.`,
        },
      ];
    case "custom-cleaning-plans":
    default:
      return [
        ...common,
        {
          q: `What does a custom plan look like for ${area.name} clients?`,
          a: `It depends on your space and standard. Example: weekly regular clean + quarterly deep clean + twice-a-year window service. We'll scope it on the quote call and lock pricing in writing.`,
        },
        {
          q: `Can I change the schedule later?`,
          a: `Yes. Plans flex — add or drop visits, change frequency, swap services. Just give us a week's notice on any change.`,
        },
      ];
  }
}

function buildProgrammaticPage(service: CleaningService, area: ServiceArea): ProgrammaticPage {
  const slug = `${service.slug}-${area.slug}`;
  const path = `/${slug}`;

  const title = `${service.label} in ${area.name}, NS | ${company.name}`;
  const description = `${service.label.toLowerCase()} in ${area.name}, Nova Scotia by ${company.name}. ${service.summary}`;
  const keywords = [
    `${service.keyword} ${area.name.toLowerCase()}`,
    `${service.keyword} ${area.name.toLowerCase()} ns`,
    `${area.name.toLowerCase()} cleaning company`,
    `${area.name.toLowerCase()} cleaning service`,
    `rg divine ${area.name.toLowerCase()}`,
  ];

  return {
    slug,
    path,
    area,
    service,
    seo: buildSeo({
      slug,
      path,
      title,
      description,
      keywords,
      image: service.image,
      priority: 0.9,
    }),
    faqs: buildFaqs(service, area),
  };
}

export const programmaticPages: ProgrammaticPage[] = services.flatMap((service) =>
  serviceAreas.map((area) => buildProgrammaticPage(service, area)),
);

function buildAreaGuide(area: ServiceArea): AreaGuide {
  const slug = area.slug;
  const path = `/service-areas/${slug}`;
  return {
    slug,
    path,
    area,
    seo: buildSeo({
      slug: `service-areas-${slug}`,
      path,
      title: `Cleaning Services in ${area.name}, NS | ${company.name}`,
      description: `Professional residential and commercial cleaning across ${area.name}, Nova Scotia. ${area.blurb}`,
      keywords: [
        `${area.name.toLowerCase()} cleaning company`,
        `${area.name.toLowerCase()} cleaners`,
        `cleaning services ${area.name.toLowerCase()}`,
        `cleaning ${area.name.toLowerCase()} ns`,
      ],
      image: area.image,
      priority: 0.75,
    }),
  };
}

export const areaGuides: AreaGuide[] = serviceAreas.map(buildAreaGuide);

export const testimonials: Testimonial[] = [
  {
    clientName: "Sarah M.",
    serviceType: "residential",
    area: "Halifax",
    quote:
      "Bi-weekly cleans for our South End home. Same crew every visit, always on time, and our place feels noticeably calmer afterwards. The eco-friendly products are a real plus with kids around.",
  },
  {
    clientName: "James T.",
    serviceType: "move-in-out",
    area: "Bedford",
    quote:
      "Booked a move-out clean two days before our final walk-through. They handled the oven, fridge, and baseboards perfectly — landlord released the deposit without a single deduction.",
  },
  {
    clientName: "Priya K.",
    serviceType: "commercial",
    area: "Dartmouth",
    quote:
      "We use RG Divine for our Burnside office. Floors look better than they did when we moved in, and the team works around our schedule so we never lose a workday.",
  },
  {
    clientName: "Mark D.",
    serviceType: "post-construction",
    area: "Halifax",
    quote:
      "We hired them after a kitchen renovation. Drywall dust everywhere is a nightmare — they had the place spotless and staged-ready in a single visit.",
  },
  {
    clientName: "Lisa H.",
    serviceType: "residential",
    area: "Sackville",
    quote:
      "Monthly cleans for our family home in Lower Sackville. Reliable, friendly, and the house smells fresh without that chemical sting other companies leave behind.",
  },
  {
    clientName: "Daniel R.",
    serviceType: "move-in-out",
    area: "Clayton Park",
    quote:
      "High-rise move-out with a tight damage-deposit window. They scheduled around our keys-back date and handed back a unit the building manager actually complimented.",
  },
];

export const contentPages: ContentPage[] = [
  {
    slug: "about",
    eyebrow: "About RG Divine",
    title: "A clean space makes all the difference.",
    summary:
      "RG Divine Cleaning Services is a Halifax-based cleaning company committed to reliable, eco-friendly service across HRM — residential, commercial, and everything in between.",
    heroImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000&auto=format&fit=crop",
    body: [
      "We believe a clean space creates a healthier, happier, and more productive environment. Whether you need regular home cleaning, office maintenance, move-in/move-out cleaning, post-construction cleanup, or specialized floor care, our experienced team delivers exceptional results every time.",
      "We take pride in providing reliable, detail-oriented cleaning services tailored to your unique needs. Using quality products and proven cleaning methods, we ensure every space is left fresh, sanitized, and welcoming.",
      "Our commitment is simple: show up on time, clean with care, and exceed expectations. That's the standard we hold every visit to — and the reason our clients book again.",
    ],
    sections: [
      {
        title: "Why clients choose us",
        body: "Four things you'll notice on every visit.",
        points: [
          "Trusted & reliable — you can count on us to get the job done right",
          "Eco-friendly products — safe for your family, pets, and the environment",
          "Attention to detail — we don't just clean, we care about the little things",
          "Customer satisfaction — your happiness is our top priority",
        ],
      },
      {
        title: "Where we work",
        body: "We serve Halifax Regional Municipality end to end — Halifax, Dartmouth, Bedford, Sackville, Cole Harbour, Eastern Passage, Clayton Park, and Spryfield. If you're in HRM, we cover you.",
      },
    ],
    seo: buildSeo({
      slug: "about",
      path: "/about",
      title: "About RG Divine Cleaning Services | Halifax, Nova Scotia",
      description:
        "RG Divine Cleaning Services is a Halifax-based, eco-friendly cleaning company serving all of HRM — residential, commercial, move-in/out, deep cleaning, and more.",
      keywords: ["rg divine cleaning", "about rg divine", "halifax cleaning company", "nova scotia cleaning"],
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000&auto=format&fit=crop",
      priority: 0.9,
    }),
  },
  {
    slug: "services",
    eyebrow: "Services",
    title: "Cleaning services designed around your space.",
    summary:
      "From recurring residential cleans to one-time post-construction sweeps, every RG Divine service is built on the same standard — trained crew, eco-friendly products, and detail you can see.",
    heroImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
    body: [
      "Every space has a different standard, and every client has a different schedule. We've built our service catalogue around the seven things HRM homes and businesses actually book — and made each one flexible enough to fit your routine.",
      "Click any service below for a full breakdown of what's included, who it's for, and the cities we deliver it in. Or skip the reading and request a quote — we'll send you a tailored plan within one business day.",
    ],
    sections: [],
    seo: buildSeo({
      slug: "services",
      path: "/services",
      title: "Cleaning Services in HRM | RG Divine Cleaning",
      description:
        "Residential, commercial, move-in/out, deep cleaning, post-construction, window cleaning, and floor strip-and-wax across HRM by RG Divine Cleaning Services.",
      keywords: ["cleaning services halifax", "hrm cleaning company", "halifax cleaners", "nova scotia cleaning services"],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
      priority: 0.95,
    }),
  },
  {
    slug: "service-areas",
    eyebrow: "Service areas",
    title: "Cleaning across Halifax Regional Municipality.",
    summary:
      "We serve all of HRM — from downtown Halifax condos to Sackville family homes and Burnside offices. Pick your area to see the services we deliver there.",
    heroImage:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2000&auto=format&fit=crop",
    body: [
      "HRM is a single municipality but a dozen different markets. A condo clean in downtown Halifax is a different job from a new-build move-in in West Bedford or a recurring residential in Lower Sackville. Each of our service-area pages covers the streets, property types, and services we handle in that pocket.",
    ],
    sections: [],
    seo: buildSeo({
      slug: "service-areas",
      path: "/service-areas",
      title: "Service Areas — HRM | RG Divine Cleaning Services",
      description:
        "Cleaning services across Halifax, Dartmouth, Bedford, Sackville, Cole Harbour, Eastern Passage, Clayton Park, and Spryfield.",
      keywords: ["halifax cleaning areas", "hrm cleaning service area", "dartmouth cleaners", "bedford cleaners"],
      image:
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2000&auto=format&fit=crop",
      priority: 0.9,
    }),
  },
  {
    slug: "testimonials",
    eyebrow: "Testimonials",
    title: "What clients say after we've been through.",
    summary:
      "Residential, commercial, and one-off cleans — feedback from clients across HRM.",
    heroImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
    body: [
      "Most of our work comes from repeat clients and word of mouth. The notes below are from clients who agreed to share their experience after we'd been through their home or office.",
    ],
    sections: [],
    seo: buildSeo({
      slug: "testimonials",
      path: "/testimonials",
      title: "Client Testimonials | RG Divine Cleaning Services",
      description:
        "Residential and commercial cleaning client testimonials from across Halifax Regional Municipality.",
      keywords: ["rg divine reviews", "halifax cleaning reviews", "hrm cleaner testimonials"],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
      priority: 0.75,
    }),
  },
  {
    slug: "contact",
    eyebrow: "Contact",
    title: "Get in touch — and get a sparkling space.",
    summary:
      "Call, email, or send us a quote request. We reply within one business day with a tailored plan and firm pricing.",
    heroImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
    body: [
      "The fastest way to start is a phone call. If you'd rather write, the quote form sends straight to our inbox — we read every one personally and reply within one business day.",
    ],
    sections: [],
    seo: buildSeo({
      slug: "contact",
      path: "/contact",
      title: "Contact RG Divine Cleaning Services | Halifax, NS",
      description:
        "Call, email, or request a quote from RG Divine Cleaning Services — serving all of HRM.",
      keywords: ["contact rg divine", "halifax cleaning quote", "hrm cleaning contact"],
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
      priority: 0.8,
    }),
  },
  {
    slug: "quote",
    eyebrow: "Quote",
    title: "Request a free quote.",
    summary:
      "Tell us about your space and the service you need — we'll send back a tailored plan and firm pricing within one business day.",
    heroImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
    body: [
      "Quotes are free, fast, and pressure-free. The form below collects what we need to scope your job — service type, property type, square footage, and frequency — so we can come back with an accurate number, not a flat-rate guess.",
    ],
    sections: [],
    seo: buildSeo({
      slug: "quote",
      path: "/quote",
      title: "Request a Free Cleaning Quote | RG Divine Cleaning",
      description:
        "Request a free cleaning quote from RG Divine — residential, commercial, move-in/out, deep cleaning, post-construction, and more across HRM.",
      keywords: ["cleaning quote halifax", "free cleaning quote", "hrm cleaning quote", "rg divine quote"],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
      priority: 0.95,
    }),
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "move-out-cleaning-checklist-halifax-renters",
    path: "/blog/move-out-cleaning-checklist-halifax-renters",
    title: "Move-out cleaning checklist for Halifax renters",
    excerpt:
      "A landlord-grade move-out checklist for HRM renters — what gets inspected, what gets deducted, and how to hand back keys with a full deposit.",
    author: "RG Divine team",
    publishedAt: "2026-06-01",
    readingMinutes: 6,
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    tags: ["move-out", "renters", "halifax"],
    body: [
      "Halifax landlords inspect tighter than most renters expect. The standard isn't 'tidy' — it's 'as you found it,' which usually means deeper than your weekend chore list.",
      "Below is the checklist we work to on every move-out clean. Use it as a self-audit before your final walk-through — or book us to handle the whole thing.",
      "Kitchen: inside oven, inside fridge, inside microwave, inside dishwasher, inside all cabinets and drawers, exterior of all appliances, sink and faucet, counters, backsplash, floor.",
      "Bathrooms: tub, shower, tile grout scrub, toilet (inside and out), sink, mirror, exhaust fan cover, floor, behind the toilet, inside cabinets.",
      "Common areas: baseboards top and bottom, door frames, light switches, outlet covers, window interiors, tracks, sills, blinds (slat by slat), inside closets, floors vacuumed and mopped.",
      "Bedrooms: same as common areas, plus closet shelves and rods. If you used wall anchors, patch and touch up before you leave — that's deposit territory.",
      "If you're tight on time, the highest-deduction items are oven, fridge, baseboards, and tile grout. Hit those first.",
    ],
    seo: buildSeo({
      slug: "move-out-cleaning-checklist-halifax-renters",
      path: "/blog/move-out-cleaning-checklist-halifax-renters",
      title: "Move-Out Cleaning Checklist for Halifax Renters | RG Divine",
      description:
        "Landlord-grade move-out cleaning checklist for Halifax Regional Municipality renters. Protect your damage deposit with our room-by-room guide.",
      keywords: ["move out cleaning halifax", "halifax renter checklist", "damage deposit halifax", "move out hrm"],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
      priority: 0.6,
    }),
  },
  {
    slug: "why-eco-friendly-products-matter",
    path: "/blog/why-eco-friendly-products-matter",
    title: "Why eco-friendly cleaning products matter for kids and pets",
    excerpt:
      "Conventional cleaning products leave chemical residues you can taste in the air. Here's what we use instead and why it matters for HRM families.",
    author: "RG Divine team",
    publishedAt: "2026-05-15",
    readingMinutes: 5,
    heroImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
    tags: ["eco-friendly", "health", "family"],
    body: [
      "If you've ever walked into a freshly cleaned room and felt your throat tighten, that's not your imagination — it's the off-gassing from conventional cleaning chemicals.",
      "Most commercial-grade products are built for short-term sparkle: harsh surfactants, ammonia, chlorine. They cut grease fast, but they also leave residues that linger on surfaces kids touch and pets walk across.",
      "Eco-friendly alternatives have caught up. Plant-based surfactants, citrus-based degreasers, hydrogen peroxide for disinfection — modern formulas clean as effectively without the residue.",
      "That's what we use on every visit. Same shine, no chemical sting, safe for the surfaces your family actually lives on.",
    ],
    seo: buildSeo({
      slug: "why-eco-friendly-products-matter",
      path: "/blog/why-eco-friendly-products-matter",
      title: "Why Eco-Friendly Cleaning Products Matter | RG Divine",
      description:
        "Conventional cleaning products leave chemical residues. Here's why we use eco-friendly alternatives — and why it matters for HRM families.",
      keywords: ["eco friendly cleaning", "non toxic cleaning halifax", "family safe cleaners", "green cleaning hrm"],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
      priority: 0.6,
    }),
  },
  {
    slug: "how-often-office-deep-cleaned",
    path: "/blog/how-often-office-deep-cleaned",
    title: "How often should an office be deep cleaned?",
    excerpt:
      "Regular cleaning keeps an office presentable. Deep cleaning keeps it healthy. Here's the cadence we recommend for HRM businesses.",
    author: "RG Divine team",
    publishedAt: "2026-05-01",
    readingMinutes: 5,
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    tags: ["commercial", "deep-cleaning", "office"],
    body: [
      "Most HRM offices run on a regular weekly or bi-weekly clean — vacuums, surface wipe-downs, trash, washrooms. That keeps the space presentable, but it doesn't address the layer underneath: vents, baseboards, behind furniture, grout, light fixtures.",
      "We recommend quarterly deep cleans for most professional offices, monthly for high-traffic spaces (clinics, fitness studios, customer-facing retail), and semi-annual for low-occupancy or remote-first companies.",
      "A deep clean is usually 2–3× the duration of a regular visit and resets the baseline — which makes the recurring cleans more effective for the next 12 weeks.",
      "Talk to us about a maintenance schedule that bundles regular and deep service into a single plan — usually cheaper than booking each separately.",
    ],
    seo: buildSeo({
      slug: "how-often-office-deep-cleaned",
      path: "/blog/how-often-office-deep-cleaned",
      title: "How Often Should an Office Be Deep Cleaned? | RG Divine",
      description:
        "Deep cleaning cadence guide for HRM offices — from monthly for clinics to quarterly for professional services.",
      keywords: ["office deep cleaning halifax", "commercial deep cleaning hrm", "office cleaning schedule"],
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
      priority: 0.6,
    }),
  },
  {
    slug: "post-construction-cleanup-what-contractors-miss",
    path: "/blog/post-construction-cleanup-what-contractors-miss",
    title: "Post-construction cleanup: what most contractors miss",
    excerpt:
      "Drywall dust travels further than you'd think. Here's the post-construction punch list we work to on every site.",
    author: "RG Divine team",
    publishedAt: "2026-04-20",
    readingMinutes: 6,
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    tags: ["post-construction", "renovation", "commercial"],
    body: [
      "A contractor's job ends at the punch list. Ours starts where theirs leaves off — and the gap is usually wider than the client expects.",
      "Drywall dust is the headline problem. It coats every horizontal surface, settles into HVAC vents, sticks to glass, and hides in track-style window frames where a vacuum won't reach.",
      "The other forgotten items: paint splatter on baseboards and floors, adhesive residue from protective films, sanding dust inside cabinets and drawers, and debris that's slipped behind appliances during install.",
      "Our post-construction punch list covers every one of those — handed back as a walk-through-ready space for staging, photos, or move-in. We coordinate directly with GCs and PMs so the transition from build to handover doesn't bottleneck on the cleaning.",
    ],
    seo: buildSeo({
      slug: "post-construction-cleanup-what-contractors-miss",
      path: "/blog/post-construction-cleanup-what-contractors-miss",
      title: "Post-Construction Cleanup: What Contractors Miss | RG Divine",
      description:
        "The post-construction cleaning punch list HRM contractors rely on RG Divine for — drywall dust, paint splatter, debris, and final handover.",
      keywords: ["post construction cleaning halifax", "construction cleanup hrm", "renovation cleaning halifax"],
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
      priority: 0.6,
    }),
  },
];

export const homePageSeo: SeoPage = buildSeo({
  slug: "home",
  path: "/",
  title: "RG Divine Cleaning Services | Halifax, Nova Scotia",
  description:
    "Reliable, eco-friendly cleaning across Halifax Regional Municipality — residential, commercial, move-in/out, deep cleaning, post-construction, window cleaning, and more.",
  keywords: [
    "rg divine cleaning",
    "halifax cleaning services",
    "hrm cleaning company",
    "dartmouth cleaners",
    "bedford cleaning",
    "nova scotia cleaning company",
    "commercial cleaning halifax",
    "residential cleaning halifax",
  ],
  image:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000&auto=format&fit=crop",
  priority: 1,
});

function buildServiceIntroSeo(service: CleaningService): SeoPage {
  return buildSeo({
    slug: service.slug,
    path: `/${service.slug}`,
    title: `${service.label} in HRM | ${company.name}`,
    description: service.summary,
    keywords: [service.keyword, `${service.keyword} halifax`, `${service.keyword} hrm`, `${service.keyword} nova scotia`],
    image: service.image,
    priority: 0.85,
  });
}

export const serviceIntroSeo: Record<string, SeoPage> = Object.fromEntries(
  services.map((service) => [service.slug, buildServiceIntroSeo(service)]),
);

export const pageSeo: SeoPage[] = [
  homePageSeo,
  ...contentPages.map((page) => page.seo),
  ...services.map((service) => serviceIntroSeo[service.slug]),
  ...programmaticPages.map((page) => page.seo),
  ...areaGuides.map((guide) => guide.seo),
  ...blogPosts.map((post) => post.seo),
  {
    slug: "blog",
    path: "/blog",
    title: `Cleaning Tips & Guides | ${company.name}`,
    description:
      "Practical cleaning guides for HRM homes and businesses — checklists, schedules, and notes from the RG Divine team.",
    keywords: ["cleaning tips halifax", "cleaning guide", "rg divine blog"],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
    priority: 0.7,
  },
];

export const publicRoutes: string[] = [
  "/",
  ...contentPages.map((page) => `/${page.slug}`),
  ...services.map((service) => `/${service.slug}`),
  ...programmaticPages.map((page) => page.path),
  ...areaGuides.map((guide) => guide.path),
  "/blog",
  ...blogPosts.map((post) => post.path),
];

export function getSeo(slug: string): SeoPage | undefined {
  if (slug === "" || slug === "/" || slug === "home") {
    return homePageSeo;
  }

  const programmatic = programmaticPages.find((page) => page.slug === slug);
  if (programmatic) return programmatic.seo;

  const content = contentPages.find((page) => page.slug === slug);
  if (content) return content.seo;

  const serviceIntro = services.find((service) => service.slug === slug);
  if (serviceIntro) return serviceIntroSeo[serviceIntro.slug];

  return undefined;
}

export function getProgrammaticPage(slug: string): ProgrammaticPage | undefined {
  return programmaticPages.find((page) => page.slug === slug);
}

export function getContentPage(slug: string): ContentPage | undefined {
  return contentPages.find((page) => page.slug === slug);
}

export function getServiceBySlug(slug: string): CleaningService | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getAreaGuide(slug: string): AreaGuide | undefined {
  return areaGuides.find((guide) => guide.slug === slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
