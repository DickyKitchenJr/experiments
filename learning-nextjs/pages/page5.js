import Link from "next/link";
import styles from "../styles/page5.module.css";

export default function Page5() {
  return (
    <>
      <h2 className={styles.h2}>CSS Styles for Specific Pages/Parts</h2>

      <p>
        While it's nice to have styles that apply to every page, there will
        undoubtedly be times when you need styles specific to individual pages.
      </p>

      <p>
        For example, what if I want the h2 element on this page to be red
        without affecting the rest of the pages?
      </p>

      <p>
        To start this, go into the <strong>styles</strong> folder and create a
        new <strong>css</strong> file with any name ending in{" "}
        <strong>.module.css</strong>.
      </p>
      <p>
        For this page I used <strong>page5.module.css</strong>.
      </p>

      <p>
        Once you've done that, go into the css file and you can begin setting up
        whatever style rules you want with once caveat:
        <ul>
          <li>
            the css names must be pure; meaning they have to be class or id
            names and cannot be simply h2 (or other such elements)
          </li>
        </ul>
      </p>

      <p>
        For this page, I gave the css rule the name of <strong>.h2</strong> (as
        opposed to just <strong>h2</strong>).
      </p>

      <p>
        After you are done setting up your css rules, go to the file you want to
        use them in (for this page it's page5.js) and import the styles at the
        top of the page.
      </p>
      <p>
        For example at the top of our page5.js file you would see:
      </p>
      <pre>
        <code>
            {`import styles from '../styles/page5.module.css'`}
        </code>
      </pre>

      <p>
        Now that the styles are imported into the file you can assign them using{" "}
        <strong>className={`{styles.whatever the css name is}`}</strong>.
      </p>
      <p>
        So for this page, our className was assigned to the object{" "}
        <strong>styles.h2</strong> within the h2 element. Making it look like
        this:
      </p>
      <pre>
        <code>
          {`<h2 className={styles.h2}>CSS Styles for Specific Pages/Parts</h2>`}
        </code>
      </pre>

      <p>That's really all there is to making css for speciific sections of a site/app as opposed to using global css for everything.</p>

      <p>One to the next thing! Time to learn about getStaticProps( )</p>

      <Link href="/page4">Page 4</Link>
      <br />
      <Link href="/page6">Page 6</Link>
    </>
  );
}
