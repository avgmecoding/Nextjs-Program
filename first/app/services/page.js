import Link from "next/link"

export default function Services(){
    return (
        <>
            <h1>All Services</h1>
            <Link href="/services/app">App Development</Link>
            <Link href="/services/web">Web Development</Link>
            <Link href="/sevices/seo">Search Engine Optimization</Link>
            <Link href="/services/desktop">Desktop App Dev</Link>
        </>
        
    )
}