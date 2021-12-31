import './Login.css';

function Login() {
    return (
        <form className='form'>
            <div className='form-mail'>
                <span>E-mail </span>
                <input className="mail" placeholder='Your e-mail' />
            </div>
            <div className="form-pass">
                <span>Password </span>
                <input className="pass" placeholder='Your password' />
            </div>
            <div>
                <button className="but" type={"submit"} >Отправить</button>
            </div>
        </form >
    );
}

export default Login;
