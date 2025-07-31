export default function Pricing() {
  return (
    <section id='pricing' className='section bg-gray-50'>
      <div className='mx-auto container-tight px-4'>
        <h2 className='h2 mb-2'>Early pricing</h2>
        <p className='p mb-8'>Simple, transparent pricing during beta.</p>
        <div className='grid md:grid-cols-4 gap-6'>
          <div className='card'>
            <div className='badge mb-3'>Free</div>
            <div className='text-2xl font-semibold mb-2'>$0 / mo</div>
            <p className='p mb-4'>Pay-as-you-go for small campaigns.</p>
            <ul className='list-disc pl-5 p'>
              <li>2.9% + card fees on deposits</li>
              <li>10% platform fee on payouts</li>
              <li>Manual payouts</li>
            </ul>
          </div>
          <div className='card border-gray-900'>
            <div className='badge mb-3'>Pro</div>
            <div className='text-2xl font-semibold mb-2'>$99 / mo</div>
            <p className='p mb-4'>Scale with automation & white‑label.</p>
            <ul className='list-disc pl-5 p'>
              <li>7.5% processing fee</li>
              <li>Automated payouts</li>
              <li>API access & S2S postbacks</li>
            </ul>
          </div>
          <div className='card'>
            <div className='badge mb-3'>Pro Plus</div>
            <div className='text-2xl font-semibold mb-2'>$150 / mo</div>
            <p className='p mb-4'>Premium features & dedicated support.</p>
            <ul className='list-disc pl-5 p'>
              <li>5% processing fee</li>
              <li>Request custom features</li>
              <li>Dedicated support</li>
            </ul>
          </div>
          <div className='card'>
            <div className='badge mb-3'>Pro Max</div>
            <div className='text-2xl font-semibold mb-2'>$1,500 one-time</div>
            <p className='p mb-4'>Everything in Pro Plus plus lifetime support.</p>
            <ul className='list-disc pl-5 p'>
              <li>Everything in Pro Plus</li>
              <li>Lifetime support & access to future features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
