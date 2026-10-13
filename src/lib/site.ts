export const site = {
  name: "AIONIOUS Management Solutions",
  shortName: "AIONIOUS",
  tagline: "Your Financial Growth, Our Expertise.",
  description:
    "Accounting, income tax, GST and UAE corporate tax & VAT services for individuals and businesses, from our office in Thiruvalla, Kerala.",
  // The live address of the site. Set NEXT_PUBLIC_SITE_URL in Vercel if the site runs on a
  // different domain, so canonical links, the sitemap and structured data match the real URL.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.aioniousms.com").replace(/\/+$/, ""),
  email: "aioniousmanagement@gmail.com",
  landline: "0469-2663213",
  phones: ["+91 98472 73213", "+91 97479 83213"],
  address: {
    building: "Palamoottil Building",
    street: "T K Road",
    locality: "Eraviperoor",
    city: "Thiruvalla",
    district: "Pathanamthitta",
    region: "Kerala",
    postalCode: "689542",
    country: "India",
    countryCode: "IN",
  },
  // Paste the full profile URLs here (e.g. "https://www.facebook.com/aionious").
  // Empty links are hidden on the site and left out of Google's structured data.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
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

export type ServiceCategoryKey = "accounting" | "tax-gst" | "uae";

export type Service = {
  slug: string;
  category: ServiceCategoryKey;
  title: string;
  /** One catchy line shown under the page heading. */
  tagline: string;
  /** Card text. */
  short: string;
  description: string;
  image: string;
  featured?: boolean;
  /** Overrides the default search title. */
  metaTitle?: string;
  points: string[];
};

// The official service list. Only these services are offered.
export const services: Service[] = [
  // ---------- Accounting Services ----------
  {
    slug: "financial-accounting-and-reporting",
    category: "accounting",
    title: "Financial Accounting & Reporting",
    tagline: "Numbers that tell your business story.",
    short: "Accurate accounts and clear reports that show exactly where your business stands.",
    description:
      "Good decisions start with reliable numbers. We maintain your accounts with precision and turn them into clear, timely reports, so you always know your profit, your cash position and where your business is heading.",
    image: "/images/transfer-pricing.jpg",
    featured: true,
    points: [
      "Day-to-day recording of all business transactions",
      "Monthly and quarterly management reports",
      "Profit, expense and cash-flow analysis",
      "Accounts kept ready for tax filing and audits",
    ],
  },
  {
    slug: "financial-statements-preparation",
    category: "accounting",
    title: "Preparation of Financial Statements",
    tagline: "Statements that speak with confidence.",
    short: "Professionally prepared income statements, balance sheets and cash flow statements.",
    description:
      "Banks, investors and tax authorities judge your business by its financial statements. We prepare a complete, accurate set – income statement, balance sheet and cash flow statement – presented clearly and delivered on time.",
    image: "/images/annual-tax-filing.jpg",
    metaTitle: "Financial Statements Preparation in Kerala",
    points: [
      "Income statement (profit & loss account)",
      "Balance sheet",
      "Cash flow statement",
      "Statements ready for banks, investors and tax filing",
    ],
  },
  {
    slug: "bookkeeping",
    category: "accounting",
    title: "Bookkeeping",
    tagline: "Every rupee and every dirham, in its place.",
    short: "Organised, up-to-date books for businesses in India and the UAE.",
    description:
      "Reliable bookkeeping is the foundation of a healthy business. We record, categorise and reconcile every transaction for clients in India and the UAE, so your books are always current, accurate and compliant.",
    image: "/images/bookkeeping.jpg",
    featured: true,
    points: [
      "Recording of sales, purchases, receipts and payments",
      "Ledger maintenance and expense categorisation",
      "Books maintained for businesses in India and the UAE",
      "Monthly summaries that are easy to understand",
    ],
  },
  {
    slug: "backlog-accounting",
    category: "accounting",
    title: "Backlog Accounting",
    tagline: "Behind on your books? We'll catch you up.",
    short: "Bring months or years of overdue accounts fully up to date, quickly and accurately.",
    description:
      "Overdue books mean stress, penalties and missed opportunities. Our backlog accounting team rebuilds your records period by period, corrects past errors and gets you ready for tax filing and financing.",
    image: "/images/accounting.jpg",
    points: [
      "Recording of past transactions from your documents",
      "Correction of misclassified and missing entries",
      "Reconciliation of past periods",
      "Books brought up to date and ready for filing",
    ],
  },
  {
    slug: "bank-reconciliation",
    category: "accounting",
    title: "Bank Reconciliation",
    tagline: "Your books and your bank, perfectly in sync.",
    short: "Regular reconciliations that catch errors, missing entries and duplicates early.",
    description:
      "When your books and bank statements don't match, small errors grow into big problems. We reconcile your accounts regularly, investigate every difference and keep your cash balances accurate.",
    image: "/images/vat-registration.jpg",
    points: [
      "Matching of bank statements with your books",
      "Identification of unrecorded and duplicate entries",
      "Follow-up on unexplained differences",
      "Monthly bank reconciliation statements",
    ],
  },

  // ---------- Tax & GST Services ----------
  {
    slug: "income-tax-return-filing",
    category: "tax-gst",
    title: "Income Tax Return Filing",
    tagline: "File right. File on time. Stay worry-free.",
    short: "Income tax returns filed accurately for every type of assessee.",
    description:
      "Salaried individual, business owner, firm or company – we prepare and file your income tax return correctly and before the due date, making sure every eligible deduction and exemption is considered.",
    image: "/images/corporate-tax.jpg",
    featured: true,
    points: [
      "Individuals, HUFs, firms, LLPs, companies and trusts",
      "Computation of total income and tax payable",
      "Review of eligible deductions and exemptions",
      "Filing before the due date, with acknowledgement",
    ],
  },
  {
    slug: "gst-registration",
    category: "tax-gst",
    title: "GST Registration",
    tagline: "Get your GSTIN without the paperwork headache.",
    short: "Smooth, hassle-free GST registration for new and growing businesses.",
    description:
      "Starting a business or crossing the GST threshold? We tell you whether you need to register, prepare your documents and complete your GST registration, so you can start invoicing with confidence.",
    image: "/images/about.jpg",
    featured: true,
    points: [
      "Assessment of your GST registration requirement",
      "Document checklist and preparation",
      "Online application and follow-up until approval",
      "Guidance on GST invoicing after registration",
    ],
  },
  {
    slug: "gst-return-filing",
    category: "tax-gst",
    title: "GST Return Filing",
    tagline: "Never miss a GST due date again.",
    short: "Timely GST returns for regular, composition, non-resident and e-commerce taxpayers.",
    description:
      "GST deadlines come around fast, and late filing means late fees and interest. We prepare and file your GST returns accurately for every type of registration, keeping your compliance record spotless.",
    image: "/images/annual-tax-filing.jpg",
    featured: true,
    points: [
      "Regular dealers – GSTR-1 and GSTR-3B",
      "Composition dealers – CMP-08 and GSTR-4",
      "Non-resident taxable persons – GSTR-5",
      "E-commerce operators – GSTR-8",
    ],
  },
  {
    slug: "gstn-number-verification",
    category: "tax-gst",
    title: "GSTN Number Verification",
    tagline: "Know exactly who you're doing business with.",
    short: "Verify any supplier's or customer's GST number before you trade.",
    description:
      "A wrong or inactive GST number can cost you your input tax credit. We verify the GSTINs of your suppliers and customers – checking that each is valid, active and matches the business name – before you do business.",
    image: "/images/account-manager.jpg",
    metaTitle: "GSTN Number Verification Services in Kerala",
    points: [
      "Validity and active-status check of GSTINs",
      "Matching of legal and trade names",
      "Verification of complete supplier lists",
      "Protection for your input tax credit claims",
    ],
  },
  {
    slug: "hsn-code-finder",
    category: "tax-gst",
    title: "HSN Code Finder",
    tagline: "The right code for every product.",
    short: "Find the correct HSN code and GST rate for your goods.",
    description:
      "The wrong HSN code can mean the wrong GST rate, notices and penalties. We identify the correct HSN codes for your products, so your invoices and GST returns are accurate from the very first bill.",
    image: "/images/bookkeeping.jpg",
    points: [
      "Correct HSN classification of your products",
      "Applicable GST rate for each code",
      "HSN details ready for invoices and returns",
      "Support for product lists of any size",
    ],
  },

  // ---------- Corporate Services – UAE ----------
  {
    slug: "uae-corporate-tax-registration",
    category: "uae",
    title: "UAE Corporate Tax Registration",
    tagline: "Register right with the UAE Federal Tax Authority.",
    short: "Timely, compliant corporate tax registration for UAE businesses.",
    description:
      "UAE businesses subject to corporate tax must register with the Federal Tax Authority. We handle the complete registration on the EmaraTax portal, so you receive your corporate tax registration without delays or penalties.",
    image: "/images/hero-3.jpg",
    featured: true,
    points: [
      "Registration requirement and deadline check",
      "Document preparation and review",
      "Application on the FTA EmaraTax portal",
      "Corporate tax registration number obtained",
    ],
  },
  {
    slug: "uae-vat-registration",
    category: "uae",
    title: "UAE VAT Registration",
    tagline: "VAT-ready, the right way.",
    short: "Smooth, compliant VAT registration with the UAE Federal Tax Authority.",
    description:
      "Crossed the VAT threshold or planning to register voluntarily? We assess your obligation, prepare your documents and complete your VAT registration with the FTA, so you can issue tax invoices with confidence.",
    image: "/images/vat-registration.jpg",
    points: [
      "Mandatory or voluntary registration assessment",
      "Document preparation and review",
      "Application on the FTA EmaraTax portal",
      "Tax Registration Number (TRN) and invoicing guidance",
    ],
  },
  {
    slug: "uae-annual-corporate-tax-filing",
    category: "uae",
    title: "UAE Annual Corporate Tax Filing",
    tagline: "Year-end tax, done right.",
    short: "Accurate annual corporate tax returns filed on time with the FTA.",
    description:
      "We prepare your annual corporate tax return from your financial statements, apply the relevant adjustments and file it with the Federal Tax Authority before the deadline, keeping your business fully compliant.",
    image: "/images/corporate-tax.jpg",
    points: [
      "Review of your financial statements",
      "Computation of taxable income",
      "Return preparation and filing with the FTA",
      "Support with FTA queries after filing",
    ],
  },
  {
    slug: "uae-quarterly-vat-filing",
    category: "uae",
    title: "UAE Quarterly VAT Filing",
    tagline: "Every quarter, on time, every time.",
    short: "Accurate VAT returns filed with the FTA, quarter after quarter.",
    description:
      "We reconcile your sales and purchases, calculate the VAT payable or refundable and file your return with the Federal Tax Authority on time, every quarter, so penalties are never a worry.",
    image: "/images/accounting.jpg",
    points: [
      "Sales and purchase reconciliation",
      "Review of input VAT claims",
      "VAT return preparation and filing",
      "Reminders before every due date",
    ],
  },
  {
    slug: "uae-change-of-name-objects-registered-office",
    category: "uae",
    title: "Change of Name, Objects & Registered Office",
    tagline: "Your business has grown. Let your records keep up.",
    short: "Update your UAE company's name, business activities or registered office address.",
    description:
      "Rebranding, adding new business activities or moving to a new office? We handle the paperwork to change your UAE company's name, objects or registered office with the relevant authorities, keeping your records accurate and compliant.",
    image: "/images/page-banner.jpg",
    metaTitle: "UAE Company Name, Objects & Office Change",
    points: [
      "Change of company or trade name",
      "Addition or change of business activities (objects)",
      "Change of registered office address",
      "Updating your records with the relevant authorities",
    ],
  },
];

export const serviceCategories: {
  key: ServiceCategoryKey;
  title: string;
  intro: string;
  /** Services shown in this group. Bookkeeping is offered in India and the UAE. */
  slugs: string[];
}[] = [
  {
    key: "accounting",
    title: "Accounting Services",
    intro:
      "Clean books, clear numbers. From daily entries to year-end statements, we keep your accounts accurate, up to date and ready for every decision.",
    slugs: services.filter((s) => s.category === "accounting").map((s) => s.slug),
  },
  {
    key: "tax-gst",
    title: "Tax & GST Services",
    intro:
      "Stay compliant, stay stress-free. We file your income tax and GST returns on time, every time, and help you avoid penalties you never needed to pay.",
    slugs: services.filter((s) => s.category === "tax-gst").map((s) => s.slug),
  },
  {
    key: "uae",
    title: "Corporate Services – UAE",
    intro:
      "Your compliance partner for the UAE. Corporate tax, VAT and company record changes, handled end to end with the Federal Tax Authority and the relevant authorities.",
    slugs: [...services.filter((s) => s.category === "uae").map((s) => s.slug), "bookkeeping"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

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
      "AIONIOUS took over our backlog accounting and had our books up to date in weeks. Our GST returns have been filed on time ever since.",
    detail: "Clear communication and genuine expertise. It feels like having an in-house accounts team.",
    name: "Anitha Mathew",
    role: "Director, Greenleaf Traders",
  },
  {
    quote:
      "They handled our UAE VAT registration and now file our quarterly VAT returns. Every deadline is met without us having to chase anyone.",
    detail: "Quick responses, transparent fees and real knowledge of UAE tax. Highly recommended.",
    name: "Suresh Nair",
    role: "Founder, Coastline Exports",
  },
  {
    quote:
      "Their bookkeeping and bank reconciliation service is accurate and always on time. We finally have numbers we can trust.",
    detail: "Professional, friendly and reliable. AIONIOUS has become a trusted partner for our business.",
    name: "Priya Varghese",
    role: "Managing Partner, Brightpath Retail",
  },
];

export const stats = [
  { value: 15, suffix: " +", label: "Years of Experience" },
  { value: 95, suffix: " %", label: "Projects Complete" },
  { value: 56, suffix: " +", label: "Our Certified Specialists" },
  { value: 750, suffix: " +", label: "Happy Clients" },
];

export const whyChoose = [
  { title: "Expert Guidance", text: "Experienced accounting and tax professionals" },
  { title: "Dedicated Manager", text: "Personal support for every client" },
  { title: "Transparent & Reliable", text: "Ethical, accurate, and timely services" },
  { title: "Global Outlook, Local Expertise", text: "India based, with UAE corporate tax & VAT services" },
];
