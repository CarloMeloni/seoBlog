const Layout = ({ children }) => {
    return (
        <Fragment>
            <h1>HEADER</h1>
            {children}
            <h1>FOOTER</h1>
        </Fragment>
    )
}

export default Layout;
