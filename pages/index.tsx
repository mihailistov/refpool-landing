import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import How from "@/components/How";
import ValueProps from "@/components/ValueProps";
import Splits from "@/components/Splits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <How />
      <ValueProps />
      <Splits />
      <Pricing />
      <FAQ />
      <CTA />
      <Waitlist />
      <footer className="border-t border-gray-200">
        <div className="mx-auto container-tight px-4 py-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} RefPool. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a className="nav-link" href="#">Terms</a>
            <a className="nav-link" href="#">Privacy</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
