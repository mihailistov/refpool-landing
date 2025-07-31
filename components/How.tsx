export default function How() {
  const steps = [
    { title: "Instantly fund a campaign", desc: "Top up a budget via credit card or USDC. Set payout per conversion and end date. Watch your ROI grow in real-time." },
    { title: "Affiliates share links", desc: "Creators join, get a unique link, and promote on socials. Live tracking shows clicks, conversions, and earnings as they happen." },
    { title: "Automatic payouts", desc: "Approved conversions trigger instant payouts from the pool. Real-time analytics let you optimize campaigns on the fly." }
  ];

  return (
    <section id="how" className="section">
      <div className="mx-auto container-tight px-4">
        <h2 className="h2 mb-2 text-center">How it works</h2>
        <p className="p mb-8 text-center">Launch big. Track everything. Scale fast.</p>
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
