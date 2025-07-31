export default function Hero() {
  return (
    <section className="section gradient">
      <div className="mx-auto container-tight px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="badge">Instant Payouts</span>
          <span className="badge">Real-Time Results</span>
          <span className="badge">Global Scale</span>
        </div>
        <h1 className="h1 mb-6">Scale your marketing.<br/>Reward top creators.</h1>
        <p className="p max-w-2xl mx-auto">
          refpool connects <b>ambitious brands</b> with <b>high-performing creators</b>. Launch campaigns that drive real results, 
          reward your best affiliates <b>instantly</b> with crypto payouts, and <b>scale what works — globally</b>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#waitlist" className="btn btn-primary">Join the waitlist</a>
          <a href="#how" className="btn btn-secondary">See how it works</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">No wallet required to browse. Wallet needed to receive payouts.</p>
      </div>
    </section>
  );
}
