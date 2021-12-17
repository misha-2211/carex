import './Login.css';

function Login() {
    return (
        <form className='form'>
            <div className="form_mail">
                <span>E-mail </span>
                <input className="mail" placeholder='Your e-mail' />
            </div>
            <div className="form_pass">
                <span>Password </span>
                <input className="pass" placeholder='Your password' />
            </div>
            <div>
                <input className="button" type={"submit"} ></input>
            </div>
        </form >
    );
}

export default Login;
