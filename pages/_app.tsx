import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>RefPool — Crypto‑Native Affiliate Marketplace</title>
        <meta
          name="description"
          content="Fund campaigns with a credit card, pay affiliates in USDC. Wallet‑native affiliate marketplace for brands and creators."
        />
        <meta property="og:title" content="RefPool — Crypto‑Native Affiliate Marketplace" />
        <meta property="og:description" content="Fund with card, pay in USDC. Wallet‑native affiliate marketplace." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RefPool — Crypto‑Native Affiliate Marketplace" />
        <meta name="twitter:description" content="Fund with card, pay in USDC. Wallet‑native affiliate marketplace." />
        <meta name="twitter:image" content="/logo.svg" />
        {/* Analytics (replace with your own) */}
        {/* <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "RefPool",
              "url": "https://yourdomain.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://yourdomain.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
