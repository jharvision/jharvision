import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  GraduationCap,
  Rocket,
  Users,
  type LucideIcon
} from "lucide-react";

export type EcosystemKind = "colleges" | "startups" | "jobs" | "events" | "builders";

export type EcosystemItem = {
  slug: string;
  title: string;
  kind: EcosystemKind;
  city: string;
  tag: string;
  metric: string;
  summary: string;
  details: string[];
  highlights: string[];
  sourceLabel: string;
  sourceUrl: string;
  website?: string;
};

export const ecosystemMeta: Record<
  EcosystemKind,
  {
    title: string;
    eyebrow: string;
    description: string;
    href: string;
    icon: LucideIcon;
  }
> = {
  colleges: {
    title: "Colleges & Universities",
    eyebrow: "Academic Infrastructure",
    description:
      "Research-backed directory of institutions shaping Jharkhand's technical, management, and innovation talent pipeline.",
    href: "/colleges",
    icon: GraduationCap
  },
  startups: {
    title: "Startups & Innovation",
    eyebrow: "Company Graph",
    description:
      "A curated map of software companies, startup support systems, and innovation-led ventures operating from Jharkhand.",
    href: "/startups",
    icon: Rocket
  },
  jobs: {
    title: "Jobs & Opportunities",
    eyebrow: "Opportunity Layer",
    description:
      "Talent channels, hiring surfaces, and ecosystem opportunities connected to Jharkhand's technology market.",
    href: "/jobs",
    icon: BriefcaseBusiness
  },
  events: {
    title: "Events & Hackathons",
    eyebrow: "Ecosystem Calendar",
    description:
      "Startup conclaves, hackathons, technical festivals, and community moments that create visibility for builders.",
    href: "/events",
    icon: CalendarDays
  },
  builders: {
    title: "Builders & Talent",
    eyebrow: "People Network",
    description:
      "Contributor and builder profiles that represent the practical talent layer behind JharVision's public ecosystem.",
    href: "/builders",
    icon: Users
  }
};

