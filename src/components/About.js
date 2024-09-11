import React from "react";
import { BsLinkedin } from "react-icons/bs";
import pp from "../pp1st.jpg"



//es6 no return statement because after the => its assume that the fucntion will return it
const About = () =>
    <>
        <div className="flex flex-col items-center mx-5">
            <div className=" flex flex-col justify-start gap-5 items-center
            w-[320px]
            sm:w-[550px] 
            md:w-[640px] md:items-start">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-start gap-4">
                        <div className="w-[320px] h-[400px]">
                            <img className="w-full h-full" src={pp} alt="profile" />
                        </div>
                        <div className="hidden
                        md:text-8xl md:font-bold md:block">
                            <p>HI,</p>
                            <p>I'M</p>
                            <p>MIGO</p>
                        </div>
                    </div>
                    <div >
                        <a href="https://www.linkedin.com/in/m-p-c/" target="_blank" rel="noopener noreferrer"> <BsLinkedin className="w-6 h-6 text-[#0A66C2]" /></a>

                    </div>
                </div>
                <div>
                    <p className="font-semibold text-xl
                md:hidden
                ">HI, IM MIGO</p>

                    <br />
                    <p><b>UI/UX Designer</b> based in Philippines.</p>
                    <br />
                    <p> I have a <b>passion for creative works</b>, that is why even though I am a software engineer by profession, I now pursue UI/UX Design as a full time career.</p>
                    <br />
                    <p>My aim is to <b>create a realistic design</b> that is why I equipped myself with knowledge of the basic web development: <b>HTML, CSS, and Javascript(React.js)</b>.</p>
                    <br />
                    <p>I also learned some CSS frameworks like <b>Tailwind</b>.</p>

                    <br />
                    <p>And I used those knowledge to create this portfolio.</p>
                </div>
                <div className="pt-8">
                    <p className="font-bold text-xl">Skills</p>
                    <p>Below are the summarized version of my skills, you can Download my Resume to know more! </p>
                    <div className="mt-5 grid grid-cols-1 gap-8
                    sm:grid-cols-2
                    *:flex *:flex-col ">
                        <div >
                            <p className="font-semibold">Web Development</p>
                            <ul className="list-disc pl-6">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>ReactJS</li>
                                <li>Tailwind</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>
                        <div >
                            <p className="font-semibold">Design</p>
                            <ul className="list-disc pl-6">
                                <li>Web UI/UX</li>
                                <li>Design Systems</li>
                                <li>Design Thinking</li>
                            </ul>
                        </div>

                        <div >
                            <p className="font-semibold">Soft Skills</p>
                            <ul className="list-disc pl-6">
                                <li>Lead</li>
                                <li>Active Listening</li>
                                <li>Communication</li>
                                <li>Time Management</li>
                                <li>Critical Thinking</li>
                                <li>Willingness and ability to learn</li>
                            </ul>
                        </div>
                        <div >
                            <p className="font-semibold">Tools</p>
                            <ul className="list-disc pl-6">
                                <li>Figma</li>
                                <li>Visual Studio</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>Connect to me through  <a href="https://www.linkedin.com/in/m-p-c/" target="_blank" rel="noopener noreferrer"> <b><u>LinkedIn</u></b></a> or to my email: <b>mpgcapili@gmail.com</b></p>
            </div>
        </div>
    </>

export default About;