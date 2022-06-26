import '../Assets/Style/User.css'
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { INIT_STATE, SET_USER_DATA} from '../store';
import { useState } from 'react';
import { callSetProfile } from '../API/Call';
import Accounts from '../Components/Accounts'

export default function User() {

    const dispatch = useDispatch()
    const user = useSelector( state => state.userData )
    const token = useSelector(state => state.token)
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [showEdit, setShowEdit] = useState(false)

    const showForm = () => {
        return (
            <form className='editName'>
                <h1>Welcome back</h1>
                <div className='editInputs'>
                    <input autoComplete="Off" type="text" onChange={(e) => setFirstName(e.target.value)} id="firstNameEdit" placeholder={firstName}/>
                    <input autoComplete="Off" type="text" onChange={(e) => setLastName(e.target.value)} id="lastNameEdit" placeholder={lastName}/>
                </div>
                <div className='editButtons'>
                    <button onClick={changeProfile}>Save</button>
                    <button onClick={() => setShowEdit(false)}>Cancel</button>
                </div>
            </form>
        )
    }

    const showWelcome = () => {
        return (
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <button className="edit-button" onClick={() => setShowEdit(true)}>Edit Name</button>
            </div>
        )
    }

    const toggleForm = () => {
        return showEdit ? showForm() : showWelcome()
    }

    // Function that set firstName and lastName of the user
    const changeProfile = () => {
        // body fetch request
        let body = JSON.stringify({'firstName': firstName, 'lastName': lastName})
        // callApi
        callSetProfile(body, token).then(data => {
            dispatch({type: SET_USER_DATA, payload: data.body})
            setShowEdit(false)
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
                {toggleForm()}
                <Accounts />
            </main>
            <Footer />
        </div>
    )
}
