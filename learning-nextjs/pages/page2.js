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
      <Link href="/">Back to home</Link>
    </>
  );
}
