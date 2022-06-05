import React from 'react'
import '../css/loading.css';
import { motion } from 'framer-motion';

const loadingDivAnimate = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            // type: "tween"
            // , repeat: Infinity
            // , ease: [0, .14, 0, .99],
            delayChildren: .1,
            staggerChildren: .1
        }
    }
}

const loadingItemAnimate = {
    hidden: {
        opacity: 0,
        // scale: 1
    },
    visible: {
        opacity: 1,
        // scale: 2,
        transition: {
            type: "tween"
            , repeat: Infinity
            , repeatType: "mirror"
            , ease: [0, .14, 0, .99]
            , duration: 1.3
        }
    }
}
const Loading = () => {
    return (
        <motion.div className='loading-div'
            initial="hidden"
            animate="visible"
            variants={loadingDivAnimate}
        >
            <motion.h2 className='letters' variants={loadingItemAnimate}>L</motion.h2>
            <motion.h2 className='letters' variants={loadingItemAnimate}>O</motion.h2>
            <motion.h2 className='letters' variants={loadingItemAnimate}>A</motion.h2>
            <motion.h2 className='letters' variants={loadingItemAnimate}>D</motion.h2>
            <motion.h2 className='letters' variants={loadingItemAnimate}>I</motion.h2>
            <motion.h2 className='letters' variants={loadingItemAnimate}>N</motion.h2>
            <motion.h2 className='letters' variants={loadingItemAnimate}>G</motion.h2>
        </motion.div>
    )
}

export default Loading