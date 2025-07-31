export default function How() {
  const steps = [
    { title: "Brands fund a campaign", desc: "Top up a USDC pool via credit card or USDC. Set payout per conversion and end date." },
    { title: "Affiliates share links", desc: "Creators join, get a unique link, and promote on socials. We track clicks & conversions." },
    { title: "Auto USDC payouts", desc: "Approved conversions trigger payouts from the pool. Instant, auditable, borderless." }
  ];

  return (
    <section id="how" className="section">
      <div className="mx-auto container-tight px-4">
        <h2 className="h2 mb-2">How it works</h2>
        <p className="p mb-8">Simple for brands. Frictionless for creators.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="card shadow-soft">
              <div className="text-sm text-gray-500 mb-2">Step {i+1}</div>
              <div className="text-lg font-semibold mb-2">{s.title}</div>
              <p className="p">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
