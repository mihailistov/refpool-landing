export default function Hero() {
  return (
    <section className="section gradient">
      <div className="mx-auto container-tight px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="badge bg-gray-100 text-gray-900 border-black">Instant Payouts</span>
          <span className="badge bg-gray-100 text-gray-900 border-black">Real-Time Results</span>
          <span className="badge bg-gray-100 text-gray-900 border-black">Global Scale</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gradient">Scale your marketing.<br/>Reward top creators.</h1>
        <p className="p max-w-2xl mx-auto">
          Connecting <b>ambitious brands</b> with <b>high-performing influencers</b>. Launch campaigns that drive <b>real results</b>,
          motivate with <b>instant payouts</b>, and <b>scale what works — globally</b>.
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
