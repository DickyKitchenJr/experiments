import Link from "next/link";

export default function Home () {
    return (
        <>
        <h1>Main Parent (Home Page [index.js])</h1>
        <Link href="/page2">Page 2</Link>
        </>
    )
}