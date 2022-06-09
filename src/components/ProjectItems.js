import React from 'react'
import '../css/projectitems.css'
import { BsArrowRight, BsFillLockFill } from "react-icons/bs";
import { motion } from 'framer-motion';
import { useState } from 'react'
import DocumentItemContainer from './DocumentItemContainer';

const projImageAnimate = {
    hover: { scale: 1.1 },
    transition: {
        type: "tween",
        duration: .2
    }
}

const selectProjAnimate = {
    hover: {
        scale: .98,
        transition: {
            type: "tween",
            duration: .2
        }
    },
    hidden: { opacity: 0, scale: .5 },
    visible: { opacity: 1, scale: 1 }
}
const seeMoreHoverAnimate = {
    seeMoreIcon: { rotate: -35 }
}

const ProjectItems = ({ project, isBp500px, index }) => {

    const [isDocItemShow, setIsDocItemShow] = useState(false);
    console.log("isDocItemShow", isDocItemShow)
    return (
        <>
            {isDocItemShow &&
                <>
                    <DocumentItemContainer index={index} showDocItem={isdocitemshow => setIsDocItemShow(isdocitemshow)} />
                </>
            }

            <motion.div className='project-item-div'
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                style={{ cursor: project.isLocked ? "default" : "pointer" }}
                variants={selectProjAnimate}
                onClick={() => project.isLocked ? null : setIsDocItemShow(true)}
            >
                {/* show locked icon if islocked is false  */}
                {project.isLocked &&
                    <>
                        <div className='locked-div'>
                            <div className='locked-icon-div'>
                                <BsFillLockFill className='lock-icon' />
                                <p className='locked-text'>Locked</p>
                            </div>
                        </div>
                    </>
                }
                <div className='web-pic-div'>

                    {/* show image if div islocked is false  */}
                    {!project.isLocked &&
                        <div className='web-pic-overview-container'>
                            <motion.img className='web-pic-overview' src={`${project.imageName}`} alt="home.png"
                                variants={projImageAnimate}
                                transition="transition"
                            />
                        </div>
                    }
                    {/* show coming soon if div false */}
                    {project.isLocked &&
                        <div className='coming-soon'>
                            <h2>Coming Soon :&#41;</h2>
                        </div>
                    }
                </div>
                <div className='web-details'>
                    <div className='subtitle-title'>
                        <p className='rmv-mar-pad proj-title'>{project.title}</p>
                        <p className='rmv-mar-pad proj-subtitle'>{project.subtitle}</p>
                    </div>
                    {isBp500px &&
                        <>
                            <div className='overview-div'>
                                <p className='rmv-mar-pad proj-overview'>{project.overview}</p>
                            </div>
                            <div className='proj-see-more-div'>
                                <motion.div
                                    whileHover={"seeMoreIcon"}
                                >
                                    <p className='rmv-mar-pad proj-see-more emp-font-color'>See more</p>
                                    <motion.div
                                        variants={seeMoreHoverAnimate}>
                                        <BsArrowRight className='emp-font-color' />
                                    </motion.div>
                                </motion.div>
                            </div></>}
                </div>

            </motion.div>

        </>
    )
}

export default ProjectItems