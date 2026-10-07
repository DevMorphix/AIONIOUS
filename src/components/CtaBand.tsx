import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./Icons";

export default function CtaBand() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <Image src="/images/cta-bg.jpg" alt="Financial analytics dashboard used for business planning"fill sizes="100vw" className="cta__bg" />
      <div className="container cta__inner">
        <div>
          <h2 id="cta-title">Ready to Take the Next Step?</h2>
          <p>
            Whether you&apos;re starting your business or optimizing finances, AIONIOUS is here to support your
            goals with expert financial services.
          </p>
        </div>
        <div className="cta__actions">
          <Link href="/contact" className="btn btn--white">
            Get in Touch <ArrowUpRight width={14} height={14} />
          </Link>
          <Link href="/contact" className="btn btn--primary">
            Schedule a Free Consultation <ArrowUpRight width={14} height={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
