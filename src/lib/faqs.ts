// Frequently asked questions per service, shown on each service page and sent to
// Google as FAQPage structured data. Answers are kept general; check with the client
// before adding figures such as fees or thresholds that change over time.
export type Faq = { q: string; a: string };

export const serviceFaqs: Record<string, Faq[]> = {
  "financial-accounting-and-reporting": [
    {
      q: "What reports will I receive?",
      a: "Usually monthly or quarterly management reports covering profit and loss, expenses and cash flow, plus any reports your bank or investors need. We agree the format and frequency with you at the start.",
    },
    {
      q: "Do I need to change my accounting software?",
      a: "Usually not. We can work with the software you already use, or help you set one up if you are starting fresh.",
    },
    {
      q: "Do you work with small businesses and startups?",
      a: "Yes. We work with individuals, startups and established businesses, and scale the service to the size of your operations.",
    },
  ],
  "financial-statements-preparation": [
    {
      q: "Which financial statements do you prepare?",
      a: "A complete set: the income statement (profit and loss account), the balance sheet and the cash flow statement.",
    },
    {
      q: "Why do I need properly prepared financial statements?",
      a: "Banks ask for them when you apply for loans, investors use them to judge performance, and they form the basis of your income tax return.",
    },
    {
      q: "What do you need from me?",
      a: "Your books of account or transaction records, bank statements, and details of assets, loans and outstanding dues. We share a checklist before we start.",
    },
  ],
  bookkeeping: [
    {
      q: "Do you provide bookkeeping for UAE businesses?",
      a: "Yes. We maintain books for businesses in both India and the UAE.",
    },
    {
      q: "How often will my books be updated?",
      a: "Daily, weekly or monthly, depending on how many transactions you have. Most small businesses choose monthly updates.",
    },
    {
      q: "How do I send you my documents?",
      a: "Share your invoices, receipts and bank statements by email, or drop them at our office in Eraviperoor, Thiruvalla.",
    },
  ],
  "backlog-accounting": [
    {
      q: "How far back can you update my accounts?",
      a: "As far back as your records go. We work period by period until your books are fully up to date.",
    },
    {
      q: "What if some documents are missing?",
      a: "We work from your bank statements and whatever records are available, and flag any gaps for you to confirm.",
    },
    {
      q: "How long does backlog accounting take?",
      a: "It depends on how many periods and transactions are involved. We give you a timeline after reviewing your records.",
    },
  ],
  "bank-reconciliation": [
    {
      q: "What is bank reconciliation?",
      a: "Matching every entry in your books with your bank statement, so that differences such as missing, duplicate or incorrect entries are found and corrected.",
    },
    {
      q: "How often should accounts be reconciled?",
      a: "Monthly is right for most businesses. Businesses with a high volume of transactions benefit from weekly reconciliation.",
    },
    {
      q: "Can you reconcile more than one bank account?",
      a: "Yes. We reconcile all of your business bank accounts.",
    },
  ],
  "income-tax-return-filing": [
    {
      q: "Who can you file income tax returns for?",
      a: "All types of assessees: salaried individuals, professionals and business owners, HUFs, partnership firms, LLPs, companies and trusts.",
    },
    {
      q: "What documents do I need to file my return?",
      a: "Typically your PAN, Aadhaar, Form 16 or income details, bank statements, and proofs of investments and deductions. Businesses also need their accounts. We send a checklist for your case.",
    },
    {
      q: "What happens if I miss the due date?",
      a: "A belated return can usually still be filed, but late fees and interest may apply. Filing on time avoids these extra costs.",
    },
  ],
  "gst-registration": [
    {
      q: "Who needs to register for GST?",
      a: "Businesses whose turnover crosses the GST threshold, and some businesses regardless of turnover, such as those making inter-state taxable supplies of goods or selling through e-commerce operators. We check whether registration applies to you.",
    },
    {
      q: "What documents are needed for GST registration?",
      a: "Usually PAN, Aadhaar, a photograph, proof of business address and bank account details, plus constitution documents for firms and companies.",
    },
    {
      q: "How long does GST registration take?",
      a: "Once a complete application is filed, approval generally follows within a few working days, unless the department raises a query or asks for verification.",
    },
  ],
  "gst-return-filing": [
    {
      q: "Which GST returns does a regular dealer file?",
      a: "GSTR-1 for outward supplies and the GSTR-3B summary return, monthly or quarterly depending on the scheme you have opted for.",
    },
    {
      q: "What does a composition dealer file?",
      a: "The CMP-08 statement every quarter and the annual return in GSTR-4.",
    },
    {
      q: "Do I need to file if I had no sales?",
      a: "Yes. A nil return still has to be filed for the period. We file it for you so late fees don't build up.",
    },
  ],
  "gstn-number-verification": [
    {
      q: "Why should I verify a supplier's GST number?",
      a: "Your input tax credit depends on your supplier being validly registered. Verifying the GSTIN before you trade reduces the risk of losing that credit.",
    },
    {
      q: "What do you check during GSTIN verification?",
      a: "Whether the GSTIN is valid and active, and whether the legal and trade names match the business you are dealing with.",
    },
    {
      q: "Can you verify a long list of GST numbers?",
      a: "Yes. We can verify complete supplier and customer lists in one go.",
    },
  ],
  "hsn-code-finder": [
    {
      q: "What is an HSN code?",
      a: "HSN (Harmonized System of Nomenclature) codes classify goods under GST. The code decides which GST rate applies and is shown on your invoices and returns.",
    },
    {
      q: "What happens if I use the wrong HSN code?",
      a: "You may charge the wrong GST rate, which can lead to short payment of tax, notices and penalties.",
    },
    {
      q: "Can you classify my full product list?",
      a: "Yes. We identify HSN codes for product lists of any size.",
    },
  ],
  "uae-corporate-tax-registration": [
    {
      q: "Who must register for UAE corporate tax?",
      a: "Businesses subject to UAE corporate tax, including free zone companies, must register with the Federal Tax Authority, even if no tax ends up being payable.",
    },
    {
      q: "What is needed for corporate tax registration?",
      a: "Typically your trade licence, identification of the owners or managers, and your company's contact and constitution details. We confirm the exact list for your entity.",
    },
    {
      q: "Is there a penalty for registering late?",
      a: "Yes. The FTA can impose a penalty for late registration, so it is important to register before your deadline.",
    },
  ],
  "uae-vat-registration": [
    {
      q: "When is VAT registration mandatory in the UAE?",
      a: "When your taxable supplies and imports exceed the mandatory registration threshold (currently AED 375,000) over the past 12 months, or are expected to in the next 30 days.",
    },
    {
      q: "Can I register for VAT voluntarily?",
      a: "Yes, if your supplies or expenses exceed the voluntary threshold (currently AED 187,500). Voluntary registration lets you recover VAT on your business purchases.",
    },
    {
      q: "What is a TRN?",
      a: "The Tax Registration Number issued by the FTA when your VAT registration is approved. It must appear on your tax invoices.",
    },
  ],
  "uae-annual-corporate-tax-filing": [
    {
      q: "When is the UAE corporate tax return due?",
      a: "Within nine months from the end of the relevant tax period.",
    },
    {
      q: "Do I need to file if no tax is payable?",
      a: "Generally, yes. Registered businesses must file a return for each tax period, even when no tax is due.",
    },
    {
      q: "What do you need from me?",
      a: "Your financial statements for the tax period and the supporting records. We take care of the computation and filing.",
    },
  ],
  "uae-quarterly-vat-filing": [
    {
      q: "When are UAE VAT returns due?",
      a: "Within 28 days from the end of each tax period.",
    },
    {
      q: "Does every business file VAT returns quarterly?",
      a: "Most businesses do, but the FTA can assign a different period, such as monthly. We file on whichever schedule applies to you.",
    },
    {
      q: "Can I recover VAT paid on purchases?",
      a: "Yes. Input VAT on eligible business purchases can be recovered in your return, subject to the rules. We review every claim before filing.",
    },
  ],
  "uae-change-of-name-objects-registered-office": [
    {
      q: "Can I change my UAE company's name?",
      a: "Yes, once the new name is approved by the relevant licensing authority.",
    },
    {
      q: "What does a change of objects mean?",
      a: "Adding, removing or changing the business activities listed on your trade licence.",
    },
    {
      q: "Do I need to update the FTA after these changes?",
      a: "If your company is registered for VAT or corporate tax, changes such as a new name or address generally need to be updated with the FTA too. We help with that as well.",
    },
  ],
};
