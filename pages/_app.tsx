import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>refpool.xyz — Scale Your Marketing, Reward Top Influencers</title>
        <meta
          name="description"
          content="Launch campaigns that drive real results. Reward your best influencers instantly with crypto payouts. Scale what works globally."
        />
        <meta property="og:title" content="refpool.xyz — Scale Your Marketing, Reward Top Influencers" />
        <meta property="og:description" content="Launch campaigns that drive real results. Reward influencers instantly with crypto payouts." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="refpool.xyz — Scale Your Marketing, Reward Top Influencers" />
        <meta name="twitter:description" content="Launch campaigns that drive real results. Reward influencers instantly with crypto payouts." />
        <meta name="twitter:image" content="/logo.svg" />
        {/* Analytics (replace with your own) */}
        {/* <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "refpool.xyz",
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
