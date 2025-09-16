export default async function comid({params}){
    const paramsObj = await params;
    const {blogID, commentID} = paramsObj
    console.log(paramsObj);
    
    return(
        <div>
            <h1>This is comment <b>{commentID}</b> on blog  <b>{blogID}</b></h1>
        </div>
        
    )
}