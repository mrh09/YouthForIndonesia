import React from 'react'
import './AboutUs.css'
import yfi from '../../img/yfi.png';
import { MdOutlineEmail, MdLocationPin, MdCall } from 'react-icons/md'

function AboutUs() {
    return (
        <>
            <div className="aboutus">
                <div className="aboutus-container container">
                    <div className="aboutus-wrapper">
                        <img className="img-yfi" src={yfi} alt="YouthForIndonesia" />
                        <p>Youth for Indonesia (YFI) is a social community engaged in various fields of knowledge with the aim of empowering young generation as agents of change for a better Indonesian society.
                            Youth For Indonesia also has many programs that will be given to selected young people as an effective step to improve Human Resources (HR), including; volunteer, education program, health program, and training
                            Therefore,
                            YFI present as a forum for the young generation of Indonesia and as the first step to change for a better Indonesia.</p>
                    </div>
                    <div className="form-wrapper">
                        <div className="form-row row">
                            <div className="contact-col col">
                                <form className='contact-form'>
                                    <h3>Contact Us</h3>
                                    <label>Full Name *</label>
                                    <input type="text" name="user_name" required />
                                    <br />
                                    <label>Email *</label>
                                    <input type="email" name="user_email" required />
                                    <br />
                                    <label>Message *</label>
                                    <textarea type="text" name="message" required />
                                    <br />
                                    <button className="form-button" type="submit">Send</button>
                                </form>
                            </div>
                            <div className="information-col col">
                                <div className="information-wrapper">
                                    <h3>Let's get in touch with Us</h3>
                                    <div className="information-section">
                                        <div className="information-section-logo">
                                            <MdOutlineEmail />
                                        </div>
                                        <label>youthforindonesia@gmail.com</label>
                                    </div>
                                    <div className="information-section">
                                        <div className="information-section-logo">
                                            <MdLocationPin />
                                        </div>
                                        <label>Jl. Lintas Sumbawa-Bima, Timu, Bolo, Bima, Nusa Tenggara Barat</label>
                                    </div>
                                    <div className="information-section">
                                        <div className="information-section-logo">
                                            <MdCall />
                                        </div>
                                        <label>+62 823 3904 2895</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs