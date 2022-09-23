import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../img/logo_yfi.png'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTiktok
} from 'react-icons/fa'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container container">
                    <hr />
                    <div className="footer-wrapper">
                        <div className="footer-links">
                            <div className="footer-link-items">
                                <h2>Insights</h2>
                                <Link to='/'>News</Link>
                                <Link to='/'>Blog</Link>
                                <Link to='/'>Gallery</Link>
                            </div>
                            <div className="footer-link-items">
                                <h2>Legal</h2>
                                <Link to='/'>Terms of Use</Link>
                                <Link to='/'>Privacy Policy</Link>
                            </div>
                            <div className="footer-link-items">
                                <h2>Youth For Indonesia</h2>
                                <Link to='/'>Contact Us</Link>
                                <Link to='/'>About Us</Link>
                                <Link to='/'>Ambassadors</Link>
                            </div>
                            <div className="footer-link-items">
                                <h2>Social Media</h2>
                                <Link to='/'>Instagram</Link>
                                <Link to='/'>Facebook</Link>
                                <Link to='/'>Youtube</Link>
                                <Link to='/'>Tiktok</Link>
                            </div>
                        </div>
                    </div>
                    <section className='social-media'>
                        <div className="social-media-container">
                            <div className="footer-logo">
                                <img src={logo} alt='logo' />
                                Youth For Indonesia
                            </div>
                            <small className='copyright'>YOUTH FOR INDONESIA © 2022</small>
                            <div className="social-media-icons">
                                <Link className='social-media-link' to='/' target='_blank' aria-label='Facebook'>
                                    <FaFacebook />
                                </Link>
                                <Link className='social-media-link' to='/' target='_blank' aria-label='Facebook'>
                                    <FaYoutube />
                                </Link>
                                <Link className='social-media-link' to='/' target='_blank' aria-label='Facebook'>
                                    <FaInstagram />
                                </Link>
                                <Link className='social-media-link' to='/' target='_blank' aria-label='Facebook'>
                                    <FaTiktok />
                                </Link>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Footer