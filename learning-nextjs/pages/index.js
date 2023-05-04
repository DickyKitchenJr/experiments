import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Main Parent (Home Page [index.js])</h2>

      <p>
        This is the main page, or home page of the site. It is stored in the{" "}
        <strong>index.js</strong> file within the <strong>pages</strong> folder,
        and is the starting point of this Nextjs app.
      </p>
      <p>
        You can think of it similar to the index.html file used when building an
        HTML page.
      </p>
      <p>
        With Nextjs, all of your pages will be stored in a{" "}
        <strong>pages</strong> folder with the main/home page named{" "}
        <strong>index.js</strong>.
      </p>
      <p>
        The main/home page <u>must</u> be named <strong>index.js</strong>,
        however other pages can be named whatever you'd like provided they are
        in the <strong>pages</strong> folder.
      </p>

      <Link href="/page2">Page 2</Link>
    </>
  );
}
