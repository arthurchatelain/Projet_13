import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import '../Assets/Style/Login.css'
import { useNavigate } from "react-router-dom";
import { callSignUp } from "../API/Call";
import { useState } from "react";

export default function SignUp () {

    // Initialisation Hook
    let navigate = useNavigate();

    // state Initialisation
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Function that create an user 
    const CreateUser = (e) => {
        e.preventDefault()

        // We make sure all the data is correct
        let emailValide = /^[a-zA-Z][a-zA-Z0-9.-]{2,}@[a-z]{2,}\.[a-z]{2,}$/
        if (firstName.match(/^([a-zA-Z]){3,}$/) === null) alert('Incorect firstname')
        else if (lastName.match(/^([a-zA-Z]){3,}$/) === null) alert('Incorect lastname') 
        else if (!emailValide.test(email)) alert('incorect email')
        else if (password.length <= 8) alert('Please enter a longer password')

        // If everything is ok then we creat the user
        else {
            let body = JSON.stringify({'email': email, 'firstName': firstName, 'lastName': lastName, 'password': password})
            callSignUp(body).then(data => {
                if(!data.ok) alert("Impossible de s'inscrire, l'adresse mail entrée a probablement déjà été utilisé") 
                else navigate('/login')
            })
        }
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
                        <div className="input-wrapper"><label htmlFor="firstname">Firstname</label><input onChange={e => setFirstName(e.target.value)} type="text" id="firstname" /></div>
                        <div className="input-wrapper"><label htmlFor="lastname">Lastname</label><input onChange={e => setLastName(e.target.value)} type="text" id="lastname" /></div>
                        <div className="input-wrapper"><label htmlFor="email">Email</label><input type="text" onChange={e => setEmail(e.target.value)} id="email" /></div>
                        <div className="input-wrapper"><label htmlFor="password">Password</label><input type="password" onChange={e => setPassword(e.target.value)} id="password" /></div>
                        <button className="sign-up-button" onClick={(e) => CreateUser(e)}>SignUp</button>
                        <Link to='/login'><button className="sign-in-button">Login</button></Link>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}