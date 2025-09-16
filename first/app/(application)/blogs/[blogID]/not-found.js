"use client";

import { usePathname } from "next/navigation"

export default function BlogNotFound() {
  // const a = usePathname()
  // console.log(a);
  
  return (
    <div>
      <h1>{a.split()} Blog page not found!!</h1>
      <p>Couldn't found the page you are looking for....</p>
    </div>
  )
}


