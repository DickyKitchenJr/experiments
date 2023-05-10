import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <h1>
        Learning Nextjs Basics
      </h1>
      <h3>(want to know how to code it once and have it appear on every page? see page
        3)</h3>
      </header>
      <Component {...pageProps} />
    </>
  );
}
