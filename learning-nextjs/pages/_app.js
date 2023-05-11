import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <h1>
        Learning Next.js Basics
      </h1>

      <h3>(how to get started on a Next.js project today)</h3>
      </header>

      <Component {...pageProps} />
    </>
  );
}
