import Link from "next/link";

export default function Page7Part2() {
  return (
    <>
      <h2>Nesting Routes part 2</h2>

      <p>
        As you can see, this makes it easier for the user to know where they are
        in the site as well as making it better for orgainizing the code.
      </p>

      <p>
        Be aware that this is a basic approach to nesting routes in Nextjs and
        there is more that can be done beyond this including (but not limited
        to) dynamic nesting.
      </p>

      <Link href='/page7/part1'>Page 7 Part 1</Link>
      <Link href='/page8'>Page 8</Link>
    </>
  );
}
