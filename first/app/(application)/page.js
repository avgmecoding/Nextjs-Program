import Link from "next/link";
import ComonentPage from "../../_components/page";


export default function Home() {
  return (
    <>
      <ComonentPage />
      <h1>Welcome to my Home Page.</h1>
      <Link href="/about">About</Link> <br />
      <Link href="/services">Services</Link><br />
      <Link href="/blogs">Blogs</Link><br />
      <Link href="/files">Files</Link>
    </>
  );
}
