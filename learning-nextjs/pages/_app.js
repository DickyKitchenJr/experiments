import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <h1>
        Header (you'll notice the header stays the same on every page, see page
        3 for why)
      </h1>
      <Component {...pageProps} />
    </>
  );
}
