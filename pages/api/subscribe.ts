// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, role, wallet } = req.body;

  try {
    const response = await fetch("https://formspree.io/f/mzzvvgza", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ email, role, wallet })
    });

    if (!response.ok) {
      const data = await response.json();
      console.error("Formspree error:", data);
      return res.status(500).json({ error: "Form submission failed." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("API error:", err);
    return res.status(500).json({ error: "Unexpected server error." });
  }
}
