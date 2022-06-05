import { motion } from 'framer-motion';
import React from 'react'
import '../css/tools.css';

const tools = ['Visual Studio Code', 'Figma'];
const toolsIntroAnimate = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: .3,
            staggerChildren: .2
        }
    }
}

const toolsSubAnimate = {
    hidden: {
        opacity: 0,
        x: "3rem"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween"
            , ease: [0, .14, 0, .99]
        }
    }
}

const toolsItemAnimate = {
    hidden: {
        opacity: 0,
        y: "3rem"
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween"
            , ease: [0, .14, 0, .99]
        }
    }
}
const Tools = () => {
    return (
        <>
            <motion.section className='tools-div'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={toolsIntroAnimate}
            >
                <motion.h2 className='rmv-mar-pad tools-title'
                    variants={toolsSubAnimate}>Tools</motion.h2>
                <motion.p className='tools-intro'
                    variants={toolsSubAnimate}>Although these 2 are  my main tools in UI/UX and Front End Dev, I can learn pretty much anything when needed.</motion.p>
                <motion.div
                    variants={toolsItemAnimate}>
                    <ul className='skill-bullet-pt'
                    >
                        {tools.map((tools, index) => <li key={index}>{tools}</li>)}
                    </ul>
                </motion.div>
            </motion.section>
        </>

    )
}

export default Tools