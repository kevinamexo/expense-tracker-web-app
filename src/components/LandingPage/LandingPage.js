import React from 'react'
import './LandingPage.css'
function LandingPage() {
    return (
        <div className="landing-page">
            <div className="descr-section">
                <p className="heading">EXPENSE TRACKER</p>
                <p className="heading2">Track your expenses with ease. Save money and make plans, track statistics and much more.</p>
                <p className="heading3">It's Easy,and Free! Click the button below to Sign up Now</p>
                <div className="home-page-btns">
                    <button className="sign-up-home">Sign Up</button>
                    <button className="contact-home">Contact Us</button>
                </div>
            </div>
            <div className="image-section">
                <img src="Images/money.png"/>
            </div>
        </div>
    )
}

export default LandingPage
