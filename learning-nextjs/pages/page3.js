import Link from "next/link";

export default function Page3() {
  const code = `export default function App({ Component, pageProps }) {
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
`;

  return (
    <>
      <h2>Sharing elements on every page</h2>

      <p>
        In many cases there will be elements of a site that you want shown on
        every page (shared globally). Things like headers, footers, and navigation are common use
        case examples of this.
      </p>
      <p>
        In Nextjs you can achieve this without having to import the same
        component into every page (or worse yet, have to type out every aspect
        of it onto every page) by creating a <strong>_app.js</strong> file in
        the <strong>pages</strong> folder.
      </p>
      <p>
        The function within the _app.js file can be named whatever you'd like
        (provided you capitalize the first letter), but for simplicities sake
        the function was named <strong>App</strong> in this case.
      </p>
      <p>
        Once you have the function created, you can pass to it's parameter the
        destructored argument of <strong>Component</strong> and{" "}
        <strong>pageProps</strong>, which will provide the App function with the
        data from the other pages.
      </p>
      <p>
        Having done that, you'll add Component as a component within the return
        and ...pageProps as the prop for the Component component. Now anything
        you put around that component will appear in the same places on every
        page.
      </p>
      <p>The code for our <strong>_app.js</strong> file looks like this:</p>
      <pre>
        <code>{code}</code>
      </pre>
      <p>Alright, time to move on to page 4 for learning about using CSS globally.</p>
      

      <Link href="/page2">Page 2</Link>
      <br />
      <Link href='/page4'>Page 4</Link>
    </>
  );
}
