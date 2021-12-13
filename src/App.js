import { BrowserRouter as Switch, Link, Route, Router } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
