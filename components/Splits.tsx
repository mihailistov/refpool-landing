export default function Splits() {
  return (
    <section id="merchants" className="section">
      <div className="mx-auto container-tight px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="card shadow-soft">
          <div className="badge mb-3">For Brands</div>
          <h3 className="text-xl font-semibold mb-2">Set a budget, set rules, grow fast</h3>
          <p className="p mb-4">Create a campaign, fund a USDC pool, and define payouts per conversion. List publicly in the marketplace or invite‑only.</p>
          <ul className="list-disc pl-5 p">
            <li>Fund with card or USDC</li>
            <li>Payout per sale or signup</li>
            <li>Caps & end dates</li>
            <li>Exportable analytics</li>
          </ul>
        </div>
        <div id="affiliates" className="card shadow-soft">
          <div className="badge mb-3">For Affiliates</div>
          <h3 className="text-xl font-semibold mb-2">One link, instant USDC payouts</h3>
          <p className="p mb-4">Browse campaigns, get your referral link, and track earnings. Withdraw to your wallet on your terms.</p>
          <ul className="list-disc pl-5 p">
            <li>Wallet or email sign‑in</li>
            <li>Real‑time stats</li>
            <li>Transparent payout history</li>
            <li>Global availability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
