import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../img/logo_yfi.png'
import './Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  let navigate = useNavigate();

  const showButton = () => {
    if (window.innerWidth <= 895) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changePage = () => {
    navigate('/about')
  }

  const backHome = () => {
    navigate('/')
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleClick = () => {
    setClick(!click);
  }
  const closeMenu = () => {
    setClick(false);
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else
      setNavbar(false);
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container container">
          <Link className="navbar-logo" onClick={backHome}>
            <img src={logo} alt="Logo" />
            Youth For Indonesia
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='programs' className='nav-links' spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu}>
                Programs
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='blog' className='nav-links' spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='galery' className='nav-links' spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='about' className='nav-links' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className='nav-items'>
              <button to='/contact' className='nav-btn' onClick={changePage}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar