import React from 'react';
import { Link } from 'react-scroll';
import '../css/homepage.css';
import { BsArrowRight } from "react-icons/bs";
import { motion } from 'framer-motion';


const sayHelloAnimate = {
    hover: {
        rotate: 35
    }
}


const Homepage = () => {
    console.log("rendering homepge")
    return (

        <motion.section className='main-title-div' id='home'>
            <div className='main-title'>
                <motion.div
                    className='designer'
                    initial={{
                        x: "10rem"
                        , opacity: 0
                    }}
                    whileInView={{
                        x: 0
                        , opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1
                        , ease: [0, .14, 0, .99]
                    }}>DESIGNER

                </motion.div>

                <motion.div
                    className='programmer'
                    initial={{
                        x: "-10rem"
                        , opacity: 0
                    }}
                    whileInView={{
                        x: 0
                        , opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1
                        , ease: [0, .14, 0, .99]
                    }}><span className='programmer-mdf'>PROGRAMME</span>R
                </motion.div>

                <motion.div
                    className='motto'
                    initial={{
                        y: "3rem"
                        , opacity: 0
                    }}
                    whileInView={{
                        y: 0
                        , opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1
                        , ease: [0, .14, 0, .99]
                        , delay: .9
                    }}
                ><span className='motto-mdf'>SOLVING REAL LIFE PROBLEMS USING <span className='emp-font-color '>DESIGN</span> AND <span className='emp-font-color '>CODIN</span></span><span className='emp-font-color '>G</span></motion.div>

                <motion.div className='say-hello-div'
                    initial={{
                        opacity: 0
                        , scale: .8,
                    }}
                    viewport={{ once: true }}
                    whileInView={{
                        opacity: 1
                        , scale: 1,
                    }}
                    transition={{
                        delay: 1
                        , duration: 1
                        , ease: [0, .14, 0, .99]
                    }}>
                    <Link to="works" spy={true} smooth={true} offset={-70} duration={1000} className='rmv-ul-link main-font-color add-hover-link' >
                        <motion.div className='say-hello'
                            whileHover="hover"
                        >
                            <p className='emp-font-color'>Get Started </p>
                            <motion.div
                                style={{ display: "flex", alignItems: "center" }}
                                variants={sayHelloAnimate}
                            >
                                <BsArrowRight className='emp-font-color' />
                            </motion.div>

                        </motion.div>
                    </Link>

                </motion.div>
            </div>
            <motion.div
                className='ampersand'
                initial={{
                    scale: .8,
                }}
                whileInView={{
                    scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 1
                    , ease: [0, .14, 0, .99]
                }}
            >&#38;</motion.div>

        </motion.section >

    )
}

export default Homepage