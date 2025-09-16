export default function MarketingLayout({children}){
    return(
        <>
            <header style={{background: "teal"}}>Header (Marketing)</header>
            {children}
            <footer style={{background: "brown"}}>Footer (Marketing)</footer>
        </>
    )
}