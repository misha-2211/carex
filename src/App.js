import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

import Layout from "./components/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Notfound />} />
            </Route>
        </Routes>
    );
}

export default App;
