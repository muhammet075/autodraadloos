import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>AutoDraadloos.nl</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div>
        <h1>Website in aanbouw</h1>
        <p>Klik hieronder om een offerte voor uw voertuig te krijgen.</p>
        <Link href="/offerte">Offerte</Link>
      </div>
    </>
  );
}
