export async function generateMetadata({params}){
    const {blogID} = await params;
    return{
        title: `Blog ${blogID}`,
    }
}

export default async function Blog1({params}){
    const {blogID} = await params;
    return(
        <h1>Welcome to blog <b>{blogID}</b></h1>
    )
}