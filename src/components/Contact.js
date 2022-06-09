import { motion } from 'framer-motion';
import React, { useState } from 'react'
import '../css/contact.css';


const contactDivAnimate = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: .3,
            staggerChildren: .3,
        }
    }
}
const contactItemAnimate = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const EndTag = () => {
    return (
        <>
            <div className='ending-tag'>
                <motion.div className='lt'
                    initial={{ x: "-3rem", opacity: 0 }}
                    whileInView={{ x: 0, opacity: .1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}>&lt;</motion.div>
                <motion.div className='slash'
                    initial={{ y: "3rem", opacity: 0 }}
                    whileInView={{ y: 0, opacity: .1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}>&frasl;</motion.div>
                <motion.div className='gt'
                    initial={{ x: "3rem", opacity: 0 }}
                    whileInView={{ x: 0, opacity: .1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}>&gt;</motion.div>


            </div>
        </>
    )
}

const Contact = () => {
    const [isEmailCopied, setIsEmailCopied] = useState(false);

    const CopiedEmailIndicator = () => {
        console.log(isEmailCopied);
        return (

            <>

                <div className='email-copy-div'>
                    <div className='email-copy-bg'>
                        <p className='rmv-mar-pad email-copy-text'>Email was copied to clipboard</p>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>

            <div className='ctact-div' id='contact'>
                {/* @todo: uncomment if we are fixing responsive design part */}
                {/* <EndTag /> */}
                <motion.section className='contact-div'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={contactDivAnimate}
                >

                    <motion.h2 className='rmv-mar-pad emp-font-color contact-title'
                        variants={contactItemAnimate}>Let's Connect!</motion.h2>
                    <motion.p
                        variants={contactItemAnimate}>I am looking for a full time opportunity to apply all the skills I have acquired and learned on a professional setting. Hope to work with you in the future :&#41;</motion.p>

                    <motion.p
                        variants={contactItemAnimate}
                    >Connect to me thru <a className=' emp-font-color' href="https://www.linkedin.com/in/m-p-c/" rel="noreferrer" target="_blank"><strong>LinkedIn</strong></a> or to my e-mail: <span className='emp-font-color email-copy'
                        onClick={() => {
                            navigator.clipboard.writeText("mpgcapili@gmail.com")
                            setIsEmailCopied(true);
                            setTimeout(() => setIsEmailCopied(false), 1500)
                            // 
                        }} ><strong>mpgcapili@gmail.com</strong></span></motion.p>



                </motion.section>
                {isEmailCopied &&
                    <>
                        <CopiedEmailIndicator />
                    </>
                }
            </div>

        </>

    )
}

export default Contact