export default function Hero() {
  return (
    <section className="section gradient">
      <div className="mx-auto container-tight px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="badge badge-primary">AI-Generated Incentives</span>
          <span className="badge badge-primary">Instant Payouts</span>
          <span className="badge badge-primary">Match-Making Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gradient" style={{ lineHeight: '1.2' }}>The match-making engine<br/>for performance marketing.</h1>
        <p className="p max-w-2xl mx-auto">
          Connect <b>ambitious brands</b> with <b>motivated creators</b> through smart, performance-based deals.
          Set up campaigns with <b>AI-generated & dynamic incentive rules</b> — creators actually push your links because
          <b> transparent incentives and instant crypto payouts</b> beat traditional affiliate programs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#waitlist" className="btn btn-primary">Launch your campaign</a>
          <a href="#how" className="btn btn-secondary">See how it works</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">More effective than Meta or Google ads. Creators personally vouch for your product.</p>
      </div>
    </section>
  );
}
