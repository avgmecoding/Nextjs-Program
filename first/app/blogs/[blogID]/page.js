export default async function Blog1({params}){
    console.log(await params);
    const {blogID} = await params;
    return(
        <h1>Welcome to blog {blogID}</h1>
    )
}