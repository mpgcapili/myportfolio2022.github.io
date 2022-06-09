import { motion } from 'framer-motion';
import React from 'react'
import '../css/skills.css'
const design = ['Web UI/UX', 'Design Systems', 'Animation (Framer motion)'];
const development = ['HTML / CSS / JS(ES6+)', 'Responsive Layout', 'React.JS', 'Framer Motion', 'Styled Component', 'PL/SQL / SQL', 'Avaloq Script', 'CCM DocDesign'];
const softSkills = ['Team Lead', 'Teamwork', 'Active Listening', 'Willingnes and ability to learn', 'Communication', 'Initiative', 'Time management', 'Critical thinking'];

const skillsIntroAnimate = {
    hidden: {
        x: "3rem",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}

const actualSkillsDivAnimate = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: .8,
            staggerChildren: .2,
        }
    }
}

const actualSkillsAnimate = {
    hidden: {
        opacity: 0,
        y: "3rem"
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween"
            , ease: [0, .14, 0, .99]
        }

    }
}
const Skills = () => {
    return (
        <>

            <section className='about-container'>
                <div className='skills-div'>

                    <motion.p className='rmv-mar-pad css-bg-text'
                        initial={{ x: "3rem", opacity: 0 }}
                        whileInView={{ x: 0, opacity: .1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                    >CSS</motion.p>
                    <motion.h2 className=' rmv-mar-pad skills-title'
                        initial="hidden"
                        whileInView="visible"
                        variants={skillsIntroAnimate}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}>Skills</motion.h2>
                    <div className='skills-intro'>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            variants={skillsIntroAnimate}
                            viewport={{ once: true }}
                            transition={{ duration: .8, delay: .3 }}>Below are the summarized version of my skills, even though the skills in regards with UI/UX and Front End Development are, if I’m to assess my skills, categorized in Beginner’s Level, I’m not stopping(and will never be!) discovering new learnings that will further enhance my knowledge/skills and become more confident and specialized in this field.
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            variants={skillsIntroAnimate}
                            viewport={{ once: true }}
                            transition={{ duration: .8, delay: .5 }}>
                            You can <a className='emp-font-color' href="./Resume - Miguel Paulo G. Capili.docx" rel="noreferrer" target="_blank"><strong>Download my Resume</strong></a> or visit my <a className=' emp-font-color' href="https://www.linkedin.com/in/m-p-c/" rel="noreferrer" target="_blank"><strong>LinkedIn</strong></a>  to know more!</motion.p>
                    </div>
                    <motion.div className='actual-skills'
                        initial="hidden"
                        whileInView="visible"
                        variants={actualSkillsDivAnimate}
                        viewport={{ once: true }}
                    >
                        <motion.div className='design'
                            variants={actualSkillsAnimate}>
                            <p className='rmv-mar-pad design-title'>Design</p>
                            <ul className='skill-bullet-pt'>
                                {design.map((des, index) => <li key={index}>{des}</li>)}
                            </ul>
                        </motion.div>
                        <motion.div className='development'
                            variants={actualSkillsAnimate}>
                            <p className='rmv-mar-pad development-title'>Development</p>
                            <ul className='skill-bullet-pt'>
                                {development.map((dev, index) => <li key={index}>{dev}</li>)}
                            </ul>
                        </motion.div>
                        <motion.div className='soft-skills'
                            variants={actualSkillsAnimate}>
                            <p className='rmv-mar-pad softskills-title'>Soft Skills</p>
                            <ul className='skill-bullet-pt'>
                                {softSkills.map((softskills, index) => <li key={index}>{softskills}</li>)}
                            </ul>
                        </motion.div>
                    </motion.div>

                </div>
            </section>
        </>
    )
}

export default Skills