export const ecosystemItems: EcosystemItem[] = [
  {
    slug: "iit-ism-dhanbad",
    title: "IIT (ISM) Dhanbad",
    kind: "colleges",
    city: "Dhanbad",
    tag: "Institute of National Importance",
    metric: "Established 1926",
    summary:
      "One of India's oldest technical institutions, now an IIT, with deep roots in mining, energy, engineering, research, and technology education.",
    details: [
      "IIT (ISM) Dhanbad is a nationally significant anchor for Jharkhand's research and technical talent pipeline.",
      "Its engineering, earth science, energy, management, and computing strengths make it a natural source of founders, researchers, and deep-tech builders.",
      "The institute also connects to incubation activity through the CIL Innovation & Incubation Centre."
    ],
    highlights: ["Research depth", "Deep-tech talent", "Incubation access", "National brand"],
    sourceLabel: "Official website",
    sourceUrl: "https://www.iitism.ac.in/",
    website: "https://www.iitism.ac.in/"
  },
  {
    slug: "nit-jamshedpur",
    title: "NIT Jamshedpur",
    kind: "colleges",
    city: "Jamshedpur",
    tag: "Institute of National Importance",
    metric: "Established 1960",
    summary:
      "A major engineering institution in Jharkhand's industrial belt, originally established as Regional Institute of Technology.",
    details: [
      "NIT Jamshedpur was established in 1960 and later received Institute of National Importance status under the NIT Act.",
      "Its location in the Jamshedpur industrial belt gives it strong relevance for manufacturing, software, core engineering, and applied innovation.",
      "The campus community contributes to technical festivals, engineering talent, and industry-facing projects."
    ],
    highlights: ["Engineering talent", "Industrial proximity", "Technical festivals", "Placement ecosystem"],
    sourceLabel: "NIT Jamshedpur About",
    sourceUrl: "https://www.nitjsr.ac.in/Institute/About_NITJSR",
    website: "https://www.nitjsr.ac.in/"
  },
  {
    slug: "bit-mesra",
    title: "BIT Mesra",
    kind: "colleges",
    city: "Ranchi",
    tag: "Technical University",
    metric: "Established 1955",
    summary:
      "A long-running technical institution near Ranchi with a significant role in Jharkhand's engineering and startup talent base.",
    details: [
      "BIT Mesra has been associated with technical education in Ranchi for decades and is one of the region's most recognized institutions.",
      "Its alumni, student clubs, and professional networks are relevant to software, electronics, architecture, design, and entrepreneurship.",
      "The campus acts as an important source of technical talent for Ranchi and wider eastern India."
    ],
    highlights: ["Ranchi anchor", "Engineering programs", "Alumni network", "Student innovation"],
    sourceLabel: "BIT Mesra official",
    sourceUrl: "https://bitmesra.ac.in/",
    website: "https://bitmesra.ac.in/"
  },
  {
    slug: "bit-sindri",
    title: "BIT Sindri",
    kind: "colleges",
    city: "Sindri",
    tag: "State Engineering College",
    metric: "400-acre campus",
    summary:
      "A historic engineering college near the Damodar river with AICTE-approved programs and a strong state engineering identity.",
    details: [
      "BIT Sindri has a large technical campus and a long association with engineering education in Jharkhand.",
      "Its engineering branches and alumni base make it an important part of the state's technical workforce.",
      "The institute remains relevant for local hiring, technical training, and student-led project ecosystems."
    ],
    highlights: ["State talent base", "Engineering focus", "Large campus", "Alumni network"],
    sourceLabel: "BIT Sindri About",
    sourceUrl: "https://www.bitsindri.ac.in/old/index.php/institute/about-us",
    website: "https://www.bitsindri.ac.in/"
  },
  {
    slug: "jut-ranchi-ekjut-tbi",
    title: "Jharkhand University of Technology & EKJUT TBI",
    kind: "colleges",
    city: "Ranchi",
    tag: "University + Incubator",
    metric: "Startup incubation",
    summary:
      "JUT hosts EKJUT Technology Business Incubator, designed to connect stakeholders and support startup creation in Jharkhand.",
    details: [
      "EKJUT TBI is positioned as a platform to bring stakeholders of Jharkhand's startup ecosystem together.",
      "The incubator supports startups through incubation applications, mentoring, and ecosystem coordination.",
      "This makes JUT relevant both as an academic institution and as a startup ecosystem node."
    ],
    highlights: ["Incubation", "Startup support", "University network", "Ranchi ecosystem"],
    sourceLabel: "JUT EKJUT TBI",
    sourceUrl: "https://jutranchi.ac.in/?page_id=4816",
    website: "https://jutranchi.ac.in/"
  },
  {
    slug: "ekjut-technology-business-incubator",
    title: "EKJUT Technology Business Incubator",
    kind: "startups",
    city: "Ranchi",
    tag: "Incubator",
    metric: "Accepting startups",
    summary:
      "A Jharkhand University of Technology incubator built to create a conducive entrepreneurial ecosystem in the state.",
    details: [
      "EKJUT TBI aims to support startups, create opportunities, and strengthen self-employment and entrepreneurship in Jharkhand.",
      "It is especially relevant for early-stage founders looking for incubation and ecosystem access.",
      "The incubator gives JharVision a real institutional startup support node to map."
    ],
    highlights: ["Incubation", "Mentoring", "Startup applications", "University-backed"],
    sourceLabel: "JUT EKJUT TBI",
    sourceUrl: "https://jutranchi.ac.in/?page_id=4816",
    website: "https://jutranchi.ac.in/?page_id=4816"
  },
  {
    slug: "cil-innovation-incubation-centre",
    title: "CIL Innovation & Incubation Centre, IIT (ISM)",
    kind: "startups",
    city: "Dhanbad",
    tag: "Incubation Centre",
    metric: "IIT (ISM) + CIL",
    summary:
      "An incubation centre established through an MoA between IIT (ISM) Dhanbad and Coal India Limited.",
    details: [
      "The centre connects IIT (ISM)'s research environment with innovation and incubation support.",
      "It is relevant for energy, mining, sustainability, engineering, and applied technology ventures.",
      "For Jharkhand's ecosystem, it represents a deep-tech incubation node rooted in Dhanbad."
    ],
    highlights: ["Deep-tech", "IIT ecosystem", "Energy innovation", "Incubation"],
    sourceLabel: "CII Centre About",
    sourceUrl: "https://ciicentre.iitism.ac.in/about.php",
    website: "https://ciicentre.iitism.ac.in/"
  },
  {
    slug: "trinetra-services",
    title: "Trinetra Services",
    kind: "startups",
    city: "Ranchi",
    tag: "Enterprise Software",
    metric: "Ranchi-based",
    summary:
      "A Ranchi technology company delivering enterprise-grade software and IT systems for public sector and institutional use cases.",
    details: [
      "Trinetra Services describes its work around mission-critical software systems for government bodies, hospitals, and large institutions.",
      "The company is relevant to Jharkhand's software services and enterprise implementation layer.",
      "It gives the ecosystem a local example of applied software delivery."
    ],
    highlights: ["Enterprise systems", "Public sector", "Institutional software", "Ranchi"],
    sourceLabel: "Company website",
    sourceUrl: "https://trinetra.co/",
    website: "https://trinetra.co/"
  },
  {
    slug: "codestam-technologies",
    title: "Codestam Technologies",
    kind: "startups",
    city: "Ranchi",
    tag: "Software Development",
    metric: "Web + app",
    summary:
      "A Ranchi-based software development company working across custom web, app, and software development services.",
    details: [
      "Codestam Technologies operates from Ranchi and presents services around web, app, and software development.",
      "The company is part of the local services ecosystem that creates practical project and employment pathways.",
      "It is useful for mapping Jharkhand's software vendor and startup-adjacent landscape."
    ],
    highlights: ["Custom software", "Web apps", "Ranchi", "Services"],
    sourceLabel: "Company website",
    sourceUrl: "https://codestam.com/",
    website: "https://codestam.com/"
  },
  {
    slug: "dryft-dynamics",
    title: "Dryft Dynamics",
    kind: "startups",
    city: "Ranchi",
    tag: "Software & Technology",
    metric: "Startup India signal",
    summary:
      "A Ranchi software and technology company with product and service positioning in the local digital business ecosystem.",
    details: [
      "Dryft Dynamics presents itself as a software and technology company based in Ranchi.",
      "Its public footprint includes local address information and startup ecosystem signaling.",
      "JharVision can track it as part of the emerging private technology company layer."
    ],
    highlights: ["Software", "Product services", "Ranchi", "Startup signal"],
    sourceLabel: "Company website",
    sourceUrl: "https://dryftdynamics.com/",
    website: "https://dryftdynamics.com/"
  },
  {
    slug: "software-developer-ranchi-track",
    title: "Software Developer Roles in Ranchi",
    kind: "jobs",
    city: "Ranchi",
    tag: "Talent Track",
    metric: "Live channels",
    summary:
      "A tracked opportunity path for developers watching Ranchi-based software companies and local IT service providers.",
    details: [
      "Rather than claiming fixed vacancies, this page tracks companies and channels where software roles may appear.",
      "Ranchi has multiple IT service companies, including local software development and enterprise technology firms.",
      "Candidates should verify current openings on the official company websites before applying."
    ],
    highlights: ["Software roles", "Ranchi companies", "Entry-level friendly", "Verify live openings"],
    sourceLabel: "Trinetra Services",
    sourceUrl: "https://trinetra.co/",
    website: "https://trinetra.co/"
  },
  {
    slug: "startup-incubation-applications",
    title: "Startup Incubation Applications",
    kind: "jobs",
    city: "Ranchi / Dhanbad",
    tag: "Founder Opportunity",
    metric: "Incubation",
    summary:
      "Opportunity track for founders looking at EKJUT TBI, IIT (ISM)-linked incubation, and Jharkhand startup support systems.",
    details: [
      "Founders can watch incubation channels such as EKJUT TBI and CIL Innovation & Incubation Centre.",
      "This opportunity is useful for early-stage founders needing mentoring, ecosystem access, and institutional visibility.",
      "Application status can change, so JharVision links to official sources for verification."
    ],
    highlights: ["Founder support", "Incubation", "Mentoring", "Official verification"],
    sourceLabel: "EKJUT TBI",
    sourceUrl: "https://jutranchi.ac.in/?page_id=4816",
    website: "https://jutranchi.ac.in/?page_id=4816"
  },
  {
    slug: "it-services-career-track",
    title: "IT Services Career Track",
    kind: "jobs",
    city: "Jharkhand",
    tag: "Career Channel",
    metric: "IT services",
    summary:
      "A career discovery page for candidates exploring web development, app development, ERP, SEO, and managed IT roles.",
    details: [
      "Several Jharkhand technology firms operate in website development, mobile apps, ERP, SEO, and IT services.",
      "This track helps candidates understand the service categories and companies to monitor.",
      "It is intentionally source-led so applicants can check current roles directly with companies."
    ],
    highlights: ["Web development", "ERP", "Digital services", "Local hiring channels"],
    sourceLabel: "Sand Technologies",
    sourceUrl: "https://sandtechnologies.in/",
    website: "https://sandtechnologies.in/"
  },
  {
    slug: "iim-ranchi-startup-conclave-2025",
    title: "IIM Ranchi Startup Conclave 2025",
    kind: "events",
    city: "Ranchi",
    tag: "Startup Event",
    metric: "2025",
    summary:
      "A startup conclave by IIM Ranchi with Startup Steroid and Middha Ventures focused on entrepreneurship and startup visibility.",
    details: [
      "The event concept highlights entrepreneurship for sustainability, society, and India's future.",
      "It brings early-stage startups into visibility with investment and ecosystem stakeholders.",
      "JharVision tracks it as a major startup-facing event in Ranchi."
    ],
    highlights: ["Startup visibility", "VC connection", "Entrepreneurship", "IIM Ranchi"],
    sourceLabel: "IIM Ranchi event page",
    sourceUrl: "https://iimranchi.ac.in/event/startup-conclave-2025/",
    website: "https://iimranchi.ac.in/event/startup-conclave-2025/"
  },
  {
    slug: "hack4sustain-iit-ism-2025",
    title: "HACK4SUSTAIN 2025",
    kind: "events",
    city: "Dhanbad",
    tag: "Hackathon",
    metric: "32 teams",
    summary:
      "A sustainability-focused hackathon hosted at IIT (ISM) Dhanbad with student participation across major regional institutions.",
    details: [
      "The hackathon involved teams from IIT (ISM) Dhanbad, BIT Sindri, BIT Mesra, and NIT Jamshedpur.",
      "It reflects a practical collaboration layer between Jharkhand's technical institutions.",
      "Events like this help convert academic talent into prototype and problem-solving momentum."
    ],
    highlights: ["Hackathon", "Sustainability", "Student teams", "Regional collaboration"],
    sourceLabel: "IIT (ISM) newsletter",
    sourceUrl: "https://www.iitism.ac.in/storage/newsletter-documents/newsletter1771415648.pdf",
    website: "https://www.iitism.ac.in/"
  },
  {
    slug: "concetto-iit-ism",
    title: "Concetto, IIT (ISM) Dhanbad",
    kind: "events",
    city: "Dhanbad",
    tag: "Techno-management Fest",
    metric: "Annual fest",
    summary:
      "IIT (ISM)'s techno-management festival and a recurring talent signal for technical teams, competitions, and student builders.",
    details: [
      "Concetto is a major student-led techno-management event associated with IIT (ISM) Dhanbad.",
      "Such festivals surface project teams, technical societies, and inter-college participation.",
      "JharVision tracks it as part of the state's student innovation calendar."
    ],
    highlights: ["Tech fest", "Student builders", "Competitions", "Dhanbad"],
    sourceLabel: "IIT (ISM)",
    sourceUrl: "https://www.iitism.ac.in/",
    website: "https://www.iitism.ac.in/"
  },
  {
    slug: "open-source-maintainers",
    title: "Open-source Maintainers",
    kind: "builders",
    city: "Jharkhand / Remote",
    tag: "Builder Profile",
    metric: "Community",
    summary:
      "Developers maintaining public repositories, documentation, data models, and civic technology experiments for the ecosystem.",
    details: [
      "Open-source maintainers make JharVision extensible by keeping public work visible and reusable.",
      "This profile represents contributors who can improve data quality, UI, documentation, and integrations.",
      "The detail page is designed as a category profile until individual verified builder profiles are added."
    ],
    highlights: ["Open source", "Documentation", "Data quality", "Community infrastructure"],
    sourceLabel: "JharVision GitHub",
    sourceUrl: "https://github.com/jharvision/jharvision",
    website: "https://github.com/jharvision/jharvision"
  },
  {
    slug: "campus-builders",
    title: "Campus Builders",
    kind: "builders",
    city: "Ranchi / Dhanbad / Jamshedpur",
    tag: "Student Talent",
    metric: "College network",
    summary:
      "Student developers, designers, and organizers emerging from institutions like IIT (ISM), BIT Mesra, NIT Jamshedpur, and BIT Sindri.",
    details: [
      "Campus builders are the strongest early signal of future founders and technology teams.",
      "They participate in hackathons, technical fests, student clubs, and early product experiments.",
      "JharVision maps this layer to help opportunities find talent faster."
    ],
    highlights: ["Student developers", "Hackathons", "College clubs", "Early founders"],
    sourceLabel: "HACK4SUSTAIN signal",
    sourceUrl: "https://www.iitism.ac.in/storage/newsletter-documents/newsletter1771415648.pdf",
    website: "https://www.iitism.ac.in/"
  },
  {
    slug: "startup-operators",
    title: "Startup Operators",
    kind: "builders",
    city: "Jharkhand",
    tag: "Operating Talent",
    metric: "Founder support",
    summary:
      "Operators, marketers, product people, and community builders helping Jharkhand startups move from idea to execution.",
    details: [
      "Startup operators help founders with product, growth, community, operations, and go-to-market work.",
      "This profile is a discovery layer for non-engineering builder talent.",
      "As verified profiles are added, this page can become a live operator directory."
    ],
    highlights: ["Product", "Growth", "Operations", "Community"],
    sourceLabel: "IIM Ranchi startup event",
    sourceUrl: "https://iimranchi.ac.in/event/startup-conclave-2025/",
    website: "https://iimranchi.ac.in/event/startup-conclave-2025/"
  }
];

export function getItemsByKind(kind: EcosystemKind) {
  return ecosystemItems.filter((item) => item.kind === kind);
}

export function getItemBySlug(kind: EcosystemKind, slug: string) {
  return ecosystemItems.find((item) => item.kind === kind && item.slug === slug);
}

export function getAllSlugsByKind(kind: EcosystemKind) {
  return getItemsByKind(kind).map((item) => ({ slug: item.slug }));
}
