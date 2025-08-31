export default async function Blog1({params}){
    const {blogID} = await params;
    return(
        <h1>Welcome to blog <b>{blogID}</b></h1>
    )
}