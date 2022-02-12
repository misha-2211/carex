import '../Login.css';
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const enterLogin = (e) => {
        navigate('/');
    }

    return (
        <form className='form' onSubmit={enterLogin}>
            <div className='form-mail'>
                <span>E-mail </span>
                <input
                    className="mail" placeholder='Your e-mail' required
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
