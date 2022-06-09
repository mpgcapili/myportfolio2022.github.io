import React, { useRef } from 'react'
import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import '../css/navigation.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuModal from './MenuModal';



const navItemAnimate = {

    visible: {
        opacity: 1
    },
    exit: {
        opacity: 0,
        x: "3rem",
        scale: 0,
    }
}

const Navigation = ({ isShowMenu, mainRef, homepageRef }) => {
    const theme = useTheme();
    const [showModal, setShowModal] = useState(false);
    const breakpointMd = useMediaQuery(theme.breakpoints.up('md')); //min-width 900px

    const [y, setY] = useState(0);
    const [isScrollUp, setIsScrollUp] = useState(true);

    const handleScrollListener = useCallback((e) => {
        const yPos = window.scrollY // get the current position
        const isScrollingUp = yPos <= y // check if the position is scrolled yPos <= y means scrolled up

        setY(window.scrollY) //set the current value of scroll position
        setIsScrollUp(isScrollingUp) //set if true or false
    }, [y]); //will run if the y is changed.

    useEffect(() => {

        window.addEventListener("scroll", handleScrollListener);
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times, also always do this to aviod creating more memory.
            window.removeEventListener("scroll", handleScrollListener);
        };
    }, [handleScrollListener]);//only run if and only if the handlescroller is changed.

    const [isVisib, setIsVisib] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisib(entry.isIntersecting)
        }, { threshold: .2 })
        observer.observe(homepageRef.current)
        return () => observer.unobserve(homepageRef.current)
    }, [])
    // console.log("isVisib", isVisib)
    // console.log("isScrollUp", isScrollUp)


    return (

        <>
            {showModal &&
                <>
                    <motion.div
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        exit={{
                            opacity: 0,
                            scale: 0,
                        }}
                    >

                        <MenuModal showMenuModal={isshowmodal => setShowModal(isshowmodal)} mainref={mainRef} />
                    </motion.div>
                </>
            }

            <motion.nav id='nav'
                initial={{ y: isVisib ? 0 : isScrollUp ? 0 : "-10vh", opacity: 0 }}
                whileInView={{
                    // y: "1vh",
                    y: isVisib ? 0 : isScrollUp ? 0 : "-10vh",
                    // y: isScrollUp ? 0 : isVisib ? 0 : "-10vh",
                    opacity: isVisib ? 1 : isScrollUp ? 1 : 0
                    // opacity: isScrollUp ? 1 : isVisib ? 1 : 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: .2 }}
            >
                <ul className='header-nav'>
                    <li className='main-head'>
                        <h1>Miguel <span className='emp-font-color'>Capili</span></h1>
                    </li>
                    <li className='main-nav'>
                        <AnimatePresence>
                            {breakpointMd &&
                                <motion.ul className='main-nav-list'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                >

                                    <motion.li
                                        animate="visible"
                                        exit="exit"
                                        variants={navItemAnimate}

                                    ><Link to="home" spy={true} smooth={true} offset={-500} duration={500} className='rmv-ul-link main-font-color add-hover-link' >Home</Link></motion.li>
                                    <motion.li
                                        animate="visible"
                                        exit="exit"
                                        variants={navItemAnimate}><Link to="works" offset={-70} spy={true} smooth={true} duration={500} className='rmv-ul-link main-font-color add-hover-link' >Works</Link></motion.li>
                                    <motion.li
                                        animate="visible"
                                        exit="exit"
                                        variants={navItemAnimate}><Link to="about" offset={-70} spy={true} smooth={true} duration={500} className='rmv-ul-link main-font-color add-hover-link' >About</Link></motion.li>
                                    <motion.li
                                        animate="visible"
                                        exit="exit"
                                        variants={navItemAnimate}
                                    ><Link to="contact" offset={-70} spy={true} smooth={true} duration={500} className='rmv-ul-link main-font-color add-hover-link' >Contact</Link></motion.li>
                                </motion.ul>}
                        </AnimatePresence>
                        <AnimatePresence>
                            {!breakpointMd &&
                                <>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: {
                                                delay: .3
                                            }
                                        }}
                                        onClick={() => { setShowModal(true) }}
                                        // onClick={() => {
                                        //     ref.current = true;
                                        //     console.log("logs ", ref.current)
                                        // }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <GiHamburgerMenu className='menu-icon' />
                                    </motion.div></>}
                        </AnimatePresence>
                    </li>
                </ul>
            </motion.nav >
        </>
    )
}

export default Navigation