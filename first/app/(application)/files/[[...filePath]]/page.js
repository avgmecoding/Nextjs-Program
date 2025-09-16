
export const metadata = {
    title: {
        absolute: "File whatever"
    },
    description: "Hello World"
}

export default async function FileComponent({params}){
    const { filePath } = await params;
    
    return(
        
        <div><h1>File <i>{filePath?.join("/")}</i></h1></div>
    )
}