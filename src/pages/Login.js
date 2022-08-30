import '../Login.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../hook/useAuth';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { signin } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const enterLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.useremail.value;

        signin(user, () => navigate(fromPage, { replace: true }));
    }

    return (
        <form className='form' onSubmit={enterLogin}>
            <div className='form-mail'>
                <span>E-mail </span>
                <input
                    className="mail" name='useremail' placeholder='Your e-mail' required
                />
            </div>

            <div className="form-pass">
                <span>Password </span>
                <input
                    className="pass" placeholder='Your password' type="password" required
                />
            </div>

            <div>
                <button className="but" type="submit">Отправить</button>
            </div>
        </form >
    );
}

export default Login;
