const Navbar = () => {
    return(
        <div className="navBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand header" href="/#">Welcome to Census Application</a>
                <div className="root">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/#">Create Application</a>
                        <a className="nav-item nav-link" href="/#">Search Application</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;