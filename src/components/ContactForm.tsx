"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "./Icons";
import { services, site } from "@/lib/site";

// No backend yet: the form opens the visitor's mail app with the enquiry pre-filled.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Enquiry: ${f.get("service") || "General"} - ${f.get("name")}`;
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone")}`,
      `Service: ${f.get("service") || "General"}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          <span>Full Name *</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          <span>Email Address *</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Phone Number *</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+91 98XXXXXXXX" />
        </label>
        <label>
          <span>Service Required</span>
          <select name="service" defaultValue="">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>Message *</span>
        <textarea name="message" rows={5} required placeholder="Tell us about your requirement" />
      </label>
      <button type="submit" className="btn btn--primary">
        Send Message <ArrowUpRight width={14} height={14} />
      </button>
      {sent && (
        <p className="form-note" role="status">
          Your email app should open with the message ready to send. If it doesn&apos;t, write to us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
