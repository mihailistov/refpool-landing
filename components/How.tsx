export default function How() {
  const steps = [
    {
      title: "Brands set smart incentive deals",
      desc: "Create performance-based campaigns with layered rewards: '$5 per sale + $100 bonus for 20 referrals.' Fund with credit card, set spending limits, and let our match-making engine find motivated creators."
    },
    {
      title: "Creators get matched & motivated",
      desc: "Browse campaigns or receive invite links. Join instantly with transparent terms. Earn more because you see exactly what you'll make — no hidden fees, no waiting for payments, no trust issues."
    },
    {
      title: "Results happen, payouts are instant",
      desc: "Every conversion gets tracked and verified. The moment a sale is approved, creators get paid in crypto. Brands only pay for real results. Everyone wins, friction disappears."
    }
  ];

  return (
    <section id="how" className="section">
      <div className="mx-auto container-tight px-4">
        <h2 className="h2 mb-2 text-center">How the match-making works</h2>
        <p className="p mb-8 text-center">Smart incentives meet motivated creators. No outreach, no negotiations, no payment delays.</p>
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
