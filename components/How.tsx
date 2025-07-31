export default function How() {
  const steps = [
    { title: "Fund big campaigns effortlessly", desc: "Top up budgets infinitely via credit card or USDC. Set high payouts per conversion and watch creators flock to promote your brand." },
    { title: "Creators earn serious money", desc: "Join campaigns with real payouts, get your unique link, and watch your earnings multiply with every conversion you drive." },
    { title: "Real incentive, instant payouts", desc: "The moment a conversion is approved, creators get paid instantly. No waiting, no excuses, just immediate rewards for results." }
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
