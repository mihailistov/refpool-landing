const faqs = [
  { q: "Do I need crypto to get started?", a: "No. Brands can fund campaigns with a credit card. Creators get paid in USDC but don't need any crypto knowledge." },
  { q: "How fast do creators get paid?", a: "Instantly. Once a conversion is approved, creators receive their payout in seconds, not weeks." },
  { q: "How do you prevent fake clicks?", a: "We track real user behavior and verify conversions. Suspicious activity gets flagged before you pay for it." },
  { q: "Do creators need to verify identity?", a: "No KYC required for creators to receive payouts. Brands may need verification depending on campaign size." },
  { q: "Can I run this on my own servers?", a: "We're building a self-hosted version for large enterprises. Contact us if you're interested." }
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="mx-auto container-tight px-4">
        <h2 className="h2 mb-2 text-center">FAQ</h2>
        <p className="p mb-8 text-center">Answers to common questions.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="card">
              <div className="text-lg font-semibold mb-2">{f.q}</div>
              <p className="p">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
