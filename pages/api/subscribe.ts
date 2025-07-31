import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { role, email, wallet } = req.body || {};
  console.log("New signup:", { role, email, wallet });
  // TODO: store in a database (Supabase/Firestore) or forward to your CRM
  return res.status(200).json({ ok: true });
}
