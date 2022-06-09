import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import '../css/menumodal.css';
import { MdClose } from "react-icons/md";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MenuModal = ({ showMenuModal, mainref }) => {

    const theme = useTheme();
    const breakpointMd = useMediaQuery(theme.breakpoints.up('md')); //min-width 900px

    const bodyElement = document.querySelector('body');
    const htmlElement = document.querySelector('html');
    bodyElement.className = "disable-scroll-main"
    htmlElement.className = "enable-smooth-scroll"


    function closeMenuModal() {
        bodyElement.classList = "enable-scroll-main";
        htmlElement.className = "disable-smooth-scroll"
        showMenuModal(false);
    }

    function clickedLink(divIdElement) {
        bodyElement.classList = "enable-scroll-main";
        const offset = document.querySelector(divIdElement).offsetTop + (-70)

        window.scrollTo({ top: offset })
        htmlElement.className = "disable-smooth-scroll"
        showMenuModal(false);

    }
    const menuModalListAnimate = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: .1,
                staggerChildren: .1
            }

        }
    }
    const menuModalItemAnimate = {
        hidden: {
            opacity: 0,
            x: "3rem"
        },
        visible: {
            opacity: 1,
            x: 0
        }
    }
    useEffect(() => {
        if (breakpointMd)
            closeMenuModal();
    }, [breakpointMd])
    return (
        <>
            <motion.div className='menu-modal'
            >
                <MdClose className='close-icon' onClick={closeMenuModal} />
                <motion.ul className='menu-modal-items-list'
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={menuModalListAnimate}
                >
                    <motion.li variants={menuModalItemAnimate} className='menu-modal-item' onClick={() => clickedLink("#home")}> <motion.div whileHover={{ y: "-1.5rem" }}>Home</motion.div> </motion.li>
                    <motion.li variants={menuModalItemAnimate} className='menu-modal-item' onClick={() => clickedLink("#works")}><motion.div whileHover={{ y: "-1.5rem" }}>Works</motion.div></motion.li>
                    <motion.li variants={menuModalItemAnimate} className='menu-modal-item' onClick={() => clickedLink("#about")}><motion.div whileHover={{ y: "-1.5rem" }}>About</motion.div></motion.li>
                    <motion.li variants={menuModalItemAnimate} className='menu-modal-item' onClick={() => clickedLink("#contact")}><motion.div whileHover={{ y: "-1.5rem" }}>Contact</motion.div></motion.li>
                </motion.ul>
            </motion.div>

        </>
    )
}

export default MenuModal