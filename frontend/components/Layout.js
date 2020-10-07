const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <h1>HEADER</h1>
            {children}
            <h1>FOOTER</h1>
        </React.Fragment>
    )
}

export default Layout;
