import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Dashboard — refpool</title>
        <meta name="description" content="Your refpool dashboard" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">refpool</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-300">{session.user?.email}</span>
              <button
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Welcome Card */}
            <div className="md:col-span-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Welcome, {session.user?.name}!</h2>
              <p className="text-gray-300">
                You're all set to start managing your campaigns and connecting with creators.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-2">Active Campaigns</div>
              <div className="text-4xl font-bold text-cyan-400">0</div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-2">Total Spend</div>
              <div className="text-4xl font-bold text-purple-400">$0</div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-2">Conversions</div>
              <div className="text-4xl font-bold text-green-400">0</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Create New Campaign
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Browse Creators
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                View Analytics
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Manage Wallet
              </button>
            </div>
          </div>

          {/* Getting Started */}
          <div className="mt-12 bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">Getting Started</h3>
            <ol className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">1.</span>
                <span>Complete your profile and add payment information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">2.</span>
                <span>Create your first campaign with performance goals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">3.</span>
                <span>Browse and connect with top creators in your niche</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">4.</span>
                <span>Track performance and pay creators instantly with crypto</span>
              </li>
            </ol>
          </div>
        </main>
      </div>
    </>
  );
}

