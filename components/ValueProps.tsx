export default function ValueProps() {
  const items = [
    { title: "Wallet‑native", desc: "No passwords. Creators connect a wallet to receive payouts in USDC." },
    { title: "Credit card friendly", desc: "Brands can fund campaigns with Stripe, converted to USDC credits." },
    { title: "Fraud controls", desc: "HMAC‑signed events, device fingerprinting, and manual review tools." },
    { title: "APIs & webhooks", desc: "Embed tracking via JS or server‑to‑server postbacks to verify conversions." },
    { title: "Transparent payouts", desc: "Auditable payout logs and optional on‑chain escrow per campaign." },
    { title: "Global by default", desc: "Borderless payouts, instant access for international creators." }
  ];
  return (
    <section className="section bg-gray-50">
      <div className="mx-auto container-tight px-4">
        <h2 className="h2 mb-2">Why brands & creators love RefPool</h2>
        <p className="p mb-8">Modern rails, fewer hurdles, better trust.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="card">
              <div className="text-lg font-semibold mb-2">{it.title}</div>
              <p className="p">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
