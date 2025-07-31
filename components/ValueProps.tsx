export default function ValueProps() {
  const items = [
    { title: "Instant payouts", desc: "Creators get paid in seconds, not weeks. No banks, no delays, no excuses." },
    { title: "Launch in minutes", desc: "Fund campaigns with your credit card. Go from idea to live campaign instantly." },
    { title: "Zero fraud headaches", desc: "Advanced protection stops fake clicks and bad actors before they cost you money." },
    { title: "Track everything", desc: "See every click, conversion, and payout in real-time. Know exactly what's working." },
    { title: "Guaranteed payments", desc: "Creators never worry about getting paid. Funds are secured and payouts are automatic." },
    { title: "Scale anywhere", desc: "Reach creators worldwide. No borders, no limits, no complicated international payments." }
  ];
  return (
    <section className="section bg-gray-50">
      <div className="mx-auto container-tight px-4">
        <h2 className="h2 mb-2 text-center">Why brands & creators love refpool</h2>
        <p className="p mb-8 text-center">Big results, zero hassle, instant trust. Everything you need to scale your influencer marketing.</p>
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
