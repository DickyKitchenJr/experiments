// when you first create _app.js you have to restart the 
// development server in order for it to take effect
// _app.js is the ONLY place that you can import global styles
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
