import './Login.css';

function Login(props) {

    const interLogin = (e) => {
        e.preventDefault()
        props.history.push('/')
    }

    return (
        <form className='form' onSubmit={interLogin}>
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
