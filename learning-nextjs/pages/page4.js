import Link from "next/link";

export default function Page4(){
    return (
      <>
        <h2>Sharing CSS styles on every page</h2>

        <p>
          Similar to how you can share elements on every page (globally), you
          can also share CSS globally.
        </p>
        <p>
          This is useful when you have things like font families that you know
          will be used on every page.
        </p>
        <p>
          To create global CSS, create a new folder in the project called{" "}
          <strong>styles</strong>, and within that folder create a file called{" "}
          <strong>global.css</strong>.
        </p>
        <p>
          Now that you have that created, go into the global.css file and set up
          whatever CSS stylings you want to be shown on every page. Once you've
          done that, go into your <strong>_app.js</strong> file and import it at
          the top of the file.
        </p>
        <p>
          If you've your file set up matches the one for this project, that
          should be <strong>import '../styles/global.css'</strong>.
        </p>
        <p>Now all of the styles you set up within the global.css file should be shown on every page.</p>

        <p>Ready to learn about local CSS stylings? On to page 5!</p>

        <Link href="/page3">Page 3</Link>
        <br />
        <Link href="/page5">Page 5</Link>
      </>
    );
}