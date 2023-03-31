import Link from "next/link";
import Head from "next/head";
// Script is used to handle third party javascript, like ads and widgets
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* below, strategy="lazyOnload" tells the browser to lazily load the third party JS while onLoad provides instructions
      for what to do after the JS has been loaded */}
      {/* Script commented out as it is not needed for the rest of the tutorial */}
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
    </>
  );
}
