export default function ApplicationLayout({children}){
    return(
        <>
            <header style={{background: "orange"}}>Header (Application)</header>
            {children}
            <footer style={{background: "Green"}}>Footer (Application)</footer>
        </>
    )
}