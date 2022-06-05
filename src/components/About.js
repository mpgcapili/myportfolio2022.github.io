import React from 'react'
import '../css/about.css'
import MyPic from '../about-me-images/my-pic.jpg'
import { FiLinkedin } from "react-icons/fi";
import { motion } from 'framer-motion';

const appearWhileInViewAnimate = {
    hidden: {
        y: "3rem",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

const About = () => {
    return (
        <>
            <section className='about-container' id='about'>
                <div className='about-div rmv-mar-pad'>


                    <motion.h2 className='rmv-mar-pad about-title'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={appearWhileInViewAnimate}
                        transition={{
                            duration: 1
                        }}
                    >About Me</motion.h2>

                    <div className='about-me-div'>
                        <div className='image-div'>
                            <motion.img loading="lazy" className='image'

                                initial={{
                                    x: "-4rem",
                                    opacity: 0
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 1
                                }}
                                viewport={{ once: true }}
                                src={MyPic} alt="my-picture.jpg" />
                        </div>
                        <div className='about-me-details'>
                            <motion.div className='background'
                                initial={{ scale: .5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: .4 }}
                            >
                                <motion.p className='rmv-mar-pad name'

                                    variants={appearWhileInViewAnimate}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                    }}
                                >Hi, I'm Miguel</motion.p>
                            </motion.div>
                            <motion.div className='about-details'

                            >
                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={appearWhileInViewAnimate}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                        delay: .1
                                    }}>A Software Engineer with 4 years of experience. In those 4 years, I have been a back-end software engineer for a proprietary technology. </motion.p>
                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={appearWhileInViewAnimate}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                        delay: .2
                                    }}>I am a self-taught <strong className='emp-font-color'>UI/UX Designer</strong> and <strong className='emp-font-color'>Front-end Developer</strong> that based on Philippines. </motion.p>
                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={appearWhileInViewAnimate}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                        delay: .3
                                    }}>I love designing, coding, and learning, that is why on April of this year 2022, I started to get serious to learn and <strong className='emp-font-color'>specialize my skills in Front-End Development and specially, in UI/UX Designing.</strong></motion.p>
                                <motion.div
                                    variants={appearWhileInViewAnimate}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                        delay: .4
                                    }}
                                >
                                    <FiLinkedin className='linkedin-icon' />
                                </motion.div>
                            </motion.div>


                        </div>

                    </div>

                    <motion.p className='rmv-mar-pad reactjs-bg-text'
                        initial={{ x: "3rem", opacity: 0 }}
                        whileInView={{ x: 0, opacity: .1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                    >REACT.JS</motion.p>
                </div >
            </section>
        </>
    )
}

export default About