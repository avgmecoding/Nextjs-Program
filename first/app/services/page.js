import Link from "next/link"

export const metadata = {
    title: "Services"
}

export default function Services(){
    return (
        <>
            <h1>All Services</h1>
            <Link href="/services/app">App Development</Link>
            <br />
            <Link href="/services/web">Web Development</Link>
            <br />
            <Link href="/sevices/seo">Search Engine Optimization</Link>
            <br />
            <Link href="/services/desktop">Desktop App Dev</Link>
        </>
        
    )
}