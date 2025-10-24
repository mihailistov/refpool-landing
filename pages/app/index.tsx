import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function AppIndex() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/app/dashboard");
    } else if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
}

