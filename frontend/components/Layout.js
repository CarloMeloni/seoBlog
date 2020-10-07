import Header from './Header';
 
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <h1>FOOTER</h1>
        </React.Fragment>
    )
}

export default Layout;
