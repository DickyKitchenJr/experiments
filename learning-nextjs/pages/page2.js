import Link from "next/link";
import Image from "next/image";
import BookCover from "../images/bookFullCover.jpg";

export default function Page2() {
  const LinkText = "<Link>";
  const ImageText = "<Image>";

  return (
    <>
      <h2>Using Link and Images</h2>

      <h3>{LinkText}</h3>

      <p>
        This is page 2, aptly named <strong>page2.js</strong> in our{" "}
        <strong>pages</strong> folder.
      </p>
      <p>
        By importing Link from 'next/link' we can use the <strong>Link</strong>{" "}
        element with a href to create a means for the user to click between our
        pages.
      </p>

      <p>In your code editor it will look something like this:</p>
      <pre>
        <code>
          {`import Link from "next/link";
          
export default function YourPage(){
  return(
    <>
      <Link href="/fileName">Home Page</Link>
      //other content
    </>
  )
}`}
        </code>
      </pre>

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
        <strong>Home</strong>. Similarly, while the file name for this page is{" "}
        <strong>page2.js</strong>, the function name is <strong>Page2</strong>.
      </p>
      <p>
        This is a Reactjs rule and not only applicable to Nextjs, but it felt
        worth mentioning as it will save you headaches in the future to remember
        to capitalize your function name.
      </p>

      <h3>{ImageText}</h3>

      <p>Ok, time to talk about Image.</p>

      <p>
        It's extremely rare that a website is created these days with no images
        and having to deal with responsiveness and using the appropriate file
        type can be time consuming, as well as requiring extra lines of code.
        Luckily Nextjs has {ImageText} built in to deal with that.
      </p>

      <p>Lets say you have an amazing book that you've published and want show the full cover on your website...</p>

{/* TODO: fix image to be centered and size appropriately, continue to write details on how it's done */}
      <Image 
      src={BookCover}
      width={320}
      height={231}
      style={{display: "inline-block", marginLeft: "auto", marginRight: "auto"}}
      alt="book cover of Origin Of The Average Man" />

      <p>To put an image on the page like above</p>

      <Link href="/">Back to home</Link>
      <br />
      <Link href="/page3">Page 3</Link>
    </>
  );
}
