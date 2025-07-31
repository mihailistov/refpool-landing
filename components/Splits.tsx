export default function Splits() {
  return (
    <section id="merchants" className="section">
      <div className="mx-auto container-tight px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="card shadow-soft">
          <div className="badge mb-3">For Brands</div>
          <h3 className="text-xl font-semibold mb-2">Launch campaigns that actually work</h3>
          <p className="p mb-4">Set your budget, choose your rewards, and watch top creators drive real sales. Pay only for results that matter to your business.</p>
          <ul className="list-disc pl-5 p">
            <li>Pay with your credit card</li>
            <li>Reward every sale or signup</li>
            <li>Set spending limits & deadlines</li>
            <li>Download performance reports</li>
          </ul>
        </div>
        <div id="affiliates" className="card shadow-soft">
          <div className="badge mb-3">For Creators</div>
          <h3 className="text-xl font-semibold mb-2">Get paid instantly for every sale</h3>
          <p className="p mb-4">Find campaigns you love, share your link, and earn money the moment someone buys. No waiting, no paperwork, no hassle.</p>
          <ul className="list-disc pl-5 p">
            <li>Sign up with email or wallet</li>
            <li>See your earnings grow live</li>
            <li>Complete payment history</li>
            <li>Available worldwide</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
