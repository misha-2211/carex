import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

function About() {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <div>Наша страница</div>
            <button onClick={() => signout(() => navigate('/', { replace: true }))}>Выйти</button>
        </>
    );
}

export default About;
