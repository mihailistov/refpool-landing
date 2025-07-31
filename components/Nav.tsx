import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto container-tight px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="RefPool" width={140} height={32} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#merchants" className="nav-link">For Brands</a>
          <a href="#affiliates" className="nav-link">For Affiliates</a>
          <a href="#how" className="nav-link">How it Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#waitlist" className="btn btn-secondary">Join waitlist</a>
          <a href="#cta" className="btn btn-primary">Get early access</a>
        </div>
      </div>
    </header>
  );
}
