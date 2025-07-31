export default function Hero() {
  return (
    <section className="section gradient">
      <div className="mx-auto container-tight px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="badge">MVP • Private Beta</span>
          <span className="badge">USDC Payouts</span>
          <span className="badge">Wallet‑Native</span>
        </div>
        <h1 className="h1 mb-6">Fund affiliate campaigns with a card.<br/>Pay creators instantly in USDC.</h1>
        <p className="p max-w-2xl mx-auto">
          RefPool is a crypto‑native affiliate marketplace. Brands deposit budget via credit card,
          creators earn per conversion, and payouts settle on‑chain — fast, global, and transparent.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#waitlist" className="btn btn-primary">Join the waitlist</a>
          <a href="#how" className="btn btn-secondary">See how it works</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">No wallet required to browse. Wallet needed to receive payouts.</p>
      </div>
    </section>
  );
}
