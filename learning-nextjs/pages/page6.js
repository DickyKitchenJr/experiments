import Link from "next/link";

export default function Page6() {
  const code = `export default function PageName(props) {
    return(
        <>
            <h1>{props.something}</h1>
        </>
        ) 
    }

export async function getStaticProps() {
    const response = await fetch("API url goes here");
    const data = await response.json();

    return {
        props: {
            something: data.something
        }
    }
}`;

  return (
    <>
      <h2>getStaticProps</h2>

      <p>
        Next.js can pull resources from a dynamic source (like an API) and
        pre-statically generate it so that your website load times are fast.
      </p>

      <p>
        Using the built-in function <strong>getStaticProps( )</strong>, you are
        able to call on the resource and create props that can then be used
        within the page you are building.
      </p>

      <p>Take a look at the below code for an example.</p>

      <pre>
        <code>{code}</code>
      </pre>

      <p>
        Looking at the <strong>getStaticProps( )</strong> section of the code,
        you'll see that we use async/await to request data from an API then
        convert that data to json, and then return an object with{" "}
        <strong>props:{}</strong> with an object that holds the data that we
        want to use.
      </p>

      <p>It's important to note a couple things here:</p>

      <ol>
        <li>
          The getStaticProps function must be named{" "}
          <strong>getStaticProps</strong>
        </li>
        <li>
          It must return an object with a <strong>props</strong> object
        </li>
        <li>
          The data to be used will be assigned to key/value pairs within the{" "}
          <strong>props</strong> object
        </li>
      </ol>

      <p>
        Once you understand that, you can see how the <strong>props</strong> is
        passed to the <strong>PageName</strong> function at the top of the code
        and then used within the return to create an h1 element using the data.
      </p>

      <p>
        This isn't something you would want to do for unique data (data that is
        different for every user) or data that is constantly changing or
        updating, but it is useful for preloading data that can safely be used
        as a snapshot of that moment.
      </p>

      <p>
        To see an example you can click my{" "}
        <a href="https://nextjs-marvel-character-search.vercel.app/">
          Marvel Character Search
        </a>{" "}
        project.
      </p>

      <p>
        Within that site you will note that the information for the character
        Wolverine is already loaded from the Marvel API upon display of the page
        and doesn't have to be fetched while the page loads.
      </p>

      <p>
        But what if you want the information to update as the source updates?
        That can be achieved by adding <strong>revalidate</strong> with a time
        value to the getStaticProps returned object and would look like this:
      </p>

      <pre>
        <code>
          {`export async function getStaticProps() {
    const response = await fetch("API url goes here");
    const data = await response.json();

    return {
        props: {
            something: data.something
        },
        revalidate: 10,
    }
}`}
        </code>
      </pre>

      <p>
        In the above section of code, the <strong>revalidate: 10</strong> will
        cause the page to regenerate in the background if the page is requested
        after 10 seconds, and the following page request will have the updated
        information.
      </p>

      <p>
        The exact wording Next.js uses to describe this on{" "}
        <a href="https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration">
          their docs
        </a>{" "}
        is:
      </p>

      <em>
        <p>
          When a request is made to a page that was pre-rendered at build time,
          it will initially show the cached page.
        </p>

        <ul>
          <li>
            {" "}
            Any requests to the page after the initial request and before 10
            seconds are also cached and instantaneous.
          </li>
          <li>
            After the 10-second window, the next request will still show the
            cached (stale) page Next.js triggers a regeneration of the page in
            the background.
          </li>
          <li>
            Once the page generates successfully, Next.js will invalidate the
            cache and show the updated page.
          </li>
          <li>
            If the background regeneration fails, the old page would still be
            unaltered.
          </li>
        </ul>
      </em>

      <p>
        What this means is that you are able to get the best of both worlds; The
        speed of a static generated page with the ability of a dynamic page.
      </p>

      <p>Next up: Nested Routes</p>

      <Link href="/page5">Page 5</Link>
      <br />
      <Link href="/page7/part1">Page 7</Link>
    </>
  );
}
