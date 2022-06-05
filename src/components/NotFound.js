import React from 'react'
import '../css/notfound.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const notfoundAnimate = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: .1,
            staggerChildren: .3,
        }
    }
}
const notfoundItemAnimate = {
    hidden: {
        opacity: 0,
        y: "3rem"
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5
        }
    }
}
const NotFound = () => {
    return (
        <motion.div className='notfound-div'
            initial="hidden"
            animate="visible"
            variants={notfoundAnimate}>
            <motion.p className='rmv-mar-pad notfound-title'
                variants={notfoundItemAnimate}>Page not found :&#40;</motion.p>
            <motion.p className='notfound-subtitle'
                variants={notfoundItemAnimate}>The page you are looking for doesn't exist or has been moved.</motion.p>
            <motion.p className='notfound-subtitle'
                variants={notfoundItemAnimate}>Continue to <Link className=' emp-font-color' to="/">Homepage</Link></motion.p>
        </motion.div>
    )
}

export default NotFound