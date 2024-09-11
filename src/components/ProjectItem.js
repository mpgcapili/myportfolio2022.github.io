import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { color, motion, useAnimate } from "framer-motion";

// import mockup from "../../public/Admin UI mockup desktop.jpg"




//es6 no return statement because after the => its assume that the fucntion will return it

const ProjectItem = (props) => {
    const btnendcolor = props.btnendcolor;
    const [scope, animate] = useAnimate();

    const btnhover = (ismouseenter) => {

        animate("#bghover", { scale: ismouseenter ? 7 : 1 }, { duration: .3 })
        animate(scope.current, { color: ismouseenter ? "#000000" : "#FFFFFF" })

    }
    return (
        <>
            <div className={`h-full flex flex-col justify-between`}  >
                <div className="flex flex-col gap-1">
                    <span className="text-[14px] flex items-center gap-2 font-extralight text-gray-100">{props.year} <GoDotFill /> {props.pos}</span>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-4xl font-bold ">{props.title}</h2>
                        <p>{props.desc}</p>
                    </div>
                </div>
                <div className="flex justify-start ">
                    <motion.button
                        ref={scope}
                        className={`rounded-[50px] ring-1 ring-white`}
                        onMouseEnter={() => btnhover(true)}
                        onMouseLeave={() => btnhover(false)}  >
                        <div className="relative rounded-[50px] z-10 overflow-hidden">

                            <Link className="  flex justify-center px-6 py-3 " to={props.link}>Learn more</Link>

                            <motion.div id="bghover" className="bg-white absolute w-[50px] h-[50px] left-[-65px] top-0 -z-10 rounded-[50px]"></motion.div>
                        </div>
                    </motion.button>
                </div>
                {/* <div className=" ">
                    <img src={mockup} alt="" />
                </div> */}
            </div >
        </>
    )
}


export default ProjectItem;