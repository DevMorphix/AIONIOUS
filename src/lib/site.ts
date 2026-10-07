export const site = {
  name: "AIONIOUS Management Solutions",
  shortName: "AIONIOUS",
  tagline: "Your Financial Growth, Our Expertise.",
  description:
    "Trusted tax, accounting, VAT, corporate tax and advisory services for entrepreneurs and businesses in Thiruvalla, Kerala, with UAE company setup support.",
  url: "https://www.aioniousms.com",
  founded: "June 2025",
  foundedISO: "2025-06",
  email: "aioniousmanagement@gmail.com",
  landline: "0469-2663213",
  phones: ["+91 9847273213", "+91 9747983213"],
  address: {
    building: "Palamoottil Building",
    street: "T K Road",
    locality: "Eraviperoor",
    city: "Thiruvalla",
    region: "Kerala",
    postalCode: "689542",
    country: "India",
    countryCode: "IN",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;

export const fullAddress = `${site.address.building}, ${site.address.street}, ${site.address.locality}, ${site.address.city}, ${site.address.region} - ${site.address.postalCode}, ${site.address.country}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  featured?: boolean;
  /** Overrides the default "<title> in Thiruvalla, Kerala" search title. */
  metaTitle?: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "corporate-tax-registration",
    title: "Corporate Tax Registration",
    short: "Ensure timely and compliant registration under corporate tax regulations.",
    description:
      "We handle end-to-end corporate tax registration so your business stays compliant from day one. Our specialists review your structure, prepare documentation and file registrations accurately and on time.",
    image: "/images/corporate-tax.jpg",
    featured: true,
    points: [
      "Eligibility and structure assessment",
      "Document preparation and verification",
      "Registration filing and follow-up",
      "Compliance calendar and reminders",
    ],
  },
  {
    slug: "free-vat-registration",
    title: "Free VAT Registration",
    short: "Get your business VAT-ready with our complimentary registration service.",
    description:
      "Get VAT-ready without the paperwork stress. We register your business for VAT free of charge and guide you on invoicing, record keeping and filing obligations.",
    image: "/images/vat-registration.jpg",
    featured: true,
    points: [
      "Complimentary VAT registration",
      "Threshold and liability review",
      "VAT-compliant invoicing guidance",
      "Ongoing filing support",
    ],
  },
  {
    slug: "transfer-pricing-analysis",
    title: "Transfer Pricing Analysis",
    short: "Stay compliant with international tax laws through detailed TP assessments.",
    description:
      "Our transfer pricing team prepares detailed assessments and documentation for related-party transactions, helping you meet international tax rules and reduce audit risk.",
    image: "/images/transfer-pricing.jpg",
    featured: true,
    points: [
      "Related-party transaction mapping",
      "Benchmarking and arm's length analysis",
      "Master file and local file documentation",
      "Audit defence support",
    ],
  },
  {
    slug: "accounting-services",
    title: "Accounting Services",
    short: "Accurate, timely, and professional accounting tailored to your business.",
    description:
      "From day-to-day bookkeeping to month-end closing, we deliver accurate and timely accounts tailored to your business so you can make confident decisions.",
    image: "/images/accounting.jpg",
    featured: true,
    points: [
      "Monthly and quarterly accounts",
      "Accounts payable and receivable",
      "Bank and ledger reconciliation",
      "Management reports",
    ],
  },
  {
    slug: "dedicated-account-manager",
    title: "Dedicated Account Manager",
    short: "Personalized support to handle your financial needs with care and focus.",
    description:
      "Every client gets a dedicated account manager: one point of contact who knows your business and coordinates all your tax and accounting needs.",
    image: "/images/account-manager.jpg",
    featured: true,
    points: [
      "Single point of contact",
      "Proactive deadline tracking",
      "Priority response on queries",
      "Regular business reviews",
    ],
  },
  {
    slug: "annual-corporate-tax-filing",
    title: "Annual Corporate Tax Filing",
    short: "Comprehensive year-end tax filing ensuring compliance and accuracy.",
    description:
      "We prepare and file your annual corporate tax return with complete supporting schedules, making sure every eligible deduction is claimed and every rule is met.",
    image: "/images/annual-tax-filing.jpg",
    featured: true,
    points: [
      "Year-end tax computation",
      "Return preparation and filing",
      "Deduction and relief optimisation",
      "Post-filing support",
    ],
  },
  {
    slug: "quarterly-vat-filing",
    title: "Quarterly VAT Filing",
    short: "Accurate and on-time quarterly VAT returns without the hassle.",
    description:
      "We reconcile your sales and purchases, compute your VAT liability and file quarterly returns accurately and on time to avoid penalties.",
    image: "/images/vat-registration.jpg",
    points: [
      "Sales and purchase reconciliation",
      "Input tax credit review",
      "Return filing before deadlines",
      "Penalty risk monitoring",
    ],
  },
  {
    slug: "backlog-accounting",
    title: "Backlog Accounting",
    short: "Bring your overdue books fully up to date, quickly and accurately.",
    description:
      "Behind on your books? Our backlog accounting team cleans up and completes historical records so you are ready for tax filing, audits and funding.",
    image: "/images/accounting.jpg",
    points: [
      "Historical transaction recording",
      "Clean-up of misclassified entries",
      "Reconciliations for past periods",
      "Audit-ready financials",
    ],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    short: "Organised, reliable records of every business transaction.",
    description:
      "Reliable bookkeeping keeps your finances organised. We record, categorise and reconcile every transaction so your numbers are always accurate.",
    image: "/images/bookkeeping.jpg",
    points: [
      "Daily and weekly transaction entry",
      "Expense categorisation",
      "Invoice and receipt management",
      "Cloud accounting setup",
    ],
  },
  {
    slug: "financial-reporting",
    title: "Financial Reporting",
    short: "Clear financial statements that support smarter decisions.",
    description:
      "We prepare clear, standards-compliant financial statements and management reports that give you and your stakeholders a true picture of performance.",
    image: "/images/transfer-pricing.jpg",
    points: [
      "Profit and loss, balance sheet, cash flow",
      "Management dashboards",
      "Budget vs actual analysis",
      "Investor and bank reporting",
    ],
  },
  {
    slug: "business-valuation-and-bank-account",
    title: "Business Valuation and Bank Account",
    short: "Professional valuations and support with business bank account opening.",
    description:
      "We provide professional business valuations for funding, sale or restructuring, and help you open business bank accounts with the right documentation.",
    image: "/images/corporate-tax.jpg",
    points: [
      "Valuation for funding and transactions",
      "Business plan and projections",
      "Bank account opening assistance",
      "KYC documentation support",
    ],
  },
  {
    slug: "company-setup-in-uae",
    title: "Company Setup in UAE",
    metaTitle: "UAE Company Setup from Kerala, India",
    short: "Local expertise to set up your business in the UAE with ease.",
    description:
      "India-based with a global outlook, we help entrepreneurs set up companies in the UAE, from choosing the right jurisdiction to licensing, visas and banking.",
    image: "/images/account-manager.jpg",
    points: [
      "Mainland and free zone guidance",
      "Trade licence applications",
      "Corporate tax and VAT onboarding",
      "Bank account and visa support",
    ],
  },
];

// Only the first testimonial comes from the approved design; the rest are placeholders.
// Replace them with real client reviews before going live.
export const testimonials = [
  {
    quote:
      "We approached AIONIOUS for corporate tax registration, and the entire process was smooth and stress-free. Their team explained every step clearly and handled all compliance requirements.",
    detail:
      "We now trust them for all our accounting and tax needs. Their professionalism and timely updates truly set them apart. Highly recommended for startups and growing businesses alike.",
    name: "Rajeev Thomas",
    role: "Co-Founder, Nexa Solutions",
  },
  {
    quote:
      "AIONIOUS took over our backlog accounting and had our books audit-ready in weeks. Our dedicated account manager is always one call away.",
    detail:
      "The clarity they bring to VAT and corporate tax has saved us time and money. It feels like having an in-house finance team.",
    name: "Anitha Mathew",
    role: "Director, Greenleaf Traders",
  },
  {
    quote:
      "Setting up our company in the UAE felt overwhelming until we met the AIONIOUS team. They handled licensing, banking and tax registration end to end.",
    detail:
      "Transparent pricing, quick responses and genuine expertise. We would recommend them to any entrepreneur expanding abroad.",
    name: "Suresh Nair",
    role: "Founder, Coastline Exports",
  },
  {
    quote:
      "Their bookkeeping and quarterly VAT filing service is accurate and always on time. We never worry about deadlines anymore.",
    detail:
      "Professional, friendly and reliable. AIONIOUS has become a trusted partner for our business.",
    name: "Priya Varghese",
    role: "Managing Partner, Brightpath Retail",
  },
];

export const stats = [
  { value: 25, suffix: " +", label: "Years of Experience" },
  { value: 95, suffix: " %", label: "Projects Complete" },
  { value: 56, suffix: " +", label: "Our Certified Specialists" },
  { value: 750, suffix: " +", label: "Happy Clients" },
];

export const whyChoose = [
  { title: "Expert Guidance", text: "Experienced financial professionals" },
  { title: "Dedicated Manager", text: "Personal support for every client" },
  { title: "Transparent & Reliable", text: "Ethical, accurate, and timely services" },
  { title: "Global Outlook, Local Expertise", text: "India Based with UAE business setup support" },
];
