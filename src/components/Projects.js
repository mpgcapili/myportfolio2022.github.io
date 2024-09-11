import React from "react";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";




//es6 no return statement because after the => its assume that the fucntion will return it
const adminUpProps = {
    title: "Admin UI", link: "/projects/adminui", desc: "Website that handles Database schemas, views, agents, etc.", year: "2023 - 2024", pos: "UI/UX Designer"
    , btnsettings: {
        textcolor: "text-white",
        // text
    }
}
const di = { title: "Design Import", link: "/projects/designimport", desc: "A wizard that converts application's old version to new version", year: "2023", pos: "UI/UX Designer" }
const qs = { title: "QuickStart", link: "/projects/quickstart", desc: "A website that manages server's settings", year: "2023 ", pos: "UI/UX Designer" }
const qsmobile = { title: "QS Mobile", link: "/projects/qsmobile", desc: "QuickStart's mobile version", year: "2024", pos: "UI/UX Designer" }
const personal = { title: "Digital Art", link: "/projects/personalartwork", desc: "My Personal Digital Artworks", year: "2021 - Present ", pos: "Digital Artist" }

const Projects = () => {

    return (

        <>
            <motion.ul
                className="flex flex-col gap-5 items-center mx-5 mt-4
            *:w-full *:min-w-[360px] *:h-[344px] *:rounded-[20px] *:p-10 
            md:mx-16 "

            >
                <motion.li
                    initial={{ backgroundSize: "110%", }}
                    whileHover={{ backgroundSize: "100%", opacity: 1 }}
                    className="bg-admin-ui bg-center bg-cover bg-no-repeat 
                sm:bg-admin-ui-sm
                relative ">

                    <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-opacity-50 bg-[#140729] p-10 text-white">
                        <ProjectItem {...adminUpProps} />
                    </div>
                    {/* <ProjectItem {...adminUpProps} /> */}
                </motion.li>


                <motion.li
                    initial={{ backgroundSize: "118%", }}
                    whileHover={{ backgroundSize: "100%", opacity: 1 }}
                    className="bg-di bg-center bg-cover bg-no-repeat 
                sm:bg-di-sm
                relative ">

                    <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-opacity-50 bg-[#000000] p-10 text-white">
                        <ProjectItem {...di} />
                    </div></motion.li>

                <motion.li
                    initial={{ backgroundSize: "118%", }}
                    whileHover={{ backgroundSize: "100%", opacity: 1 }}
                    className="bg-qsmockup bg-center bg-cover bg-no-repeat 
                sm:bg-qsmockup-sm
                relative ">

                    <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-opacity-50 bg-[#212741] p-10 text-white">
                        <ProjectItem {...qs} />
                    </div></motion.li>
                {/* <motion.li className="bg-gray-50"><ProjectItem {...qs} /></motion.li> */}

                <motion.li
                    initial={{ backgroundSize: "118%", }}
                    whileHover={{ backgroundSize: "100%", opacity: 1 }}
                    className="bg-qsmobile bg-center bg-cover bg-no-repeat 
                sm:bg-qsmobile-sm
                relative ">

                    <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-opacity-50 bg-[#212741] p-10 text-white">
                        <ProjectItem {...qsmobile} />
                    </div></motion.li>


            </motion.ul >

            <div className="mx-5 md:mx-16 text-4xl mt-12 font-semibold">Personal Life</div>
            <motion.ul
                className="flex flex-col gap-5 items-center mx-5 mt-4
            *:w-full *:min-w-[360px] *:h-[344px] *:rounded-[20px] *:p-10 
            md:mx-16 "

            >
                <motion.li
                    initial={{ backgroundSize: "130%", }}
                    whileHover={{ backgroundSize: "110%", opacity: 1 }}
                    className="bg-womanmockup bg-right bg-cover bg-no-repeat 
                sm:bg-womanmockup-sm
                relative ">

                    <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-opacity-50 bg-[#181218] p-10 text-white">
                        <ProjectItem {...personal} />
                    </div></motion.li>

                {/* <li><ProjectItem {...foundry} /></li> */}

            </motion.ul >
        </>
    )
}


export default Projects;