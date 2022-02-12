import { NavLink, Outlet } from "react-router-dom"

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;
