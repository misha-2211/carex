import { Link } from "react-router-dom"

function Notfound() {
    return (
        <>
            <h2>Error 404. Page not found.</h2>
            <Link to="/">Go home.</Link>
        </>
    );
}

export default Notfound;
