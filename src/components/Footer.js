import React from 'react'
import '../css/footer.css'
import { Link } from 'react-scroll';

const Footer = () => {

    return (
        <>

            <footer className='footer-div'>

                <div className='first-footer-sec-div'>
                    <ul className='first-footer-sec'>
                        <li><Link to="home" spy={true} smooth={true} offset={-500} duration={500} className='rmv-ul-link main-font-color add-hover-link' >Home</Link></li>
                        <li><Link to="works" spy={true} smooth={true} offset={-70} duration={500} className='rmv-ul-link main-font-color add-hover-link' >Works</Link></li>
                        <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} className='rmv-ul-link main-font-color add-hover-link' >About</Link></li>
                    </ul>
                </div>
                <div className='footer-nav'>

                    <div className='second-footer-sec'>
                        <p className='rmv-mar-pad'><strong>Miguel Paulo Capili</strong></p>
                        <p className='rmv-mar-pad'>UI/UX Designer</p>
                        <p className='rmv-mar-pad'>Front-End Developer</p>
                        <p className='rmv-mar-pad'>mpgcapili@gmail.com</p>
                    </div>
                    <div className='third-footer-sec'>
                        <p className='rmv-mar-pad'>All rights reserved</p>
                        <p className='rmv-mar-pad'>Designed and Developed by me</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer