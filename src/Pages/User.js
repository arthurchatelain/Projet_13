import '../Assets/Style/User.css'
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { INIT_STATE, SET_USER_DATA} from '../store';
import { useState } from 'react';
import { callSetProfile } from '../API/Call';

export default function User() {

    const dispatch = useDispatch()
    const user = useSelector( state => state.userData )
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName) 

    // Show the edit element
    const editShow = () => {
        // Hide header and show edit element
        document.getElementsByClassName('header')[0].style.display = 'none'
        document.getElementsByClassName('editName')[0].style.display = 'block'
    }

    // Hide the edit element and reinitialise the input values
    const editHide = (e) => {
        e.preventDefault()
        e.stopPropagation()
        // Hide edit element and show header
        document.getElementsByClassName('header')[0].style.display = 'block'
        document.getElementsByClassName('editName')[0].style.display = 'none'
        // Reinitialisation of the data
        document.getElementById('firstNameEdit').value = ''
        document.getElementById('lastNameEdit').value = ''
    }

    // Function that set firstName and lastName of the user
    const changeProfile = (e) => {
        e.preventDefault()
        e.stopPropagation()
        // Getting data
        let firstNameEdit = document.getElementById('firstNameEdit').value
        let lastNameEdit = document.getElementById('lastNameEdit').value
        // body fetch request
        let body = JSON.stringify({'firstName': firstNameEdit, 'lastName': lastNameEdit})
        // callApi
        callSetProfile(body).then(data => {
            setFirstName(data.body.firstName)
            setLastName(data.body.lastName)
            const newUser = {...user}
            newUser.firstName = data.body.firstName
            newUser.lastName = data.body.lastName
            dispatch({type: SET_USER_DATA, payload: newUser})
            window.location.reload()
        })
    }

    return (
        <div className="User">
            <nav className="main-nav">
                <Link to='/' className="main-nav-logo" ><img className="main-nav-logo-image" src={require("../Assets/Images/argentBankLogo.png")} alt="Logo"/></Link>
                <div>
                    <Link to='' className="main-nav-item"><i className="fa fa-user-circle"></i>{firstName}</Link>
                    <Link to='/' className="main-nav-item" onClick={() => dispatch({type: INIT_STATE}) }><i className="fa fa-sign-out"></i>Sign Out</Link>
                </div>
            </nav>
            <main className="main bg-bright">
                <div className="header">
                    <h1>Welcome back<br />{firstName} {lastName}!</h1>
                    <button className="edit-button" onClick={() => editShow()}>Edit Name</button>
                </div>
                <form className='editName' style={{display: 'none'}}>
                        <h1>Welcome back</h1>
                        <div className='editInputs'>
                            <input autoComplete="Off" type="text" id="firstNameEdit" placeholder={firstName}/>
                            <input autoComplete="Off" type="text" id="lastNameEdit" placeholder={lastName}/>
                        </div>
                        <div className='editButtons'>
                            <button onClick={(e) => changeProfile(e)}>Save</button>
                            <button onClick={(e) => editHide(e)}>Cancel</button>
                        </div>
                    </form>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
