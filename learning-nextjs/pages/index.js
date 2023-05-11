import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Home Page [index.js]</h2>

      <p>
        In this starter overview of Next.js we'll discuss the fundamental basics
        of creating a new Next.js project and how to get started on building out
        your project. It's important to note that you should already have a
        fundamental understanding of React, JavaScript, HTML and CSS prior to
        going through this walkthrough.
      </p>

      <p>
        If you do better learning through step-by-step video tutorials, I
        recommend you check out{" "}
        <a href="https://youtu.be/qwhMyVVnmKM">LearnWebCode</a> for their Next.js
        beginner tutorial. And of course, if you prefer a more detailed
        approach, you should check the{" "}
        <a href="https://nextjs.org/docs">Next.js Docs</a>
      </p>

      <p>
        To start up a new Next.js project you have 2 main options. One options is
        to go in the terminal and run{" "}
        <strong>npx create-next-app@latest</strong>, which will give you prompts
        to answer and then automatically supply you with a bunch of boilerplate
        code to start with. This can be thought of similarly to the old way of
        using create react app, and you will likely find yourself deleting some
        of the boilerplate to customize everything to your needs.
      </p>

      <p>
        The other option, and the one we used for this site, is creating a
        folder and going into the terminal and running{" "}
        <strong>npm install next@latest react@latest react-dom@latest</strong>,
        then going into <strong>package.json</strong> and adding the following
        scripts:
      </p>

      <pre>
        <code>
          {`{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}`}
        </code>
      </pre>

      <p>
        Then create a <strong>.gitignore</strong> file within the main folder
        and add:
      </p>

      <pre>
        <code>
          {`# dependencies
/node_modules

# next.js
/.next/
/out/

# production
/build`}
        </code>
      </pre>

      <p>
        Now that you have your project started we can get into making the
        displayable parts of your website. Starting with the page we're on right
        now.
      </p>

      <p>
        This is the main page, or home page of the site. To create it you'll
        want to add a folder named <strong>pages</strong>, and within that
        folder add a file named <strong>index.js</strong>. That will let Next.js
        know that this is the starting point of your site.
      </p>

      <p>
        You can think of it similar to the index.html file used when building an
        HTML page.
      </p>

      <p>
        With Next.js, all of your pages will be stored in the{" "}
        <strong>pages</strong> folder with the main/home page named{" "}
        <strong>index.js</strong>.
      </p>

      <p>
        The main/home page <u>must</u> be named <strong>index.js</strong>,
        however other pages can be named whatever you'd like provided they are
        in the <strong>pages</strong> folder.
      </p>

      <p>Next up: Using Link and Images</p>

      <Link href="/page2">Page 2</Link>
    </>
  );
}
