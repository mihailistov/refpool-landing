export default function ValueProps() {
  const items = [
    { title: "Beats Meta & Google ads", desc: "Creators personally vouch for your product to their audience. Word-of-mouth marketing that actually converts at lower cost." },
    { title: "AI-generated incentives work", desc: "Dynamic reward structures adapt to performance and market conditions. Creators see exactly what they'll earn upfront. Clear, smart rewards = motivated promotion." },
    { title: "Instant crypto payouts", desc: "The moment a sale is verified, creators get paid in USDC. No 30-day delays, no payment disputes, no trust issues." },
    { title: "Remove all friction", desc: "No outreach, no negotiations, no tracking headaches. Set your deal, creators join, results happen automatically." },
    { title: "Only pay for results", desc: "Zero upfront costs. You only pay when creators drive real sales or signups. Performance-based means risk-free growth." },
    { title: "Scale without limits", desc: "Reach creators globally with one campaign. No international payment hassles, no currency conversions, no borders." }
  ];
  return (
    <section className="section bg-gray-50">
      <div className="mx-auto container-tight px-4">
        <h2 className="h2 mb-2 text-center">Why this beats traditional advertising</h2>
        <p className="p mb-8 text-center px-2 sm:px-0">More effective than paid ads. Cheaper than agencies. Faster than influencer outreach.</p>
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
