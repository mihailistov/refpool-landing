import { useState } from "react";

export default function Waitlist() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      setLoading(true);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) setDone(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="section bg-gray-50">
      <div className="mx-auto container-tight px-4">
        <div className="card shadow-soft">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="badge mb-2">Early Access</div>
              <h3 className="text-xl font-semibold">Join the waitlist</h3>
              <p className="p">Tell us who you are and how you plan to use RefPool.</p>
            </div>
          </div>

          {done ? (
            <div className="p text-green-700">Thanks! You're on the list. We'll reach out shortly.</div>
          ) : (
            <form onSubmit={onSubmit} className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium mb-1">I am a</label>
                <select name="role" className="w-full border rounded-lg px-3 py-2" required>
                  <option value="affiliate">Affiliate / Creator</option>
                  <option value="merchant">Brand / Merchant</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" name="email" className="w-full border rounded-lg px-3 py-2" placeholder="you@domain.com" required />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium mb-1">Wallet (optional)</label>
                <input type="text" name="wallet" className="w-full border rounded-lg px-3 py-2" placeholder="0x..." />
              </div>
              <div className="md:col-span-3">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Submitting..." : "Request access"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
