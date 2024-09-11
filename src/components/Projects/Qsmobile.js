import React from 'react'
import { H1, H2, H3, P, ImgSubtitle, Image } from '../../projectformats/Formats'

import createlocalserver from "../../Images/Quickstart/On the go/Creating local server.png"
import newpage from "../../Images/Quickstart/On the go/Server new page.png"
import runningpage from "../../Images/Quickstart/On the go/Server running page.png"
import selectmainserver from "../../Images/Quickstart/On the go/Selecting Main Server.png"
import scorecardpage from "../../Images/Quickstart/On the go/Scorecard page.png"

const Qsmobile = () => {
    return (
        <div>
            <div className="text-3xl font-bold">QuickStart on the GO</div>
            <P>A mobile version of QuickStart.</P>
            <P className='italic mb-5'>
                Disclaimer:<br />
                There is a lot of sensitive data so I will only show few of the design because of restriction.
            </P>
            <H1>Intro</H1>
            <P>QuickStart website can do many things when it comes to local server, that is why the project was created to help developer create, update, share, or delete their server using their mobile phone.</P>


            <H1>Process</H1>
            <div className='flex flex-col gap-8 mb-10'>
                <div className='getting-info'>
                    <H2>01 Getting Information</H2>
                    <P>Since this is a mobile phone, I expect some limitation. And this was confirmed by the developers themselves. </P>
                    <P>The project will be developed with me involved from the start. So I started this process by <i><b>asking this most important question</b></i> </P>
                    <span className='text-center italic font-medium'><P>"What feature on the web version would be on the mobile version?”</P></span>
                    <p>I also asked the questions:</p>
                    <ul className='list-disc pl-6 mb-4'>
                        <li>Who would be mostly the user (developer or managers or normal user)?</li>
                        <li>Does it need to perform exactly like the website? or are we going to remove some of the functionalities?</li>
                    </ul>
                    <p>I did gather a lot of information, but to summarize all the information, I get the following idea:</p>
                    <ul className='list-disc pl-6 mb-4'>
                        <li>Intended for both managers and developers, meaning it should be intuitive enough to be used by both users</li>
                        <li>We are going to remove the ability to create server (for now)</li>
                    </ul>
                </div>
                <div className='ideation-and-wireframe'>
                    <H2>02 Ideation and Wireframe</H2>
                    <P>After organizing the information, I proceed to create some mockups. </P>
                    <P>Since this is a mobile app, I didn’t bother to create versions for tablet and web browser size.</P>
                    <P>Luckily enough, I already did a version for a mobile screen, even though it wasn't required at that time, when I was redesigning the web version of the <b><u>QuickStart.</u></b></P>
                    <P>All I need to do is to tweak some design or update the design I already did to match the look and feel of a mobile application.</P>
                </div>
                <div className='feedback-testing-and-iteration'>
                    <H2>03 Feedback/Testing and Iteration</H2>
                    <P>After mockups, I presented it on the team, few feedbacks were made but all in all, everything is going smoothly.</P>
                    <P>1 feedback that struck on me is:</P>
                    <span className='text-center italic font-medium'><P>"Since we have small screen and there is a lot of Cards to show, does that mean user have to scroll down a lot?”</P></span>
                    <P>And this feedback is the one I spent my time researching.</P>
                </div>
            </div>

            <H1>Feedback and Solution</H1>
            <P>I listed below some of the problems I fixed. I will tackle this in Problem and Solution format.</P>
            <div className='flex flex-col gap-10'>

                {/* == Problem 1 == */}
                <div>
                    <H2>#1 Too many cards to scroll</H2>
                    <div className='flex flex-col gap-6 mt-1 -z-10'>
                        <div>
                            <H3>Feedback</H3>
                            <P>Since this is a server manager application, we will exepct a bunch of local server here. And thats where the issue comes in.</P>
                            <P>To give some context first, there are <b>MAIN SERVERS</b>, which then user can create a local server under the MAIN SERVER</P>
                            <P>So for example we have MAIN SERVER1 and MAIN SERVER2, and if each of them have 5 local servers, <b>we would then have to show 10 Cards</b>(containing summary about information for each server) <b>on a small screen</b>! <b>AND THAT IS NOT A GOOD UX!</b> </P>
                            <P>So this is how it looks like if we don't fix this issue</P>
                            <div className='flex justify-center' >
                                <iframe className=" w-full min-w-[300px]  min-h-[300px]" src="https://youtube.com/embed/xZrx5oWy0AY" allowFullScreen wmode="opaque" />
                            </div>
                        </div>
                        <div>
                            <H3>Solution</H3>
                            <P>The solution is pretty simple. Dropdown! so instead of showing 10 Cards, we would have to show only 2! one for each MAIN SERVER</P>
                            <P>And this is where the dropdown comes in, it contains the local servers for each main server. </P>
                            <P>If the user want to see other local server, all he has to do is to <b>select other server from the dropdown</b>, and the <b>information on the cards will change accordingly</b>. </P>
                            <P>This is how it looks like when we do dropwdown instead</P>
                            <div className='flex justify-center' >
                                {/* <iframe width={"400px"} height={"600px"} src="https://youtube.com/embed/J91zhqhGRIQ" wmode="Opaque" /> */}
                                <iframe className=" w-full min-w-[300px]  min-h-[300px]" src="https://youtube.com/embed/J91zhqhGRIQ" wmode="Opaque" />
                            </div>
                            <div>
                                <ImgSubtitle>This is just a Prototype but this is what I expect</ImgSubtitle>
                            </div>
                        </div>

                    </div>
                </div>


                {/* == Final Design == */}
                <div>
                    <H1>Final Design</H1>
                    <div className='flex flex-col gap-6 mt-1 mb-8'>
                        <P>Here are the High Fidelities for the final design.</P>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
                            <Image src={scorecardpage} subtitle="ScoreCard Page" />
                            <Image src={selectmainserver} subtitle="Selecting Main servers" />
                            <Image src={runningpage} subtitle="Running local server page" />
                            <Image src={newpage} subtitle="Creating New Local Server" />
                            <Image src={createlocalserver} subtitle="Creating local server fields" />
                        </div>
                    </div>

                    <P>Search function can be added, it will introduce together with other minor feature such as Pin scorecards, Darkmode, Pipeline, etc.</P>
                    <P>For the meantime, the team decided to focus first on major and important pages and features of QuickStart.</P>
                </div>

                {/* == What I learned == */}
                <div>
                    <H1>What I learned</H1>
                    <P>The approach for the mobile screen is very much different. I mostly work on the website so I was used to design on a large screen.</P>
                    <P>I think the very core knowledge I get from this is to remove all unnecessary element and prioritize which information need to show.</P>
                    <P>I know I can improve more when it comes to designing mobile screen.</P>
                </div>
            </div>
        </div >
    )
}

export default Qsmobile