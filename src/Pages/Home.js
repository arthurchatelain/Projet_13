import { Link } from "react-router-dom"
import FeatureItem from "../Components/Feature-item"
import Footer from "../Components/Footer"
import '../Assets/Style/Home.css'

export default function Home () {
    return (
        <div className="Home">
            <nav className="main-nav">
                <Link to='/' className="main-nav-logo">
                    <img className="main-nav-logo-image" src={require("../Assets/Images/argentBankLogo.png")} alt="Argent Bank Logo"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <Link to='/login' className="main-nav-item"><i className="fa fa-user-circle"></i> Login</Link>
            </nav>
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <FeatureItem img='icon-chat.png' title='You are our #1 priority' text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'/>
                    <FeatureItem img='icon-money.png' title='More savings means higher rates' text='The more you save with us, the higher your interest rate will be!'/>
                    <FeatureItem img='icon-security.png' title='Security you can trust' text='We use top of the line encryption to make sure your data and money is always safe.'/>
                </section>
            </main>
            <Footer />
        </div>
    )
}