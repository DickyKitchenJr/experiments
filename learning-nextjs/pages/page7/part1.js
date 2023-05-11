import Link from "next/link";

export default function Page7Part1() {
  return (
    <>
      <h2>Nesting Routes</h2>

      <p>
        If you've been paying attention to the url bar, you should have noticed
        that, after the home page, the other pages ended in '/page' with
        the number at the end (essentially ending with the file name).
      </p>

      <p>
        This is due to Next.js built-in routing where the page url is assigned
        the file name and can be accessed by importing and using the{" "}
        <strong>Link</strong> element provided by Next.js (see{" "}
        <Link href="/page2">Page 2</Link> if you need a refresher on{" "}
        <strong>Link</strong>). But what if you need to nest your routing?
      </p>

      <p>
        In some cases, like if you have a blog or gallery on your site, you may
        want to have nested routing to help the user better understand where on
        the site they are. This can also be helpful for code organization as it
        just makes sense to keep all of the pages for a particular part of your
        site (like the blog) in one folder vs having them mixed in with
        everything else on the site.
      </p>

      <p>
        Luckily this can be easily accomplished from within your{" "}
        <strong>pages</strong> folder. All you have to do is add another folder
        within that folder (in our case we named it <strong>page7</strong>),
        then add a .js file inside of that folder (for this page it's{" "}
        <strong>part1.js</strong>).
      </p>

      <p>
        Now that you've done that you should be able to type the nested url into
        the page bar and see your new page. Or you could use Link to navigate
        like we've been doing.
      </p>

      <Link href="/page6">Page 6</Link>
      <br />
      <Link href="/page7/part2">Page 7 Part 2</Link>
    </>
  );
}
