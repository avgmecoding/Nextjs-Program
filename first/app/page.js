import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Welcome to my Home Page.</h1>
      <Link href="/about">About</Link> {" "}
      <Link href="/services">Services</Link><br />
      <Link href="/blogs">Blogs</Link>
    </>
  );
}
