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
        Nextjs can pull resources from a dynamic source (like an API) and
        pre-staticlly generate it so that your website load times are fast.
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
      <p>
        It's important to note a couple things here:
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
      </p>
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

      <p>Next up: Nested Routes</p>

      <Link href="/page5">Page 5</Link>
      <br />
      <Link href="/page7/part1">Page 7</Link>
    </>
  );
}
