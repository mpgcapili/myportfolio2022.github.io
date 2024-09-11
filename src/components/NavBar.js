import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence, useAnimate, usePresence, useIsPresent, animate } from "framer-motion"

import { Link } from 'react-router-dom';


const NavItem = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (

        <motion.div
            // ref={scope} 
            onMouseEnter={() => setIsHovered(true)} onClick={() => setIsHovered(false)} onMouseLeave={() => setIsHovered(false)} className="relative  w-full flex flex-col  overflow-hidden ">
            <motion.div
                animate={isHovered ? { y: `-${props.movement}` } : { y: 0 }}
                transition={{ ease: "easeInOut" }}

            >{props.name}</motion.div>

            <motion.div
                initial={false}
                animate={isHovered ? { top: 0 } : { top: props.movement }}
                transition={{ ease: "easeInOut" }}
                className=" absolute">{props.name}</motion.div>
        </motion.div >
    )
}
const NavBar = () => {
    const [scope, animate] = useAnimate();
    const [isOpen, setIsOpen] = useState(false);
    // job is to remove if the navbar in mobile is open but we suddenly resize the width of browser
    useEffect(() => {
        function handleResize() {
            if (window.matchMedia("(min-width: 640px)").matches && isOpen) {
                setIsOpen(false);
                document.body.style.overflow = 'auto'
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [isOpen]);

    // disabling scroll when in mobile and navbar is open
    useEffect(() => {
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    }, [isOpen])



    // the navitem slider when in mobile component
    const NavList = () => {
        const [isPresent, safeToRemove] = usePresence()
        // check if this navlist slider is open or not
        useEffect(() => {
            if (isPresent) {
                const enterAnimation = async () => {
                    // animate("ul", { opacity: 1 }, { delay: .4 })
                    animate(scope.current, { height: "100%" }, { duration: .3 })
                    await animate("ul", { opacity: 1 })
                }
                enterAnimation()
            } else {
                const exitAnimation = async () => {
                    animate("ul", { opacity: 0 }, { duration: .1 })
                    // I dunno why do i need to put await before animate
                    await animate(scope.current, { height: 0 }, { duration: .25 })
                    safeToRemove()
                }

                exitAnimation()
            }
        }, [isPresent])
        return (
            <div ref={scope}
                className=" w-full fixed top-0 z-20 bg-white
                md:hidden ">
                <div className="flex flex-col h-full " >
                    <button className="flex justify-end p-5" onClick={() => setIsOpen(false)}><FiX className=" w-6 h-6" /></button>
                    <ul className="opacity-0 flex flex-col gap-14 pb-16 text-3xl h-full w-full justify-center items-center">
                        <li onClick={() => setIsOpen(false)}><Link to="/projects"><NavItem name="Projects" movement="2.75rem" /></Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to="/about"><NavItem name="About" movement="2.75rem" /></Link></li>
                        <li onClick={() => setIsOpen(false)}><Link to="/contact"><NavItem name="Contact" movement="2.75rem" /></Link></li>
                    </ul>
                </div>
            </div>
        )
    }


    return (
        <>
            <nav className="flex justify-between py-5 px-5 sticky top-0 bg-white z-10
            sm:justify-normal content-center
            md:px-28
           ">
                <div className="flex w-full h-full ">
                    <div className="text-lg font-semibold text-nowrap">
                        <Link className="sm:hidden" to="/">MC</Link>
                        <Link className="hidden sm:inline-block  w-full mr-20 " to="/">MIGUEL CAPILI</Link>
                    </div>
                    <div className="hidden sm:block">
                        <ul className="flex items-center gap-12 h-full">
                            <li><Link to="/projects"><NavItem name="Projects" movement="1.50rem" /></Link></li>
                            <li><Link to="/about"><NavItem name="About" movement="1.50rem" /></Link></li>
                            <li><Link to="/contact"><NavItem name="Contact" movement="1.50rem" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="sm:hidden">
                    <button onClick={() => setIsOpen(true)}><FiMenu className=" w-6 h-6 " /></button>
                </div>
            </nav >

            <AnimatePresence>
                {isOpen && (

                    <NavList />

                )}
            </AnimatePresence>
        </>)
}
export default NavBar;