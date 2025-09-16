export const metadata = {
    title: "Blogs"
}


export default async function Blogs({params}){
    const {blogs} = await params;
    return (
        <h1>All blogs here</h1>
    )
}