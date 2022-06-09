import React from 'react'
import '../css/webdesignformula.css';
import { MdDevices, MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineRocket } from "react-icons/ai";
import { motion } from 'framer-motion';
import { RiEmotionHappyLine } from "react-icons/ri";

const iconAnimate = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: .2,
            staggerChildren: .3
        }
    }
}

const iconEachAnimate = {
    hidden: { opacity: 0, y: "3rem" },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween"
            , ease: [0, .14, 0, .99],
            delayChildren: .1,
            staggerChildren: .1
        }
    }
}

const iconsubanimation = {
    hidden: { opacity: 0, y: "3rem" },
    visible: {
        opacity: 1, y: 0,
        transition: {

            type: "tween",
            ease: [0, .14, 0, .99],
            duration: 1
        }

    }

}
const WebDesignFormula = () => {

    return (
        <>
            <section className='web-des-div'>
                <motion.p className='rmv-mar-pad html-bg-text'
                    initial={{ x: "-3rem", opacity: 0 }}
                    whileInView={{ x: 0, opacity: .1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                >HTML</motion.p>
                <motion.h2 className='rmv-mar-pad web-des-title'
                    initial={{
                        x: "3rem",
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}>Web Design Formula</motion.h2>
                <motion.p className='web-des-subtitle'
                    initial={{
                        x: "3rem",
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .5 }}>The formula I always use when designing and creating a websites/app :&#41;</motion.p>
                <motion.div className='web-des-formula'
                    variants={iconAnimate}

                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className='responsive web-des-size web-des-flex '
                        variants={iconEachAnimate}
                    >
                        <MdDevices className='web-des-icons' />
                        <motion.p className='rmv-mar-pad responsive-title'
                            variants={iconsubanimation}
                        >Responsive</motion.p>
                        <motion.p className='rmv-mar-pad responsive-text'

                            variants={iconsubanimation}>My aim is to create a web
                            that works on most devices</motion.p>
                    </motion.div>
                    <motion.div className='intuitive web-des-size web-des-flex '
                        variants={iconEachAnimate}>
                        <RiEmotionHappyLine className='web-des-icons' />
                        <motion.p className='rmv-mar-pad intuitive-title'

                            variants={iconsubanimation}>Intuitive</motion.p>
                        <motion.p className='rmv-mar-pad intuitive-text'

                            variants={iconsubanimation}>Easy to use website, makes user happy</motion.p>
                    </motion.div>
                    <motion.div className='great-ui web-des-size web-des-flex '
                        variants={iconEachAnimate}>
                        <MdOutlineDesignServices className='web-des-icons' />
                        <motion.p className='rmv-mar-pad great-ui-title'

                            variants={iconsubanimation}>Great UI</motion.p>
                        <motion.p className='rmv-mar-pad great-ui-text'

                            variants={iconsubanimation}>Every website should be pretty.</motion.p>
                    </motion.div>
                    <motion.div className='fast web-des-size web-des-flex '
                        variants={iconEachAnimate}>
                        <AiOutlineRocket className='web-des-icons' />
                        <motion.p className='rmv-mar-pad fast-title'

                            variants={iconsubanimation}>Fast</motion.p>
                        <motion.p className='rmv-mar-pad fast-text'

                            variants={iconsubanimation}>We don’t want our user to wait right? :&#41; </motion.p>
                    </motion.div>
                </motion.div>
            </section>

        </>
    )
}

export default WebDesignFormula