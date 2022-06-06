import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import '../css/scrolldown.css'

import { useState, useCallback, useRef } from 'react';
import { CgArrowLongDown } from "react-icons/cg";
import { MdOpacity } from 'react-icons/md';

const Scrolldown = ({ passRef }) => {

    const [isVisib, setIsVisib] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisib(entry.isIntersecting)
        }, { threshold: 1 })
        observer.observe(passRef.current)
        return () => observer.unobserve(passRef.current)
    }, [])



    return (
        <>
            {/* {!isVisib && */}
            <div className='scroll-down-div'>
                <motion.div className='scroll-down'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isVisib ? 0 : 1 }}
                    transition={{ duration: .5 }}
                >

                    <p className='scroll-text'>Scroll</p>
                    <motion.div className='scroll-icon-animation-div'
                        initial={{ y: "-1rem" }}
                        animate={{ y: 0 }}
                        transition={{ repeat: Infinity, duration: .8, repeatType: "reverse" }}
                    >
                        <CgArrowLongDown className='scroll-icon' />
                    </motion.div>
                </motion.div>
            </div>
            {/* } */}
        </>
    )
}

export default Scrolldown