export default function Pricing() {
  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="mx-auto container-tight px-4">
        <h2 className="h2 mb-2">Early pricing</h2>
        <p className="p mb-8">Simple, transparent pricing during beta.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="badge mb-3">Starter</div>
            <div className="text-2xl font-semibold mb-2">$0 / mo</div>
            <p className="p mb-4">Pay-as-you-go for small campaigns.</p>
            <ul className="list-disc pl-5 p">
              <li>2.9% + card fees on deposits</li>
              <li>10% platform fee on payouts</li>
              <li>Manual payouts</li>
            </ul>
          </div>
          <div className="card border-gray-900">
            <div className="badge mb-3">Pro</div>
            <div className="text-2xl font-semibold mb-2">$99 / mo</div>
            <p className="p mb-4">Scale with automation & white‑label.</p>
            <ul className="list-disc pl-5 p">
              <li>Lower platform fee (5%)</li>
              <li>Automated payouts</li>
              <li>API access & S2S postbacks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
