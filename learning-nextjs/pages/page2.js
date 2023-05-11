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
        This is a React.js rule and not only applicable to Next.js, but it felt
        worth mentioning as it will save you headaches in the future to remember
        to capitalize your function name.
      </p>

      <h3>{ImageText}</h3>

      <p>
        Ok, time to talk about <strong>Image</strong>.
      </p>

      <p>
        It's extremely rare that a website is created these days with no images
        and having to deal with responsiveness and using the appropriate file
        type can be time consuming, as well as requiring extra lines of code.
        Luckily Next.js has {ImageText} built in to deal with that.
      </p>

      <p>
        Lets say you have an amazing book that you've published and want show
        the full cover on your website...
      </p>

      <div className="image">
        <Image
          src={BookCover}
          width={320}
          height={230}
          style={{ maxWidth: "100%" }}
          alt="book cover of Origin Of The Average Man"
        />
      </div>

      <p>
        To put an image on the page like above you would start by importing
        Image from "next/image". After you've done that you can use the{" "}
        <strong>Image</strong> element with the required props of{" "}
        <strong>src</strong>, <strong>width</strong>, <strong>height</strong>,
        and <strong>alt</strong>. There are other props that can be passed to{" "}
        {ImageText}, but only those four are required. You can find a more
        extensive list of the various props used in {ImageText} in the{" "}
        <a href="https://nextjs.org/docs/pages/api-reference/components/image">
          Next.js Docs on {ImageText}
        </a>
        , but for the image above I only used those four and the{" "}
        <strong>style</strong> prop (to set the max-width to 100%).
      </p>

      <p>
        With just those five props, and putting the {ImageText} in it's own div
        to center it on the screen (display: flex; and justify-content:
        center;), I was able to take a JPG file and create a fully responsive
        image on the webpage that will be loaded to the page as a more
        appropriate file type (webp in this case). All that with just this much
        code:
      </p>

      <pre>
        <code>{`import Image from "next/image";

export default function YourPage(){
  return(
    <>
      <div className="image">
        <Image
          src={BookCover}
          width={320}
          height={231}
          style={{ maxWidth: "100%" }}
          alt="book cover of Origin Of The Average Man"
        />
      </div>
      //other content
    </>
  )
}`}</code>
      </pre>

      <p>
        Thanks to Next.js {ImageText}, that is all the code you need to handle
        lazy loading, converting the file type, and responsiveness. Pretty
        great, right?
      </p>

      <p>Next up: Sharing on every page (but only coding it once)</p>

      <Link href="/">Back to home</Link>
      <br />
      <Link href="/page3">Page 3</Link>
    </>
  );
}
