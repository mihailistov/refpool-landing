import Nav from "@/components/Nav";
import Head from "next/head";

export default function Investors() {
  return (
    <>
      <Head>
        <title>Investor Deck — refpool Pre-Seed Round</title>
        <meta name="description" content="$50k for 1% equity in refpool's pre-seed round. Match-making engine disrupting $12B performance marketing industry." />
      </Head>
      <main>
        <Nav />
        
        {/* Hero */}
        <section className="section gradient">
          <div className="mx-auto container-tight px-4 text-center">
            <div className="badge badge-primary mb-6 inline-block">Pre-Seed Investment Opportunity</div>
            <h1 className="h1 mb-6" style={{ lineHeight: '1.2' }}>$50k for 1% equity<br/>in the match-making engine for performance marketing</h1>
            <p className="p max-w-2xl mx-auto mb-8">
              refpool is the match-making engine connecting brands with motivated creators through smart,
              performance-based incentive deals. More effective than Meta/Google ads, cheaper than agencies,
              with instant crypto payouts that eliminate trust barriers in the $12B performance marketing industry.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="card">
                <div className="text-2xl font-bold text-cyan-400 mb-2">$12B</div>
                <div className="text-sm">Total Addressable Market</div>
              </div>
              <div className="card">
                <div className="text-2xl font-bold text-purple-400 mb-2">47%</div>
                <div className="text-sm">Annual Market Growth</div>
              </div>
              <div className="card">
                <div className="text-2xl font-bold text-green-400 mb-2">$5M</div>
                <div className="text-sm">Pre-Money Valuation</div>
              </div>
              <div className="card">
                <div className="text-2xl font-bold text-orange-400 mb-2">900X</div>
                <div className="text-sm">Potential Return (5-year)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section">
          <div className="mx-auto container-tight px-4">
            <h2 className="h2 mb-8 text-center">The $12B Match-Making Problem</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card shadow-soft">
                <h3 className="text-xl font-semibold mb-4">Creators Lack Motivation & Trust</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 67% of affiliates wait 30-90 days for payments</li>
                  <li>• Hidden fees and confusing commission structures</li>
                  <li>• $2.3B in unpaid commissions annually</li>
                  <li>• 43% abandon programs due to payment delays</li>
                  <li>• No transparent bonus structures to drive performance</li>
                  <li>• International payouts cost 5-15% in fees</li>
                </ul>
              </div>
              <div className="card shadow-soft">
                <h3 className="text-xl font-semibold mb-4">Brands Burn Money on Ineffective Ads</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Meta/Google ads cost 3x more than word-of-mouth marketing</li>
                  <li>• Months to find and onboard quality creators manually</li>
                  <li>• $1.4B lost to affiliate fraud annually</li>
                  <li>• No smart incentive structures to motivate creators</li>
                  <li>• Trust barriers prevent scaling globally</li>
                  <li>• Pay for impressions/clicks, not actual results</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="section bg-gray-50">
          <div className="mx-auto container-tight px-4">
            <h2 className="h2 mb-8 text-center">Our Solution: The Match-Making Engine</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="card">
                <div className="text-lg font-semibold mb-2">Smart Incentive Deals</div>
                <p className="text-gray-600">AI-generated & dynamic incentive rules that adapt to performance and market conditions. Motivates creators to actually push products.</p>
              </div>
              <div className="card">
                <div className="text-lg font-semibold mb-2">Instant Crypto Payouts</div>
                <p className="text-gray-600">USDC payments in seconds, not weeks. Eliminates trust barriers and motivates creators globally.</p>
              </div>
              <div className="card">
                <div className="text-lg font-semibold mb-2">Automated Match-Making</div>
                <p className="text-gray-600">AI connects brands with motivated creators automatically. No outreach, no negotiations, no friction.</p>
              </div>
              <div className="card">
                <div className="text-lg font-semibold mb-2">Results-Only Payment</div>
                <p className="text-gray-600">Brands only pay for verified conversions. More effective than Meta/Google ads at lower cost.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="section">
          <div className="mx-auto container-tight px-4">
            <h2 className="h2 mb-8 text-center">Massive Market Opportunity</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="px-2 sm:px-0">
                <h3 className="text-xl font-semibold mb-4">Market Size & Growth</h3>
                <ul className="space-y-3">
                  <li><strong>TAM:</strong> $12B performance marketing industry</li>
                  <li><strong>SAM:</strong> $3.2B creator-brand match-making segment</li>
                  <li><strong>SOM:</strong> $180M crypto-native performance marketing</li>
                  <li><strong>Growth:</strong> 47% CAGR through 2028</li>
                  <li><strong>Drivers:</strong> Meta/Google ad costs rising, creator economy boom, instant payment demand</li>
                </ul>
              </div>
              <div className="card shadow-soft">
                <h3 className="text-xl font-semibold mb-4">Revenue Projections</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Year 1:</span>
                    <span className="font-semibold">$120K ARR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year 2:</span>
                    <span className="font-semibold">$850K ARR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year 3:</span>
                    <span className="font-semibold">$3.2M ARR</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>5-Year Exit:</span>
                    <span className="font-bold text-green-600">$45M valuation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section className="section bg-gray-50">
          <div className="mx-auto container-tight px-4">
            <h2 className="h2 mb-8 text-center">Proven Business Model</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Transaction Fees</h3>
                <p className="text-gray-600 mb-3">2.9% on deposits, 5-10% on payouts</p>
                <div className="text-sm text-gray-500">85% of revenue</div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">SaaS Subscriptions</h3>
                <p className="text-gray-600 mb-3">Tiered from $0-$150/month, or $1,500 one-time for advanced users</p>
                <div className="text-sm text-gray-500">12% of revenue</div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Enterprise Licensing</h3>
                <p className="text-gray-600 mb-3">White-label solutions for large brands</p>
                <div className="text-sm text-gray-500">3% of revenue</div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="section">
          <div className="mx-auto container-tight px-4">
            <h2 className="h2 mb-8 text-center">Competitive Advantages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="card shadow-soft">
                  <h3 className="text-lg font-semibold mb-2">Instant Crypto Payments</h3>
                  <p className="text-gray-600">First platform to offer immediate payouts with cryptocurrency at scale</p>
                </div>
                <div className="card shadow-soft">
                  <h3 className="text-lg font-semibold mb-2">Network Effects</h3>
                  <p className="text-gray-600">More creators attract more brands, creating viral growth</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="card shadow-soft">
                  <h3 className="text-lg font-semibold mb-2">Real-Time Results</h3>
                  <p className="text-gray-600">Brands see campaign performance instantly and only pay for verified conversions</p>
                </div>
                <div className="card shadow-soft">
                  <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                  <p className="text-gray-600">No geographic barriers - reach creators worldwide without payment restrictions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use of Funds */}
        <section className="section bg-gray-50">
          <div className="mx-auto container-tight px-4">
            <h2 className="h2 mb-8 text-center">Use of Funds ($500K Pre-Seed)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card shadow-soft">
                <h3 className="text-xl font-semibold mb-4">Allocation Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Product Development</span>
                    <span className="font-semibold">40% ($200K)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing & Growth</span>
                    <span className="font-semibold">30% ($150K)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Expansion</span>
                    <span className="font-semibold">20% ($100K)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operations & Legal</span>
                    <span className="font-semibold">10% ($50K)</span>
                  </div>
                </div>
              </div>
              <div className="card shadow-soft">
                <h3 className="text-xl font-semibold mb-4">18-Month Milestones</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Launch MVP with 100 beta users</li>
                  <li>• Process $1M in campaign volume</li>
                  <li>• Achieve $10K MRR</li>
                  <li>• Expand to 3 additional markets</li>
                  <li>• Raise Series A ($3M at $15M pre)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Terms */}
        <section className="section gradient">
          <div className="mx-auto container-tight px-4 text-center">
            <h2 className="h2 mb-6">Investment Opportunity</h2>
            <div className="card max-w-2xl mx-auto shadow-soft">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold mb-2">$50,000</div>
                  <div className="text-gray-600">Investment Amount</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">1%</div>
                  <div className="text-gray-600">Equity Stake</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">$5M</div>
                  <div className="text-gray-600">Pre-Money Valuation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">900x</div>
                  <div className="text-gray-600">Potential Return (5-year)</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                SAFE note with 20% discount on Series A. Pro-rata rights included.
              </p>
              <a href="mailto:investors@refpool.xyz" className="btn btn-primary">
                Schedule Due Diligence Call
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-200">
          <div className="mx-auto container-tight px-4 py-10 text-center">
            <div className="text-sm text-gray-500">
              This presentation contains forward-looking statements. Past performance does not guarantee future results.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
