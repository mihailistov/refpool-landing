const faqs = [
  { q: "Do brands need crypto to start?", a: "No. Brands can fund campaigns with a credit card. We convert to USDC credits on the backend." },
  { q: "Which chains are supported?", a: "MVP targets Ethereum & L2s for USDC payouts. Solana and Lightning can be added later." },
  { q: "How are conversions verified?", a: "JS tracking + signed server‑to‑server postbacks. Optional manual review and dispute flow." },
  { q: "Is there KYC?", a: "Affiliates do not need KYC to receive USDC payouts. Brands may be verified depending on jurisdiction." },
  { q: "Can I self‑host?", a: "We plan a self‑hosted version for enterprises. Contact us if interested." }
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="mx-auto container-tight px-4">
        <h2 className="h2 mb-2">FAQ</h2>
        <p className="p mb-8">Answers to common questions.</p>
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
