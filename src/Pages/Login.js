import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import '../Assets/Style/Login.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SET_REMEMBER_ME, SET_TOKEN, SET_USER_DATA, SET_USER_ID } from "../store";
import { callGetProfile, callLogin } from "../API/Call";

export default function Login () {
    
    // If the user is already connected we send him to his dashboard 
    const alreadyConnected = useSelector(state => state.rememberMe)
    const token = useSelector(state => state.token)
    if(alreadyConnected) {
        callGetProfile(token).then(data => {
              dispatch({type: SET_USER_DATA, payload: data.body})
              navigate('/User' + data.body.id)
          })
    }

    // Initialisation Hooks
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // User's authentication
    const login = (e) => {
        e.preventDefault()
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const rememberMe = document.getElementById('remember-me').checked
        const body = JSON.stringify({'email': username, 'password': password})
        callLogin(body).then(data => {
            if(data.ok === true) return data.json()
            else alert("Erreur d'authentification")
        }).then(data => {
            dispatch({type: SET_TOKEN, payload: data.body.token})
            callGetProfile(data.body.token).then(data => {
              dispatch({type: SET_USER_ID, payload: data.body.id})
              dispatch({type: SET_REMEMBER_ME, payload: rememberMe})
              dispatch({type: SET_USER_DATA, payload: data.body})
              navigate('/User' + data.body.id)
          })
        })
    }

    return (
        <div className='Login'>
            <nav className="main-nav">
                <Link to='/' className="main-nav-logo" ><img className="main-nav-logo-image" src={ require("../Assets/Images/argentBankLogo.png")} alt="Logo"/></Link>
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Login</h1>
                    <form>
                        <div className="input-wrapper"><label htmlFor="username">Username</label><input autoComplete="Off" type="text" id="username" /></div>
                        <div className="input-wrapper"><label htmlFor="password">Password</label><input autoComplete="Off" type="password" id="password" /></div>
                        <div className="input-remember"><input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label></div>
                        <button className="sign-in-button" onClick={e => login(e)}>Login</button>
                        <Link to='/signup'><button className="sign-in-button">Sign Up</button></Link>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}