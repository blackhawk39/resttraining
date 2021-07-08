import { NavLink } from "react-router-dom";
const Navbar = () => {
    return(
        <div className="navBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand main-header header" href="/#">Welcome to Census Application</a>
                <div className="root">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Create Application</NavLink>
                        <NavLink activeClassName="active" className="nav-item nav-link" to="/search">Search Application</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;