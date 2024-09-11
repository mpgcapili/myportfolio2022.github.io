
import React, { Children, useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi";

export const H1 = ({ children }) => {
    return (
        <div className='text-2xl font-bold mt-14 mb-2 '>{children}</div>
    )
}
export const H2 = ({ children }) => {
    return (
        <div className='text-xl font-semibold mb-1'>{children}</div>
    )
}

export const H3 = ({ children }) => {
    return (
        <div className='text-base font-semibold mb-1'>{children}</div>
    )
}
export const ImgSubtitle = ({ children }) => {
    return (
        <div className='text-sm text-center text-gray-500 italic whitespace-pre-wrap'>{children}</div>
    )
}

export const Image = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const FullImage = (props) => {
        document.body.style.overflow = 'hidden'


        useEffect(() => {
            const handleEsc = (event) => {
                if (event.key === 'Escape') {
                    setIsOpen(false);
                }
            };
            window.addEventListener('keydown', handleEsc);
            // cleanup before removing the component, set first the overflow to auto
            return () => {
                window.removeEventListener('keydown', handleEsc);
                document.body.style.overflow = 'auto'
            }
        }, [isOpen])
        return (
            <>
                <div className='relative'>
                    <motion.div
                        animate={{ background: "rgba(0,0,0,.8)" }}
                        className='fixed top-0 left-0 w-screen h-screen z-30 px-6 overflow-auto flex flex-col'
                        onClick={() => setIsOpen(false)}
                    >
                        <div className=' flex w-full h-[50px] justify-end '>
                            <button><FiX onClick={() => setIsOpen(false)} className=" text-white  w-6 h-6" /></button>
                        </div>
                        <div className=' flex h-[90vh]  '>
                            <motion.img
                                onClick={(e) => e.stopPropagation()}
                                animate={{ opacity: 1 }}
                                loading='lazy'
                                src={props.src}
                                className={`w-full object-contain  ${props.classname}  `}
                            />
                        </div>
                    </motion.div >
                </div>
            </>
        )
    }
    // to control if there is a gap y axis of images
    const nogap = props.noGap ? "" : "my-2"

    return (
        <><div>
            <div onClick={() => setIsOpen(true)} className={`flex justify-center ${nogap} cursor-pointer`} >
                <motion.img
                    whileHover={{ scale: .96 }}
                    className={`${props.maxwidth} ${props.minwidth} ${props.classname}`} src={props.src} alt={props.alt} />
            </div >
            <ImgSubtitle>{props.subtitle}</ImgSubtitle>
        </div >

            {isOpen && (
                <FullImage src={props.src} classnam="h-[88px]" />
            )}
        </>
    )
}


export const P = ({ children }) => {
    return (
        <div className='mb-4'>{children}</div>
    )
}
