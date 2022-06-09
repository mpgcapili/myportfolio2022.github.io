import React from 'react'
import '../css/selectedprojects.css'
import '../css/projectitems.css'
import { motion } from 'framer-motion'
import ProjectItems from './ProjectItems';
import { Link } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery';
const appearWhileInViewAnimate = {
    hidden: {
        y: "3rem",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    },
}

const SelectedProjects = ({ projectitem }) => {

    const breakpoint500px = useMediaQuery('(min-width:501px)');

    return (
        <>
            <section className='works-container' id="works">
                <div className='selected-proj-div'>
                    <motion.p className='rmv-mar-pad ux-bg-text'
                        initial={{ x: "-3rem", opacity: 0 }}
                        whileInView={{ x: 0, opacity: .1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                    >UX</motion.p>
                    <motion.h2 className='rmv-mar-pad select-proj-title'
                        variants={appearWhileInViewAnimate}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            duration: 1
                        }}
                        viewport={{ once: true }}
                    >Selected Projects</motion.h2>
                    {projectitem.map((project, index) =>
                        <ProjectItems key={index} index={index} project={project} isBp500px={breakpoint500px} />
                    )}

                    <motion.p className='rmv-mar-pad ui-bg-text'
                        initial={{ x: "3rem", opacity: 0 }}
                        whileInView={{ x: 0, opacity: .1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                    >UI</motion.p>

                </div>
            </section>
        </>
    )
}

export default SelectedProjects