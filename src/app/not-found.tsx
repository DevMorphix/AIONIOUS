import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container center">
        <p className="not-found__code">404</p>
        <h1 className="h2">Page Not Found</h1>
        <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn btn--primary">
          Back to Home <ArrowUpRight width={14} height={14} />
        </Link>
      </div>
    </section>
  );
}
