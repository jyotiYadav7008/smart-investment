import './../App.css';
import './login.css';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import HeaderImage from'./../images/loginHeader.png';
import FooterImage from'./../images/footer.png';

function Login() {
    const navigate = useNavigate();
    const [isHidden, setIsHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleOtp = (event) => {
        setOtp(event.target.value);
    };

    const handleSubmit = () => {
        if(email == 'indiana.jones51@imf.com') {
            navigate('/customerDashboard');
        } else {
            navigate('/customerDashboardWithoutDependent');
        }
    };

    const handleCancel = () => {
        navigate("/customerExperience");
    }

    const otpDivStyle = {
        display: isHidden ? 'none' : 'block'
    };

    const emailDivStyle = {
        display: isHidden ? 'block' : 'none'
    };

    const pStyle = {
        marginTop: '0px'
    };

    return (
        <div className="App">
            <div className="zb-banner">
                <img className="zb-image" src={HeaderImage} alt="Natwest Mortgage Dashboard"/>
            </div>
            <div className="zb-content-wrapper" role="main" id="email">
                <div className="zb-container ">
                <div className="cd-fma-details cd-default-spacing">
                    <section className="zb-section ">
                    <div className="zb-columns zb-columns-multiline">
                        <div className="zb-column-is-12 zb-column-is-mobile-12 zb-column-is-widescreen-6">
                        <section className="zb-card" id="email" style={emailDivStyle}>
                            <header className="zb-card-header">
                            <h2 className="zb-card-header-title">Access your mortgage application</h2>
                            </header>
                            <div className="zb-card-body ">
                                <div >
                                    <p style={pStyle}>Enter the email address we have for you.</p>
                                    <div class="zb-column-is-6 zb-column-is-mobile-12 zb-column-is-tablet-6"><div class="zb-control-wrap"><span class="zb-input-label"><label class="zb-input-label-name">Email address</label></span><div class="zb-control"><input maxlength="72" class="zb-input" type="text" name="email" id="email" placeholder="Enter your email address" value={email} onChange={handleEmail}/></div></div>
                                    </div>
                                    <div class="zb-notification-inner">
                                        <button class="zb-button zb-button-primary "id="emailSubmit"  type="submit" onClick={toggleVisibility}>
                                            <span>Next</span>
                                        </button>
                                        <button class="zb-button zb-button-link " type="button"  onClick={handleCancel}>
                                            <span>Cancel</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </section>
                        <section className="zb-card" id="otp" style={otpDivStyle}>
                            <header className="zb-card-header">
                            <h2 className="zb-card-header-title">Enter your one-time passcode</h2>
                            </header>
                        <div className="zb-card-body " >
                            <p style={pStyle}>We’ve sent a one-time passcode to the mobile number you registered with us. You should get the code in seconds, but it may take a couple of minutes.</p>
                            <div class="zb-column-is-6 zb-column-is-mobile-12 zb-column-is-tablet-6"><div class="zb-control-wrap"><span class="zb-input-label"><label class="zb-input-label-name">One-time passcode</label></span><div class="zb-control"><input maxlength="72" class="zb-input" type="text" name="otp" id="otp" placeholder="Enter 6-digit number" value={otp} onChange={handleOtp}/></div></div>
                            </div>
                            <div>
                                <button class="zb-button zb-button-primary " id="otpSubmit" type="submit" onClick={handleSubmit}>
                                    <span>Confirm</span>
                                </button>
                                <button class="zb-button zb-button-link " type="button" onClick={handleCancel}>
                                    <span>Cancel</span>
                                </button>
                            </div>
                            </div>
                            </section>
                        </div>
                    </div>
                    </section>

                </div>
                </div>
            </div>
            <div className="zb-banner">
                <img className="zb-image" src={FooterImage} alt="Natwest Mortgage Dashboard"/>
            </div>
        </div>
    );
}

export default Login;
