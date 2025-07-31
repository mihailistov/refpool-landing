import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto container-tight px-4 py-3 flex flex-wrap items-center justify-between gap-4 md:gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.svg" alt="RefPool" width={140} height={32} priority />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-x-8 text-sm">
          <a href="#merchants" className="nav-link">For Brands</a>
          <a href="#affiliates" className="nav-link">For Affiliates</a>
          <a href="#how" className="nav-link">How it Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </nav>

        {/* Call-to-action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
          {/* <a href="#waitlist" className="btn btn-secondary w-full sm:w-auto text-center">Waitlist</a> */}
          <a href="#cta" className="btn btn-primary w-full sm:w-auto text-center">Get early access</a>
        </div>
      </div>
    </header>
  );
}
