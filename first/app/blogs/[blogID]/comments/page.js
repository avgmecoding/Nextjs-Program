export default async function comments({params}){
    const paramsObj = await params;
    const {blogID} = paramsObj;
    
    
    return(
        <h1>All comments on <b>{blogID}</b> blog</h1>
    )
}