import Link from "next/link";

export default function Page2() {
  return (
    <>
      <p>
        This is page 2, aptly named <strong>page2.js</strong> in the{" "}
        <strong>pages</strong> folder.
      </p>
      <p>
        By importing Link from 'next/link' we can use the <strong>Link</strong>{" "}
        element with a href to create a means for the user to click between our
        pages.
      </p>
      <p>
        This was also done on the main/home page, and is accomplished by
        assigning the Link element the href of <strong>href="/"</strong> for the
        main/home page, and the file name for the href of other linked pages.
      </p>
      <p>
        For example, links to this page (from within the site) would need{" "}
        <strong>href='/page2'</strong> assigned within the Link element.
      </p>
      <p>
        It is important to note that, while the file name of your pages can be
        lowercase, the function name within the file that you use to return the
        page must be uppercase. For example, while the main/home page file name
        is <strong>index.js</strong>, the actual function name is{" "}
        <strong>Home</strong>. Similarly, while the file name for this page is <strong>page2.js</strong>, the function name is <strong>Page2</strong>.</p> 
        <p>This is a Reactjs rule and not only applicable to
        Nextjs, but it felt worth mentioning as it will save you headaches in
        the future to remember to capitalize your function name.
      </p>
      <Link href="/">Back to home</Link>
      <br />
      <Link href="/page3">Page 3</Link>
    </>
  );
}
