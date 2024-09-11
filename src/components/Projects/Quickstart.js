import React from 'react'
import { H1, H2, H3, P, ImgSubtitle, Image } from '../../projectformats/Formats'
import p1prob from '../../Images/Quickstart/p1prob.jpg';
import p1sol from '../../Images/Quickstart/p1sol.jpg';
import p2prob from '../../Images/Quickstart/p2prob.jpg';
import p2sol from '../../Images/Quickstart/p2sol.jpg';
import scorecardv1 from '../../Images/Quickstart/Scorecards v1.jpg';
import scorecard from '../../Images/Quickstart/Scorecard.jpg';
import scorecardonly from '../../Images/Quickstart/Score Card.jpg';
import servernew from '../../Images/Quickstart/Server new.jpg';
import serverrunning from '../../Images/Quickstart/Server running.jpg';

const Quickstart = () => {
    return (
        <div>
            <div className="text-3xl font-bold">QuickStart</div>
            <P>A website that manages server’s settings.</P>
            <P className='italic mb-5'>
                Disclaimer:<br />
                There is a lot of sensitive data so I will only show few of the design because of restriction.
            </P>
            <H1>Intro</H1>
            <P>QuickStart lets the developer manage their local server settings. They can create, edit, and delete their servers.</P>


            <H1>Process</H1>
            <div className='flex flex-col gap-8 mb-10'>
                <div className='getting-info'>
                    <H2>01 Getting Information</H2>
                    <P>So I was tasked to Redesign and improve the UX and UI of the website. As always I gather first some information before creating design.</P>
                    <p>In this case, I asked the following main questions:</p>
                    <ul className='list-disc pl-6 mb-4'>
                        <li>What part of website annoys you?</li>
                        <li>What part of website you think needs improvement?</li>
                        <li>Any feature you think is nice to have?</li>
                        <li>What kind of users uses it?</li>
                        <li>Do we need to be responsive?</li>
                    </ul>
                    <P>After getting all information, I organized them and prioritize which one should be tackled first.</P>
                </div>
                <div className='ideation-and-wireframe'>
                    <H2>02 Ideation and Wireframe</H2>
                    <P>After getting the information, i proceed to create some mockups.</P>
                    <P>Usually I started the design from mobile first approach, but at the time I started the project, the lead of the project told me responsiveness is not a priority.</P>
                    <P>So with that in mind, I focus myself to focus the improvement and redesigning using web size.</P>
                </div>
                <div className='feedback-testing-and-iteration'>
                    <H2>03 Feedback/Testing and Iteration</H2>
                    <P>After mockups, I presented it to them. A lot of changes was made.</P>

                    <P>I spent most of my time on the Score cards, because it has man details that needs to put in 1 card and it should make sense. So it was pretty hard. Below is my initial version.</P>
                    <Image src={scorecardv1} subtitle="Initial design I made for scorecards" />
                    <P>But after I presented it to them, the feedback I get is it is too long in height. Scorecards are summaries, so when a user logins to the site, they should be able to
                        see all summary detail for the 1st scorecard they will see.
                    </P>
                </div>
            </div>

            <H1>Problems and Solutions</H1>
            <P>I listed below some of the problems I fixed. I will tackle this in Problem and Solution format.</P>
            <div className='flex flex-col gap-10'>

                {/* == Problem 1 == */}
                <div>
                    <H2>#1 Poor summary cards hierarchy</H2>
                    <div className='flex flex-col gap-6 mt-1'>
                        <div>
                            <H3>Problem</H3>
                            <P>Each card represents some kind of summary specifically for one unique server, but the data that being presented is all over the place</P>
                            *put some image Here
                            <p>So here are the main problems on the card:</p>
                            <ul className='list-decimal pl-6 mb-4'>
                                <li>Have poor visual hierarchy.</li>
                                <li>Inconsistent spacing of information.</li>
                                <li>Incorrect usage of color.</li>
                                <li>Poor groupings of data</li>
                                <li>Lack of negative space (information looks squished).</li>
                                <li>Poor text and background contrast.</li>
                            </ul>
                            <Image src={p1prob} subtitle="Early version of Scorecard" />
                        </div>
                        <div>
                            <H3>Solution</H3>
                            <p>High level solution is</p>
                            <ul className='list-decimal pl-6 mb-4'>
                                <li>Use proper Font weights to indicate hierarchy.</li>
                                <li>Introduce fix spacing around information and groups.</li>
                                <li>Introduce a circle symbol to indicate level and to avoid cognitive overload.</li>
                                <li>Group all related information.</li>
                                <li>Proper usage of text and background contrast, if needed check contrast checker on Google.</li>
                            </ul>
                            <P>Also with this design, I was able to somehow make the height a little bit shorter compare to the initial redesign I made.</P>
                            <Image src={p1sol} subtitle="2nd Iteration Redesign of Scorecard" />
                        </div>
                    </div>
                </div>

                {/* == Problem 2 == */}
                <div>
                    <H2>#2 Lacking of negative spaces</H2>
                    <div className='flex flex-col gap-6 mt-1'>
                        <div>
                            <H3>Problem</H3>
                            <P>I noticed there is a lack of negative space in some areas like the navigator and rows here, and because of that, information looks cramped and very hard to scan.</P>
                            <Image src={p2prob} subtitle="Current Design of Server Page and navigator" />
                        </div>
                        <div>
                            <H3>Solution</H3>
                            <P>Create a proper spacing for Rows, Cards, etc. In this way each element will be easy to scan, will less the chance of cognitive overload, and it will look concise and consistent.</P>
                            <P>As you can see below, I gave it proper negative space WITHOUT sacrificing the original length</P>
                            <Image src={p2sol} subtitle="Redesign of the Server page and navigator" />
                        </div>

                    </div>
                </div>
                {/* == Problem 2 == */}
                <div>
                    <H2>#2 Lacking of negative spaces</H2>
                    <div className='flex flex-col gap-6 mt-1'>
                        <div>
                            <H3>Problem</H3>
                            <P>I noticed there is a lack of negative space in some areas like the navigator and rows here, and because of that, information looks cramped and very hard to scan.</P>
                            <Image src={p2prob} subtitle="Current Design of Server Page and navigator" />
                        </div>
                        <div>
                            <H3>Solution</H3>
                            <P>Create a proper spacing for Rows, Cards, etc. In this way each element will be easy to scan, will less the chance of cognitive overload, and it will look concise and consistent.</P>
                            <P>As you can see below, I gave it proper negative space WITHOUT sacrificing the original length</P>
                            <Image src={p2sol} subtitle="Redesign of the Server page and navigator" />
                        </div>

                    </div>
                </div>
                {/* == Final Design == */}
                <div>
                    <H1>Final Design</H1>
                    <div className='flex flex-col gap-6 mt-1'>
                        <div>
                            <P>Here are the High Fidelities for the final design.</P>
                        </div>
                        <Image src={scorecardonly} subtitle="The new redesign of Score Card" />
                        <Image src={scorecard} subtitle="The new redesign of Scorecard Page" />
                        <Image src={serverrunning} subtitle="The new redesign of Server: Running Page" />
                        <Image src={servernew} subtitle="The new redesign of Server: New Page" />
                    </div>
                </div>

                {/* == What I learned == */}
                <div>
                    <H1>What I learned</H1>

                    <P>This mostly on the UX side, I learned a little bit more about proper usage of negative space.</P>
                    <P>Because even though I change the negative spaces around element and change the padding, margin, font size, font weight, I still manage to retain the original size and did not take up too much space.</P>
                    <P>I know there is still much to learn, and I will keep doing so.</P>
                </div>
            </div>
        </div >
    )
}

export default Quickstart